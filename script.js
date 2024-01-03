 // public/script.js
 document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submitOrderBtn').addEventListener('click', submitOrder);
  });
  
  function submitOrder() {
    const item = document.getElementById('item').value;
    const quantity = document.getElementById('quantity').value;
    const NO = document.getElementById('NO').value;
    
    if (item , quantity && NO) {
      const order = {
        item,
        quantity,
        NO
      };
  
      fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
        document.getElementById('orderForm').reset();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    } else {
      alert('Please fill in all fields');
    }
  }