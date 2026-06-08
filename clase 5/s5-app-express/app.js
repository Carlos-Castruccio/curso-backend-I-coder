const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');
const uploadRouter = require('./routes/upload');

const currency = require('./helpers/currency');
const ifEquals = require('./helpers/ifEquals');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.engine(
  'handlebars',
  engine({
    defaultLayout: 'main',
    helpers: {
      currency,
      ifEquals
    }
  })
);

app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(indexRouter);
app.use(productsRouter);
app.use(uploadRouter);

// 404
app.use((req, res) => {
  res.status(404).render('error', {
    message: 'Página no encontrada'
  });
});

app.listen(3000, () => {
  console.log('Servidor iniciado en puerto 3000');
});