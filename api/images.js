const { cloudinary, readOrder, VALID_SECTIONS } = require("./_lib");

// Público: lista las imágenes de una sección (por tag), ordenadas.
module.exports = async (req, res) => {
  const section = String(req.query.section || "");
  if (!VALID_SECTIONS.includes(section)) {
    return res.status(400).json({ error: "Sección inválida" });
  }
  try {
    const result = await cloudinary.search
      .expression(`tags=${section}`)
      .with_field("context")
      .max_results(100)
      .execute();

    const images = (result.resources || [])
      .map((r) => ({
        public_id: r.public_id,
        url: r.secure_url,
        width: r.width,
        height: r.height,
        order: readOrder(r),
      }))
      .sort((a, b) => a.order - b.order);

    res.setHeader("Cache-Control", "s-maxage=30, stale-while-revalidate=300");
    res.json({ images });
  } catch (e) {
    res.status(500).json({ error: "cloudinary", detail: String(e.message || e) });
  }
};
