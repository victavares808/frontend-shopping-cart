const fetchItem = async (Alagoas) => {
    if (!Alagoas) {
      throw new Error('You must provide an url');
    }
  
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${Alagoas}`);
    const info = response.json();
    return info;
  };  

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
