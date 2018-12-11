const cardsWrap = document.querySelector('.catalog__list');

  function createCards(object, template) {
    const card = document.createElement(template.tag);
    card.classList.add(template.tagList);

    // card.innerHTML =`<h2 class="product-card-mini__title">
    //     <a href="${object.href}">${object.title}</a>
    //   </h2>
    //   <a href="${object.href}" class="product-card-mini__img-wrap">
    //     <img src="${object.src}" alt="some picture" class="product-card-mini__img">
    //   </a>
    //   <p class="product-card-mini__descr">${object.descr}</p>
    //   <div class="product-card-mini__price">${object.price}</div>`;

    card.innerHTML = template.setContent(object);

    return card;
  }

export default createCards;
