//Write a program having an array of numbers if the numbers if the numbers 
//it should remove the negative number from the array.

function removeNegativeNumbers(array: number[]): number[] {
    return array.filter((number) => number >= 0);
}

var numbers = [1, -4, 5, -7, 9, -11, 22, -33];
var result1 = removeNegativeNumbers(numbers);
console.log("Array with negative numbers removed:", result1);