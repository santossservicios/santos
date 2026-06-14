const { cloudinary, isAuthed, readBody } = require("../_lib");

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "method" });
  if (!isAuthed(req)) return res.status(401).json({ error: "unauthorized" });
  const { public_id } = readBody(req);
  if (!public_id) return res.status(400).json({ error: "missing public_id" });
  try {
    await cloudinary.uploader.destroy(public_id, { invalidate: true });
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: String(e.message || e) });
  }
};
