function generateList(array) {
  const ul = document.createElement("ul"); 
  for (let i = 0; i < array.length; i++) {
      const li = document.createElement("li"); 
      li.style.listStyleType = "none"
      if (Array.isArray(array[i])) {
          const subList = generateList(array[i]);
          li.appendChild(subList); 
      } else {
          li.textContent = array[i]; 
      }
      ul.appendChild(li); 
  }
  return ul; 
}

const data = [1, 2, 3, [1, 2, 3], 4, 5, [1, 2, 3], 6];
const myList = generateList(data);
document.body.appendChild(myList);