function authMiddleware(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    return res.redirect("/").status(403).json({ message: "Yetkisiz erişim!" });
  }
}

module.exports = { authMiddleware };
