const ulList = document.querySelector('#categories');
const categories = ulList.children;
console.log(`Number of categories: ${categories.length}`);

for (const cat of categories) {
  console.log(`Category: ${cat.children[0].textContent}`);
  console.log(`Elements: ${cat.children[1].children.length}`);
}
