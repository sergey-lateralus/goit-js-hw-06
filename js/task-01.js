const refs = {
    categories: document.getElementById('categories'),
    item: document.querySelectorAll('.item'),
};

console.log(`Number of categories: ${refs.categories.childElementCount}`);

refs.item.forEach(item => {
    item.querySelectorAll('h2').forEach(elem => console.log(`Category: ${elem.textContent}`));
    console.log(`Elements: ${item.querySelectorAll('li').length}`);
});