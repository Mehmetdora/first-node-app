exports.homePage = (req, res) => {
  const val1 = 22;
  var val2 = val1 * 20 * 2222;

  res.json({
    value: val2,
    ad: "Mehmet",
    soyad: "Dora",
  });
};
