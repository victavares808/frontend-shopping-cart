const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', async () => {
  it ('teste se, ao chamar a função fetchItem com o argumento "computador", a função fetch utiliza o endpoint desejado', async () => {       
    await saveCartItems ()
  })
});
