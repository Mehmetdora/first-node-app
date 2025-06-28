// Geçici veritabanı (memory'de)
let orders = [
  {
    tableNumber: 0,
    items: ["Çay", "Simit"],
    note: "Çay açık olsun",
  },
  {
    tableNumber: 1,
    items: ["Çay", "poğaça"],
    note: "Çay açık olsun",
  },
  {
    tableNumber: 2,
    items: ["Çay", "bisküvi"],
    note: "Çay açık olsun",
  },
  {
    tableNumber: 3,
    items: ["Çay", "kraker"],
    note: "Çay açık olsun",
  },
  {
    tableNumber: 4,
    items: ["Çay", "kahve"],
    note: "Çay açık olsun",
  },
  {
    tableNumber: 5,
    items: ["Çay", "börek"],
    note: "Çay açık olsun",
  },
  {
    tableNumber: 6,
    items: ["Çay", "sıkma"],
    note: "Çay açık olsun",
  },
];

// POST /orders → Yeni sipariş oluştur
exports.createOrder = (req, res) => {

    // Gelen json formatındaki verileri teker teker değişkene atama
  const { tableNumber, items, note } = req.body;

  // basit bir validation
  if (!tableNumber || !items) {
    return res
      .status(400)
      .json({ message: "Masa numarası ve ürünler zorunludur" });
  }

  // gelen verilerden bir order öğesi oluştur
  const order = { tableNumber, items, note };
  orders.push(order);

  // Geriye başarılı mesajı dönme
  res.status(201).json({ message: "Sipariş oluşturuldu", order });
};

// GET /orders/:tableNumber → Masa siparişini getir
exports.getOrderByTable = (req, res) => {

    // tablo numarasını al
  const { tableNumber } = req.params;

  // validation
  const order = orders.find((o) => o.tableNumber == tableNumber);
  if (!order) {
    return res.status(404).json({ message: "Bu masa için sipariş bulunamadı" });
  }

  // bulunan order'ı dön
  res.status(200).json(order);
};


//GET /orders/all -> tüm order'lar
exports.getAll = (req,res) => {

    res.status(200).json(orders);
}
