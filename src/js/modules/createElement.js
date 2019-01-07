const cardsWrap = document.querySelector('.catalog__list');

  function createCards(object, template) {
    const card = document.createElement(template.tag);
    card.classList.add(template.tagList);

    card.innerHTML = template.setContent(object);

    return card;
  }

export default createCards;
