/* 1
let numbers = [1, -2, 3, -4, 5, -6];
let negativeCount = numbers.filter(num => num < 0).length;
console.log(negativeCount); */

/* 2
let arr = [1, 2, 3, 4, 5, 6];
let half = arr.length / 2;
let firstHalfSum = arr.slice(0, half).reduce((a, b) => a + b, 0);
let secondHalfSum = arr.slice(half).reduce((a, b) => a + b, 0);
let result = firstHalfSum / secondHalfSum;
console.log(result); */

/* 3
for (let i = 1; i <= 1000; i++) {
    let digits = String(i).split('').map(Number);
    if (digits.reduce((a, b) => a + b, 0) === 5) {
        console.log(i);
    }
} */

/* 4
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergedArray = [...arr1, ...arr2];
console.log(mergedArray); */

/* 5
let nums = [10, 20, 30, 40, 50];
let increasedNums = nums.map(num => num * 1.1);
console.log(increasedNums); */
