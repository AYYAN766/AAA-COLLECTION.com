 // Function to update quantity
function updateQty(btn, change) {
    const item = btn.closest('.cart-item');
    const qtySpan = item.querySelector('.quantity');
    let qty = parseInt(qtySpan.textContent);
    qty = Math.max(1, qty + change);
    qtySpan.textContent = qty;
    updateTotal();
  }
  
  // Function to remove item from cart
  function removeItem(btn) {
    const item = btn.closest('.cart-item');
    item.remove();
    updateTotal();
  }
  
  // Function to update total price
  function updateTotal() {
    let total = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
      const price = parseFloat(item.dataset.price);
      const qty = parseInt(item.querySelector('.quantity').textContent);
      total += price * qty;
    });
    document.getElementById('total').textContent = total;
  }
  
  // Run when page loads
  window.onload = updateTotal;