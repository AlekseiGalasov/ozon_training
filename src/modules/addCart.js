export default function addCart() {
    const cards = document.querySelectorAll('.card');
  const cartWrapper = document.querySelector('.cart-wrapper');
  const cartEmpty = document.querySelector('#cart-empty');
  const count = document.querySelector('.counter');
  
  cards.forEach((card) => {
      const btn = card.querySelector('button');
      btn.addEventListener('click', () => {
          const cardClone = card.cloneNode(true);
          cartWrapper.appendChild(cardClone);
          goodsCounter();
  
          const removeBtn = cardClone.querySelector('.btn');
          removeBtn.textContent = 'Удалить из корзины';
          removeBtn.addEventListener('click', () => {
              cardClone.remove();
              cartEmpty.style.display = 'flex';
              goodsCounter();
          });
      });
  });
  
  function goodsCounter() {
      const cardsCount = cartWrapper.querySelectorAll('.card');
      const cardsPrice = cartWrapper.querySelectorAll('.card-price');
      const totalPrice = document.querySelector('.cart-total span');
      let sum = 0;
  
      count.textContent = cardsCount.length;
      
      cardsPrice.forEach((cardPrice) => {
          let price = parseFloat(cardPrice.textContent);
          sum += price;
          totalPrice.textContent = sum;
          console.log(count.textContent);
          if(cardsCount.length !== 0) {
              cartEmpty.style.display = 'none';
          } 
      });
      
  };  
  }