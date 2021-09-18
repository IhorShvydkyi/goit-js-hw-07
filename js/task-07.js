const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRef.addEventListener('input', onUpdateFontSize)

function onUpdateFontSize() {
    textRef.style.fontSize = inputRef.value + 'px';
}
