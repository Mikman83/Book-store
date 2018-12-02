function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){
  const data ={
    books: [
      {
        src: '/img/books_all/45-tatuirovok-prodavana.png',
        title: '45 Татуировок продавана',
        descr: 'Правила для тех, кто продает и управляет продажами',
        price: '500 ₽',
        href: '#'
      },
      {
        src: '/img/books_all/45-tatuirovok-prodavana.png',
        title: '45 Татуировок продавана',
        descr: 'Правила для тех, кто продает и управляет продажами',
        price: '500 ₽',
        href: '#'
      },
      {
        src: '/img/books_all/45-tatuirovok-prodavana.png',
        title: '45 Татуировок продавана',
        descr: 'Правила для тех, кто продает и управляет продажами',
        price: '500 ₽',
        href: '#'
      },
      {
        src: '/img/books_all/45-tatuirovok-prodavana.png',
        title: '45 Татуировок продавана',
        descr: 'Правила для тех, кто продает и управляет продажами',
        price: '500 ₽',
        href: '#'
      },
      {
        src: '/img/books_all/45-tatuirovok-prodavana.png',
        title: '45 Татуировок продавана',
        descr: 'Правила для тех, кто продает и управляет продажами',
        price: '500 ₽',
        href: '#'
      },
      {
        src: '/img/books_all/45-tatuirovok-prodavana.png',
        title: '45 Татуировок продавана',
        descr: 'Правила для тех, кто продает и управляет продажами',
        price: '500 ₽',
        href: '#'
      },
      {
        src: '/img/books_all/45-tatuirovok-prodavana.png',
        title: '45 Татуировок продавана',
        descr: 'Правила для тех, кто продает и управляет продажами',
        price: '500 ₽',
        href: '#'
      },
      {
        src: '/img/books_all/45-tatuirovok-prodavana.png',
        title: '45 Татуировок продавана',
        descr: 'Правила для тех, кто продает и управляет продажами',
        price: '500 ₽',
        href: '#'
      }
    ]
  };

  const cardsWrap = document.querySelector('.catalog__list');

  function createCards(object) {
    const memberArr = object.books;
    let cardString = '';

    memberArr.forEach(function(book) {
      cardString = cardString + `<article class="product-card-mini">
          <h2 class="product-card-mini__title">
            <a href="#">${book.title}</a>
          </h2>
          <a href="#" class="product-card-mini__img-wrap">
            <img src="${book.src}" alt="" class="product-card-mini__img">
          </a>
          <p class="product-card-mini__descr">${book.descr}</p>
          <div class="product-card-mini__price">${book.price}</div>
        </article>`;
    });

    return cardString;
  }


  function insertElements(object, wrap) {
    const html = createCards(object);

    wrap.innerHTML = html;
  }

  insertElements(data, cardsWrap);



});
