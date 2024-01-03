// app.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + ''));
app.use(express.json());

let orders = []; // Array to store orders

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/admin', (req, res) => {
  res.sendFile(__dirname + '/admin.html');
});

app.post('/api/orders', (req, res) => {
  // Handle order submission
  const order = req.body;
  console.log('New Order:', order);
  orders.push(order); // Store the order in the array

  res.json({ message: 'Order received successfully' });
});

app.get('/api/orders', (req, res) => {
  // Send the list of orders to the admin page
  res.json(orders);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
