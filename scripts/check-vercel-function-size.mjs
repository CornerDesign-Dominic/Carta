import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const limitMiB = Number(process.env.VERCEL_FUNCTION_SIZE_LIMIT_MIB ?? 10);
const functionsDirectory = join('.vercel', 'output', 'functions');

if (!Number.isFinite(limitMiB) || limitMiB <= 0) {
  throw new Error('VERCEL_FUNCTION_SIZE_LIMIT_MIB must be a positive number.');
}

const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx';
execFileSync(npx, ['vercel@latest', 'build', '--yes', '--prod'], {
  stdio: 'inherit',
  env: process.env,
  shell: process.platform === 'win32',
});

if (!existsSync(functionsDirectory)) {
  throw new Error('Vercel build did not create .vercel/output/functions.');
}

function getDirectorySize(directory) {
  return readdirSync(directory, { withFileTypes: true }).reduce((total, entry) => {
    const entryPath = join(directory, entry.name);
    return total + (entry.isDirectory() ? getDirectorySize(entryPath) : statSync(entryPath).size);
  }, 0);
}

function findFunctionBundles(directory, relativeDirectory = '') {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (!entry.isDirectory()) {
      return [];
    }

    const entryPath = join(directory, entry.name);
    const relativePath = join(relativeDirectory, entry.name);
    if (entry.name.endsWith('.func')) {
      return [{ name: relativePath, bytes: getDirectorySize(entryPath) }];
    }

    return findFunctionBundles(entryPath, relativePath);
  });
}

const functions = findFunctionBundles(functionsDirectory)
  .sort((left, right) => right.bytes - left.bytes);

if (functions.length === 0) {
  throw new Error('No Vercel Function bundles were found.');
}

console.log(`Function bundle limit: ${limitMiB.toFixed(2)} MiB`);
for (const functionBundle of functions) {
  console.log(`${functionBundle.name}: ${(functionBundle.bytes / 1024 / 1024).toFixed(2)} MiB`);
}

const oversized = functions.filter((functionBundle) => functionBundle.bytes > limitMiB * 1024 * 1024);
if (oversized.length > 0) {
  throw new Error(`Function bundle limit exceeded: ${oversized.map(({ name }) => name).join(', ')}`);
}
