// Helpers compartidos para las funciones serverless (archivo con prefijo _ = no es una ruta)
const crypto = require("crypto");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const SESSION_SECRET = process.env.SESSION_SECRET || "dev-secret-change-me";
const SESSION_HOURS = 8;

function hmac(payload) {
  return crypto.createHmac("sha256", SESSION_SECRET).update(payload).digest("hex");
}

function createSession() {
  const exp = Date.now() + SESSION_HOURS * 60 * 60 * 1000;
  const payload = String(exp);
  return payload + "." + hmac(payload);
}

function verifySession(token) {
  if (!token) return false;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return false;
  if (hmac(payload) !== sig) return false;
  if (Number(payload) < Date.now()) return false;
  return true;
}

function parseCookies(req) {
  const header = req.headers.cookie || "";
  const out = {};
  header.split(";").forEach((part) => {
    const idx = part.indexOf("=");
    if (idx === -1) return;
    const k = part.slice(0, idx).trim();
    const v = part.slice(idx + 1).trim();
    if (k) out[k] = decodeURIComponent(v);
  });
  return out;
}

function isAuthed(req) {
  return verifySession(parseCookies(req)["admin_session"]);
}

function readBody(req) {
  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  return body || {};
}

// Lee el orden desde el context, sin importar el formato que devuelva Cloudinary
function readOrder(resource) {
  const c = resource.context || {};
  const raw =
    (c.custom && c.custom.order) != null ? c.custom.order :
    c.order != null ? c.order : null;
  const n = Number(raw);
  return Number.isFinite(n) ? n : Number.MAX_SAFE_INTEGER;
}

const VALID_SECTIONS = [
  "trabajos",
  "servicio-impermeabilizacion",
  "servicio-techos",
  "servicio-durlock",
  "servicio-pintura",
  "servicio-herreria",
  "servicio-yeso",
  "servicio-parquizacion",
  "servicio-mas",
];

module.exports = {
  cloudinary,
  createSession,
  verifySession,
  parseCookies,
  isAuthed,
  readBody,
  readOrder,
  VALID_SECTIONS,
};
