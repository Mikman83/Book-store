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
    const card = document.createElement('div');
    card.classList.add('product-card-mini');

    card.innerHTML =`<h2 class="product-card-mini__title">
            <a href="${object.href}">${object.title}</a>
          </h2>
          <a href="${object.href}" class="product-card-mini__img-wrap">
            <img src="${object.src}" alt="some picture" class="product-card-mini__img">
          </a>
          <p class="product-card-mini__descr">${object.descr}</p>
          <div class="product-card-mini__price">${object.price}</div>`;

    return card;
  }


  function insertElements(object, wrap) {
    const membersArr = object.books;
    membersArr.forEach((object) =>{
      const card = createCards(object);

      wrap.appendChild(card);
    })
  }

  if (cardsWrap) {
    insertElements(data, cardsWrap);
  }

});
