require('../mocks/fetchSimulator');
const { type } = require('mocha/lib/utils');
const { fetchItem } = require('../helpers/fetchItem');
const fetchSimulator = require('../mocks/fetchSimulator');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('teste se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function'); 
  })

  it('executar fetchItem com o argumento específico e testar se fetch foi chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  })

   it('Teste se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint correto', async () => {
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(url);
  })

  it('Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.',async () => {
    expect(typeof fetchItem('MLB1615760527')).toEqual(typeof item);
  })

  it('teste se, ao chamar a função fetchItem sem argumento, retorna um erro com mensagem', async () => {
    try {
      await fetchItem('');
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  });
});
