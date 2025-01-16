export default function handler(req, res) {
  const apiKey = process.env.HELIUS_API_KEY;

  // Set the correct Content-Type header
  res.setHeader('Content-Type', 'application/json');

  // Check if the API key is available
  if (apiKey) {
    console.log('api key:' + apiKey)
    res.status(200).json({ apiKey });
  } else {
    console.error("Helius API key not found in environment variables.");
    res.status(500).json({ error: 'API key not configured' });
  }
}