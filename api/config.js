// Datos públicos para el widget de subida (NO incluye el api_secret)
module.exports = async (req, res) => {
  res.json({
    cloudName: process.env.CLOUDINARY_CLOUD_NAME || "",
    apiKey: process.env.CLOUDINARY_API_KEY || "",
  });
};
