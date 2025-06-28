const express = require("express");
const router = express.Router();


/* 
  Route'larda hangi fonksiyonlar 
  çalıştırılacaksa önceden import edilmeli
*/
const {
  getOrderByTable,
  createOrder,
  getAll,
} = require("../controllers/OrderController");

/* 
    ÖNEMLİ - routerlar çalıştırılırken kodların yukarıdan aşağıya 
    doğru çalıştırıldığı için üstteki routerlar ile url eşleşirse alttaki çalışmadan
    üstteki çalıştırılır. 
*/

/* 
    tüm route'lar app içinde tanımlanan route 
    üzerinden eklenerek devam eder. 
    /orders -> ana route app içindeki
    /all -> burada eklenen yeni route uzantısı
    /orders/all -> Sonuç
*/

// GET /orders/all - tüm order'lar
router.get("/all", getAll);

// GET /orders/:tableNumber
router.get("/:tableNumber", getOrderByTable);

// POST /orders
router.post("/", createOrder);

module.exports = router;
