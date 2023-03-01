const openModal = document.querySelector('.Boton1');

const modal = document.querySelector('.modal');

const closemodal = document.querySelector('.modal__close');


openModal.addEventListener('click', (e)=> {
    e.preventDefault();
    modal.classList.add('modal--show');

});

closemodal.addEventListener('click', (e)=> {
    e.preventDefault();
    modal.classList.remove('modal--show');

});