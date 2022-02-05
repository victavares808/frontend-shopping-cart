require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('teste se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function'); 
  })

  it('executar fetchItem com o argumento específico e testar se fetch foi chamada', async () => {
    await fetchItem('MLB1615760527');
    const data = "https://api.mercadolibre.com/sites/MLB/search?q=MLB1615760527";
    expect(fetch).toHaveBeenCalledWith(data);
  })

   it('teste se, ao chamar a função fetchItem com o argumento "computador", a função fetch utiliza o endpoint desejado', async () => {
    const url = "https://api.mercadolibre.com/sites/MLB/search?q=MLB1615760527";
    const funcão = await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(url);
  })

  it('teste se, ao chamar a função fetchItem com o argumento "computador", a função fetch utiliza o endpoint desejado', async () => {
    const url = "https://api.mercadolibre.com/sites/MLB/search?q=MLB1615760527";
    const funcão = await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(url);
  })

  it('teste se, ao chamar a função fetchItem sem argumento, retorna um erro com mensagem', async () => {
    try {
      await fetchItem('');
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  });
});
