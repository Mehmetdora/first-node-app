exports.login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(401).json({ success: false, message: "Bilgiler eksik" });
  } else if (username !== "mehmet" || password !== "123") {
    res.status(401).json({ success: false, message: "Bilgiler hatalı" });
  } else {
    // oturum aç-giriş yap

    req.session.user = { id: 1, username: "mematii", password: "123" };

    console.log("girildi, oturum açıldı");

    res.status(200).json({
      success: true,
      message: "Giriş Yapıldı",
      user: req.session.user,
    });
  }
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Çıkış yapılamadı" });
    }
    res.clearCookie("deneme-session");
    res.json({ message: "Çıkış başarılı" });
  });
};
