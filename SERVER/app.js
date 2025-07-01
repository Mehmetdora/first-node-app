// import
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const session = require("express-session");
const cors = require("cors");

const { authMiddleware } = require("./middlewares/auth");

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
    name: "deneme-session",
    cookie: {
      secure: false, // HTTPS değilse false olmalı
      maxAge: 10000, // oturumun kaç ms boyunca açık kalacağı ayarı(session yaşama süresi)
    },
  })
);

// Route'lar

// Ana route dosyaları oluşturma (web.php içinde controller kullanımı gibi)
const orderRouter = require("./routes/orders");
const authRouter = require("./routes/auth");
const dashboardRouter = require("./routes/dashboard");

// web.php içinde controller kullanırken ana route uzantısı verir gibi
app.use("/orders", orderRouter);
app.use("/auth", authRouter);
app.use("/dashboard", authMiddleware, dashboardRouter);

// Port dinle
// LAraveldeki php artisan serve yapmak ile aynı işlemi yapıyor, en son
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
