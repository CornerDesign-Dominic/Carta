import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';
import { MASTER_DATA_PANEL_TABS } from './masterDataPanelLoader.js';

const MasterDataSessionContext = createContext(null);

export function createInitialMasterDataFiles() {
  return { ownData: [], partners: [], catalogItems: [] };
}

export function createLastUsedReference(record) {
  return record ? { recordId: record.id, sourceFileId: record.sourceFileId } : null;
}

export function replaceMasterDataFile(loadedFiles, tabId, loadedFile) {
  return { ...loadedFiles, [tabId]: [loadedFile] };
}

export function isLastUsedRecord(record, reference) {
  return Boolean(record && reference && record.id === reference.recordId && record.sourceFileId === reference.sourceFileId);
}

export function reconcileLastUsedReference(reference, files) {
  if (!reference) return null;

  const matches = files.flatMap((file) => file.records).filter((record) => record.id === reference.recordId);
  return matches.length === 1 ? createLastUsedReference(matches[0]) : null;
}

export function MasterDataSessionProvider({ children }) {
  const initialFilesRef = useRef(createInitialMasterDataFiles());
  const [loadedFiles, setLoadedFiles] = useState(initialFilesRef.current);
  const loadedFilesRef = useRef(initialFilesRef.current);
  const [lastUsedOwnData, setLastUsedOwnData] = useState(null);
  const [lastUsedPartner, setLastUsedPartner] = useState(null);

  const replaceLoadedFile = useCallback((tabId, loadedFile) => {
    const previousFiles = loadedFilesRef.current[tabId];
    const nextFiles = replaceMasterDataFile(loadedFilesRef.current, tabId, loadedFile);
    loadedFilesRef.current = nextFiles;
    setLoadedFiles(nextFiles);

    if (tabId === 'ownData') {
      setLastUsedOwnData((current) => reconcileLastUsedReference(current, nextFiles.ownData));
    }
    if (tabId === 'partners') {
      setLastUsedPartner((current) => reconcileLastUsedReference(current, nextFiles.partners));
    }

    return previousFiles;
  }, []);

  const getLoadedFiles = useCallback(() => loadedFilesRef.current, []);

  const records = useMemo(() => Object.fromEntries(
    MASTER_DATA_PANEL_TABS.map((tab) => [tab.id, loadedFiles[tab.id].flatMap((file) => file.records)]),
  ), [loadedFiles]);

  const value = useMemo(() => ({
    loadedFiles,
    records,
    lastUsedOwnData,
    lastUsedPartner,
    getLoadedFiles,
    replaceLoadedFile,
    rememberOwnData: (record) => setLastUsedOwnData(createLastUsedReference(record)),
    rememberPartner: (record) => setLastUsedPartner(createLastUsedReference(record)),
  }), [getLoadedFiles, lastUsedOwnData, lastUsedPartner, loadedFiles, records, replaceLoadedFile]);

  return <MasterDataSessionContext.Provider value={value}>{children}</MasterDataSessionContext.Provider>;
}

export function useMasterDataSession() {
  const session = useContext(MasterDataSessionContext);
  if (!session) throw new Error('useMasterDataSession muss innerhalb eines MasterDataSessionProvider verwendet werden.');
  return session;
}
