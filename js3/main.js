/* 1
let arr = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr.length; i += 2) {
    console.log(arr.slice(i, i + 2));
} */

/* 2
let str = "example";
let newStr = str.slice(0, -2) + str.slice(-1);
console.log(newStr); */

/* 3
let arr = [1, 2, 3, 4, 5, 6];
let half = arr.length / 2;
let firstHalfSum = arr.slice(0, half).reduce((a, b) => a + b, 0);
let secondHalfSum = arr.slice(half).reduce((a, b) => a + b, 0);
let result = firstHalfSum / secondHalfSum;
console.log(result); */

/* 4
let word1 = "hello";
let word2 = "orange";
let isMatch = word1[word1.length - 1] === word2[0];
console.log(isMatch); */

/* 5
let obj = {a: 1, b: 2, c: 3};
let keys = Object.keys(obj);
let values = Object.values(obj);
console.log(keys, values); */

/* 6
let str = 'abcde';
let newStr = str.split('').map((char, index) => (index % 2 === 1) ? char.toUpperCase() : char).join('');
console.log(newStr); */

/* 7
// Ответы на задания
let answers = {
    zad1: [[1, 2], [3, 4], [5, 6]],
    zad2: 'exampl',
    zad3: 1,
    zad4: true,
    zad5: { keys: ['a', 'b', 'c'], values: [1, 2, 3] },
    zad6: 'AbCdE'
};

// Преобразование в JSON
let jsonResponse = JSON.stringify(answers, null, 2);

// Преобразование в XML
let xmlResponse = '<?xml version="1.0" encoding="UTF-8"?>\n<responses>';
for (let key in answers) {
    xmlResponse += `\n  <${key}>${JSON.stringify(answers[key])}</${key}>`;
}
xmlResponse += '\n</responses>';

console.log('JSON:', jsonResponse);
console.log('XML:', xmlResponse); */
