export function shuffle(array) {
    const newArray = [...array];
    for (let currentIndex = array.length - 1; currentIndex > 0; currentIndex--) {
      const randomIndex = Math.floor(Math.random() * currentIndex + 1);
      const temp = newArray[currentIndex];
      newArray[currentIndex] = newArray[randomIndex];
      newArray[currentIndex] = temp;
    }
    return newArray;
  }

  export function foo() {

  }
 
  const myAddFunction = (num1, num2) => {
      return num1 + num2
  }
  export default myAddFunction