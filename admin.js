// public/admin.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/orders')
      .then(response => response.json())
      .then(orders => {
        const orderList = document.getElementById('orderList');
        orders.forEach(order => {
          const listItem = document.createElement('li');
          listItem.textContent = `Item: ${order.item}, Quantity: ${order.quantity}, Table Number: ${order.NO}`;
          orderList.appendChild(listItem);
        });
      })
      .catch(error => console.error('Error:', error));
  });
  