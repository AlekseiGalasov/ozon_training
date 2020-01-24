export default function toggleCart() {
    const btnCard = document.querySelector('#cart');
const modalCard = document.querySelector('.cart');
const closeModal = document.querySelector('.cart-close');

btnCard.addEventListener('click', function() {
    modalCard.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', function() {
    modalCard.style.display = 'none';
    document.body.style.overflow = '';
});
}