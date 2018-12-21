import addPage from './modules/addPage.js';
import bookCardTemplate from './modules/bookCardTemplate.js';
import sendRequest from './modules/sendRequest.js';
// import createElement from './modules/createElement.js';
function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){

  addPage(bookData.books, bookCardTemplate);

});
// Объект данных для AJAX запроса
const data = {
  page: 1,
  perPage: 1,
  type: ''
};

sendRequest(createDataAjax(), function(data){
  console.log(data);
});

// вешаем слушатель на табы
const tabsWrap = document.querySelector('.j-tabs');
const tabsArray = Array.from(tabsWrap.children);

tabsArray.forEach(function(tab){
 const link = tab.firstElementChild;

 link.addEventListener('click', function(event){
  event.preventDefault();
  data.type = event.target.dataset.type;

  // if (window.matchMedia("(min-width: 768px)").matches) {
  //   data.perPage = 8;
  // } else {
  //   data.perPage = 3;
  // }

  const dataAjax = createDataAjax();
  sendRequest(dataAjax);
 });

});
// агинация
function createDataAjax() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    data.perPage = 8;
  } else {
    data.perPage = 3;
  }

  return `https://api.do-epixx.ru/htmlpro/bookstore/books/get/${data.page}/${data.perPage}/${data.type}`;
}

