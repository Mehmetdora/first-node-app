// import 
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

// Env dosyasını kullanılabilir hale getirme
dotenv.config();

const app = express();  // ana uygulama başlatma

// Middleware
// Gerekkli paketleri kullanıma alma
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Route'lar

// Ana route dosyaları oluşturma (web.php içinde controller kullanımı gibi)
const indexRouter = require('./routes/index');
const orderRouter = require('./routes/orders');

// web.php içinde controller kullanırken ana route uzantısı verir gibi
app.use('/orders/',orderRouter);
app.use('/', indexRouter);

// Port dinle
// LAraveldeki php artisan serve yapmak ile aynı işlemi yapıyor, en son
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  console.log('SERVER BAŞLATILDI!!!');
});
