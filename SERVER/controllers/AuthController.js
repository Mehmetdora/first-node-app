exports.login = (req, res) => {

    
  console.log("çalıştı !!!!!!!!!!!");
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(401).json({ success: false, message: "Bilgiler eksik" });
  } else if (username !== "mehmet" || password !== "123") {
    res.status(401).json({ success: false, message: "Bilgiler hatalı" });
  } else {
    // oturum aç-giriş yap

    console.log(req.body);
  }
};
