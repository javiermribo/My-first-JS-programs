const SELECT_P = document.querySelector('#pid');

SELECT_P.innerHTML = SELECT_P.innerText
  .split(' ')
  .map(word => word.length > 8 ? `<span style="background: yellow"> ${word} </span>` : word)
  .join(' ')

const PARAGRAPH_SELECTOR = document.querySelector("#pid");

const HEADER_SELECTOR = document.querySelector("#headId");
const REFERENCE_ITEM_SELECTOR = document.querySelector('pid');
const NEW_TEXT_ITEM = document.createElement('h6');
NEW_TEXT_ITEM.setAttribute('id', 'wordCounter');
NEW_TEXT_ITEM.textContent = `La cantidad de palabras es: ${PARAGRAPH_SELECTOR.innerText.split(' ').length}`;


headId.insertBefore(NEW_TEXT_ITEM, REFERENCE_ITEM_SELECTOR);
