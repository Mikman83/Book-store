import createElement from './createElement.js';

function insertElements(array, template) {
  array.forEach((item) => {
    const card = createElement(item, template);
    const wrap = document.querySelector(template.wrap);

    wrap.appendChild(card);
  });
}

export default insertElements;
