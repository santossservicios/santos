const { cloudinary, isAuthed, readBody } = require("../_lib");

// Recibe { order: [public_id, public_id, ...] } y guarda el índice como context.order
module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "method" });
  if (!isAuthed(req)) return res.status(401).json({ error: "unauthorized" });
  const { order } = readBody(req);
  if (!Array.isArray(order)) return res.status(400).json({ error: "order must be array" });
  try {
    await Promise.all(
      order.map((id, i) => cloudinary.api.update(id, { context: `order=${i}` }))
    );
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: String(e.message || e) });
  }
};
