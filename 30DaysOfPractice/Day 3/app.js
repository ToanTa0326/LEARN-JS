const openModal = document.querySelector('.modalBtn'),
modal = document.querySelector('.modal'),
iconCloseModal = document.querySelector('.modal__header i'),
closeBtn = document.querySelector('.modal__footer button');

function toggleModal(){
    modal.classList.toggle('hide');
}

openModal.addEventListener('click', toggleModal);
iconCloseModal.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);

modal.addEventListener('click', (e) => {
    if(e.target == e.currentTarget) toggleModal()
})