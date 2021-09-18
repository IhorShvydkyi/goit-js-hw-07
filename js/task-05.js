const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output')
const defaultName = nameEl.textContent

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    if(event.currentTarget.value.length === 0){
        nameEl.textContent = defaultName;
    } else {
        nameEl.textContent = event.currentTarget.value
    }
}