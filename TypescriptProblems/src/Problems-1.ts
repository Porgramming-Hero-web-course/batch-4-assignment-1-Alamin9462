// Question Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

const sumArray = (numbers: number[]) => {
    let sum = 0;
    for (const number of numbers) {   // note for of loop only using for array and for in loop using for object
      sum += number;
    }
    return sum;
  };
  
  const showTotalValue = sumArray([1, 2, 3, 4, 5]); 
  console.log('The Answer is :'+ showTotalValue)