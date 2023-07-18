
let myArray = ["Taylor Swift", "The Weekend", "Billie Eilish", "Rihanna", "Ariana Grande", "Bruno Mars", "Dua Lipa", "Ed Sheeran", "Lady Gaga", "Beyonce", "Miley Cyrus"];
  function removeElement(array, element) {
    array = myArray;
    element = myArray.splice(element, 1);
  console.log(myArray);
    
    for (let i = 1; i < myArray.length; i++) {
    if (myArray[i] === element){
      return i;
    }
  }
  }
  
  
  console.log(removeElement(myArray, 4));
  