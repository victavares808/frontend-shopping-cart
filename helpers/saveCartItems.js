const saveCartItems = (cartItems) => localStorage.setItem('cartItems', cartItems); // key é a string

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
