let counterValue = 0;

const incrementEl = document.querySelector('button[data-action="increment"]');
const decrementEl = document.querySelector('button[data-action="decrement"]');

incrementEl.addEventListener('click', () => {
    counterValue++;
    const counterEl = document.querySelector('#value');
    counterEl.innerHTML = `${counterValue}`
    console.log(counterEl)
})
decrementEl.addEventListener('click', () => {
    counterValue--;
    const counterEl = document.querySelector('#value');
    counterEl.innerHTML = `${counterValue}`
    console.log(counterEl)
})