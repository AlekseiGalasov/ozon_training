export default function filter() {
    const discountCheckbox = document.querySelector('#discount-checkbox');
    const min = document.querySelector('#min');
    const max = document.querySelector('#max');
    const cards = document.querySelectorAll('.goods .card');
    const activeLi = document.querySelector('.catalog-list li.active');

    cards.forEach((card) => {
        const cardPrice = card.querySelector('.card-price');
        const price = parseFloat(cardPrice.textContent);
        const discount = card.querySelector('.card-sale');

        card.parentNode.style.display = "";


        if((min.value && price < min.value) || (max.value && price > max.value)) {
            card.parentNode.style.display = "none";
        } else if (discountCheckbox.checked && !discount) {
            card.parentNode.style.display = "none";
        } else if(activeLi) {
            if(card.dataset.category !== activeLi.textContent) {
                card.parentNode.style.display = "none";
            }
        }
    });
}