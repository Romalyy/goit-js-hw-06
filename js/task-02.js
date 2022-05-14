const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.createElement('ul');

const ingredientsFirstItem = document.createElement('li');
ingredientsFirstItem.textContent = 'Potatoes';
ingredientsFirstItem.classList.add('item');

const ingredientsSecondItem = document.createElement('li');
ingredientsSecondItem.textContent = 'Mushrooms';
ingredientsSecondItem.classList.add('item');

const ingredientsThirdItem = document.createElement('li');
ingredientsThirdItem.textContent = 'Garlic';
ingredientsThirdItem.classList.add('item');

const ingredientsFourthItem = document.createElement('li');
ingredientsFourthItem.textContent = 'Tomatos';
ingredientsFourthItem.classList.add('item');

const ingredientsFifthItem = document.createElement('li');
ingredientsFifthItem.textContent = 'Herbs';
ingredientsFifthItem.classList.add('item');

const ingredientsSixthItem = document.createElement('li');
ingredientsSixthItem.textContent = 'Condiments';
ingredientsSixthItem.classList.add('item');

ingredientsEl.append(ingredientsFirstItem, ingredientsSecondItem, ingredientsThirdItem, ingredientsFourthItem, ingredientsFifthItem, ingredientsSixthItem);

console.log(ingredientsEl);