import filter from './filter';

export default function renderCatalog() {
    const cards = document.querySelectorAll('.goods .card');
    const catalogList = document.querySelector('.catalog-list');
    const catalogBtn = document.querySelector('.catalog-button');
    const catalogWrapper = document.querySelector('.catalog');
    const filterTitle = document.querySelector('.filter-title h5');
    const categories = new Set();
        cards.forEach((card) => {
            categories.add(card.dataset.category);
        });
        categories.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item;
            catalogList.appendChild(li);
        });

        const allLi = catalogList.querySelectorAll('li');

        catalogBtn.addEventListener('click', ()=> {
            if(catalogWrapper.style.display) {
                catalogWrapper.style.display = '';    
            } else {
            catalogWrapper.style.display = 'block';
            }
            if(event.target.tagName === 'LI') {
                cards.forEach((card) => {
                    if(card.dataset.category !== event.target.textContent) {
                        card.parentNode.style.display = 'none';
                    } else {
                        card.parentNode.style.display = 'block';
                    }
                });
                allLi.forEach((elem) => {
                    if(elem === event.target) {
                        elem.classList.add('active');
                    } else {
                        elem.classList.remove('active');
                    }
                });
                filterTitle.textContent = event.target.textContent + ':';
                filter();
            }
        });
}