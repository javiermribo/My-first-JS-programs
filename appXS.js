const selectingP = document.querySelector('#pid');

selectingP.innerHTML = selectingP.innerText
  .split(' ')
  .map(word => word.length > 8 ? `<span style="background: yellow"> ${word} </span>` : word)
  .join(' ')