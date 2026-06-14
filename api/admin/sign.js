const { cloudinary, isAuthed, readBody } = require("../_lib");

// Firma los parámetros del Upload Widget (requiere admin logueado).
module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "method" });
  if (!isAuthed(req)) return res.status(401).json({ error: "unauthorized" });
  const { paramsToSign } = readBody(req);
  if (!paramsToSign || typeof paramsToSign !== "object") {
    return res.status(400).json({ error: "missing paramsToSign" });
  }
  const signature = cloudinary.utils.api_sign_request(
    paramsToSign,
    process.env.CLOUDINARY_API_SECRET
  );
  res.json({ signature });
};
