const searchBtn = document.querySelector('.search-btn'),
searchBox = document.querySelector('.search-box'),
searchInput = document.querySelector('.search_input');

searchBtn.addEventListener('click', () => {
    searchBox.classList.toggle('open');
    searchInput.focus();
})