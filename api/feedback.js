export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    response.status(405).json({ error: 'Method not allowed' });
    return;
  }

  // Placeholder endpoint: feedback is accepted anonymously, but not persisted yet.
  response.status(202).json({ ok: true });
}
