const fetchProducts = async (churros) => {
  if (!churros) {
    throw new Error('You must provide an url');
  }

  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${churros}`);
  const info = response.json();
  return info;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}