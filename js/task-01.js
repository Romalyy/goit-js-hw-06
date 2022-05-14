const allCategories = document.querySelectorAll('.item');
console.log(`Number of categories : ${allCategories.length}`);

const categoryElements = document.querySelectorAll('#categories>li')

categoryElements.forEach(elem => console.log(`Category : ${elem.children[0].textContent} 
Elements : ${elem.children[1].children.length}`))

console.log(categoryElements)
    
