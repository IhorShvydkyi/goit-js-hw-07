//находим список категорий
const listCategoriesEl = document.querySelector("#categories");

//выводим все категории в консоль
const liItemEl = listCategoriesEl.querySelectorAll(".item");
console.log(`В списке ${liItemEl.length} категорий`)

//название категорий и кол-ство эдементов
liItemEl.forEach(elem => {
    console.log(`Категория: ${elem.querySelector("h2").textContent}`);
    console.log(`Количество элементов: ${elem.querySelectorAll("li").length}`);
})


