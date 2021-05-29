const selectingP = document.querySelector('#pid');

selectingP.innerHTML = selectingP.innerText
  .split(' ')
  .map(word => word.length > 8 ? `<span style="background: yellow"> ${word} </span>` : word)
  .join(' ')

  const selectingP2 = document.querySelector("#pid");

  const selectH1 = document.querySelector('#headId');
  const referenceItem = document.querySelector('pid');
  const creatingText = document.createElement('h6');
  creatingText.setAttribute('id', 'wordCounter');
  creatingText.textContent = `La cantidad de palabras es: ${selectingP2.innerText.length}`;

  headId.insertBefore(creatingText, referenceItem);
