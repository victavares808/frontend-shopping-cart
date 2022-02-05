require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const {
  fetchProducts
} = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
      it('teste se fetchProducts é uma função', () => {
        expect(typeof fetchProducts).toBe('function'); // espera que o tipo de fetchProducts seja uma função.
      })

      it('executar fetchProducts com o argumento específico e testar se fetch foi chamada', async () => {
        await fetchProducts('computador');
        const data = "https://api.mercadolibre.com/sites/MLB/search?q=computador";
        expect(fetch).toHaveBeenCalledWith(data); // verifica se fetch leva ao endereço url correto.
      })

      it('teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint desejado', async () => {
        const url = "https://api.mercadolibre.com/sites/MLB/search?q=computador";
        const funcão = await fetchProducts('computador');
        expect(fetch).toHaveBeenCalledWith(url);
      })

      it('teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto', async () => {
        expect(typeof fetchProducts('computador')).toEqual(typeof computadorSearch);
      })

      it('teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com mensagem', async () => {
          try {
            await fetchItem('');
          } catch (error) {
            expect(error).toEqual(new Error('You must provide an url'));
          }
        });
      });