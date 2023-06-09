const ItemCart = '.cart__items';

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({
  sku,
  name,
  image,
}) {
  const section = document.createElement('section');
  const item = document.querySelector('.items');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  item.appendChild(section);
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText; // info do ID
}

function cartItemClickListener(event) {
  const cartItem = document.querySelector(ItemCart);
  event.target.remove();
  saveCartItems(cartItem.innerHTML);
}

function createCartItemElement({
  sku,
  name,
  salePrice,
}) {
  const li = document.createElement('li');
  const cartItem = document.querySelector(ItemCart);
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  cartItem.appendChild(li);
  saveCartItems(cartItem.innerHTML);
}

function apiInfo(produtos) {
  produtos.forEach((randomProduct) => {
    createProductItemElement({
      sku: randomProduct.id,
      name: randomProduct.title,
      image: randomProduct.thumbnail,
    });
  });
}

const goToCart = async () => {
  const value = document.querySelectorAll('.item');
  value.forEach((element) => {
    const getId = getSkuFromProductItem(element);
    const getButton = element.querySelector('button');
    getButton.addEventListener('click', async () => {
      const itemAPI = await fetchItem(getId);
      console.log(itemAPI);
      const info = {
        sku: itemAPI.id,
        name: itemAPI.title,
        salePrice: itemAPI.price,
      };
      return createCartItemElement(info);
    });
  });
};

function handleItems() {
  const cartItem = document.querySelector(ItemCart);
  cartItem.innerHTML = getSavedCartItems();
  cartItem.addEventListener('click', cartItemClickListener);
}

function wipeItAll() {
  const cartItem = document.querySelector(ItemCart);
  const chooseListItem = document.querySelectorAll('li');
  chooseListItem.forEach((element) => element.remove());
  saveCartItems(cartItem.innerHTML);
}

window.onload = async () => {
  const fetchP = await fetchProducts('computador');
  const chooseClearButton = document.querySelector('.empty-cart');
  apiInfo(fetchP.results);
  goToCart();
  handleItems();
  chooseClearButton.addEventListener('click', wipeItAll);
};