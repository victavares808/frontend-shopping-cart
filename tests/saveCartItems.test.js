const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');
const fetchSimulator = require('../mocks/fetchSimulator');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
    it('Teste se, ao executar saveCartItems com o argumento determinado, o método localStorage.setItem é chamado', () => {
        saveCartItems('<ol><li>Item</li></ol>');
        expect(localStorage.setItem).toHaveBeenCalled();
    })
    it('Teste se, ao executar saveCartItems com o argumento determinado o método localStorage.setItem é chamado com dois parâmetros', () =>{
        saveCartItems('<ol><li>Item</li></ol>');
        expect(localStorage.setItem).toHaveBeenCalledWith('cartItems','<ol><li>Item</li></ol>');
    });
});