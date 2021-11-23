const $ = document.querySelector.bind(document);
const $$ =document.querySelectorAll.bind(document);

const tabs = $$('.tab-item'),
      panes = $$('.tab-pane'),
      tabActive = $('.tab-item.active'),
      line = $('.line');

line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';

tabs.forEach((tab,index) => {
    const pane = panes[index];

    tab.onclick = function(){
        $('.tab-item.active').classList.toggle('active');
        $('.tab-pane.active').classList.toggle('active');

        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';

        this.classList.toggle('active');
        pane.classList.toggle('active');
    }
})
