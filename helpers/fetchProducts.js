const fetchProducts = async (paramProduct) => {
  if (!paramProduct) {
    throw new Error('You must provide an url');
  }

  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${paramProduct}`);
  const info = response.json();
  return info;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}