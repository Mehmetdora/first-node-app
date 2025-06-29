// import
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const session = require("express-session");
const cors = require("cors");

// Env dosyasını kullanılabilir hale getirme
dotenv.config();

const app = express(); // ana uygulama başlatma

// Middleware
// Gerekkli paketleri kullanıma alma
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173", // React portu
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(
  session({
    secret: "gizli-key",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // HTTPS değilse false olmalı
  })
);

// Route'lar

// Ana route dosyaları oluşturma (web.php içinde controller kullanımı gibi)
const indexRouter = require("./routes/index");
const orderRouter = require("./routes/orders");
const authRouter = require("./routes/auth");

// web.php içinde controller kullanırken ana route uzantısı verir gibi
app.use("/orders", orderRouter);
app.use("/", indexRouter);
app.use("/auth",authRouter);

// Port dinle
// LAraveldeki php artisan serve yapmak ile aynı işlemi yapıyor, en son
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
