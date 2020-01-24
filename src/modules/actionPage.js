import filter from './filter';

export default function actionPage() {

    const cards = document.querySelectorAll('.goods .card');
    const discountCheckbox = document.querySelector('#discount-checkbox');
    const min = document.querySelector('#min');
    const max = document.querySelector('#max');
    const search = document.querySelector('.search-wrapper_input');
    const searchBtn = document.querySelector('.search-btn');

    discountCheckbox.addEventListener('click', filter);
    min.addEventListener('change', filter);
    max.addEventListener('change', filter);

    searchBtn.addEventListener('click', () => {
        const searchText = new RegExp(search.value.trim(), 'i');
        cards.forEach((card) => {
            const title = card.querySelector('.card-title');
            if(!searchText.test(title.textContent)) {
                card.parentNode.style.display = 'none';
            } else {
                card.parentNode.style.display = '';
            }
        });
    });

}