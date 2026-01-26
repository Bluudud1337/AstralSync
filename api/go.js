export default function handler(req, res) {
  const encodedUrl = req.query.url;

  if (!encodedUrl) {
    return res.status(400).send("Missing url parameter");
  }

  let decodedUrl;
  try {
    decodedUrl = decodeURIComponent(encodedUrl);
  } catch {
    return res.status(400).send("Invalid encoding");
  }

  if (!decodedUrl.startsWith("http://") && !decodedUrl.startsWith("https://")) {
    return res.status(400).send("Invalid URL");
  }

  res.redirect(302, decodedUrl);
}
