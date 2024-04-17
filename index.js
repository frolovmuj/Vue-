import express from 'express';
const app = express();
const port = 3010;

app.listen(port, function () {
  console.log(`http://localhost:${port}`);
});

// Настройка POST-запроса — JSON
app.use(express.json());

import cors from 'cors';

app.use(cors({ origin: 'http://localhost:5173' }));

// Настройка БД
import mongoose from 'mongoose';
mongoose.connect('mongodb://127.0.0.1:27017/vue-pedali');

// Схемы
const itemSchema = new mongoose.Schema({
  _id: mongoose.ObjectId,
  title: String,
  imgUrl: String,
  price: Number,
  favourite: Boolean,
  inCart: Boolean,
});

const Item = mongoose.model('items', itemSchema);

const sentItemSchema = new mongoose.Schema({
  id: mongoose.ObjectId,
  title: String,
  imgUrl: String,
  price: Number,
  favourite: Boolean,
  inCart: Boolean,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const SentItem = mongoose.model(
  'boughts-items',
  sentItemSchema
);

app.get('/items', async function (req, res) {
  const items = await Item.find({});
  res.json(items);
});
app.get('/cart', async function (req, res) {
  const items = await Item.find({ inCart: true });
  res.json(items);
});
app.get('/favorites', async function (req, res) {
  const items = await Item.find({ favourite: true });
  res.json(items);
});
app.post('/items/add-to-cart', async function (req, res) {
  const id = req.body.id;
  const item = await Item.findOne({ _id: id });
  item.inCart = true;
  await item.save();
  res.json(item);
});
app.post(
  '/items/remove-from-cart',
  async function (req, res) {
    const id = req.body.id;
    const item = await Item.findOne({ _id: id });
    item.inCart = false;
    await item.save();
    res.json(item);
  }
);
app.post(
  '/items/add-to-favorites',
  async function (req, res) {
    const id = req.body.id;
    const item = await Item.findOne({ _id: id });
    item.favourite = true;
    await item.save();
    res.json(item);
  }
);
app.post(
  '/items/remove-from-favorites',
  async function (req, res) {
    const id = req.body.id;
    const item = await Item.findOne({ _id: id });
    item.favourite = false;
    await item.save();
    res.json(item);
  }
);
app.get('/cards/card', async function (req, res) {
  const item = await Item.findOne({ _id: req.query.id });
  res.json(item);
});
app.get('/boughts-items', async function (req, res) {
  const items = await SentItem.find().sort({ createdAt: -1 });
  res.json(items);
});
app.post('/boughts-items', async function (req, res) {
  const arrayOfId = req.body.arrayOfId;
  const items = [];
  for (const id of arrayOfId) {
    const item = await Item.findOne({ _id: id });
    if (item) {
      item.inCart = false;
      await item.save();
      items.push(item);

      const newItem = await SentItem.create({
        // Добавьте свойства нового элемента здесь
        id: item._id,
        title: item.title,
        imgUrl: item.imgUrl,
        price: item.price,
        favourite: item.favourite,
        inCart: item.inCart,
      });
      await newItem.save();
    }
  }
  res.json(items);
});
