let $ = document;
let btn = $.querySelector('#btn');
let sideBar = $.querySelector('.sidebar');
let searchBtn = $.querySelector('.bx-search');

btn.addEventListener("click", function(){
    sideBar.classList.toggle('active');
});
searchBtn.addEventListener("click", function(){
    searchBtn.classList.toggle('active');
});