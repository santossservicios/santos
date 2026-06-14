const { isAuthed } = require("./_lib");

module.exports = async (req, res) => {
  res.json({ authed: isAuthed(req) });
};
