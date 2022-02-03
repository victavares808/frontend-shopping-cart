require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it ('fetchProducts é uma função fecthProducts', () => {
    expect(typeof fetchProducts).toBe ('function');
  })

  it ('executar fetchProducts com o argumento específico e testar se fetch foi chamada', async () => {
    const data = await fetchProducts ('computador');
    expect(fetch).toHaveBeenCalled();
  })

});;

