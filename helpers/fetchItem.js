const fetchItem = async (paramItem) => {
    if (!paramItem) {
      throw new Error('You must provide an url');
    }
  
    const response = await fetch(`https://api.mercadolibre.com/items/${paramItem}`);
    const info = await response.json();
    return info;
};  

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
