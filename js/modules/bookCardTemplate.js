const bookCardTemplate = {
  wrap: '.catalog__list',
  tag: 'article',
  tagClass: 'product-card-mini',
  setContent: function(object) {
    return `<h2 class="product-card-mini__title">
        <a href="${object.uri}">${object.name}</a>
      </h2>
      <a href="${object.uri}" class="product-card-mini__img-wrap">
        <img src="img/books_all/${object.uri}.png" alt="some picture" class="product-card-mini__img">
      </a>
      <p class="product-card-mini__descr">${object.desc}</p>
      <div class="product-card-mini__price">${object.price}</div>`;
  }
}

export default bookCardTemplate;
