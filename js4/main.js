/* 1
let str = 'aaa bbb ccc';
let result = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log(result); */

/* 2
let str = '023m0df0fg0';
let zeroPositions = [];
for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') {
        zeroPositions.push(i);
    }
}
console.log(zeroPositions); */

/* 3
let numbers = [123, 456, 789];
let reversedNumbers = numbers.map(num => parseInt(num.toString().split('').reverse().join('')));
console.log(reversedNumbers); */

/* 4
let number = 123789;
let result = parseInt(number.toString().split('').filter(digit => digit % 2 === 0).join(''));
console.log(result);  */

/* 5
let str = 'aAbBcC';
let uppercaseCount = str.split('').filter(char => char === char.toUpperCase()).length;
let result = uppercaseCount <= 2;
console.log(result);  */

/* 6
let str = '1 22 333 4444 22 55555 1';
let result = str.split(' ')  // Разбиваем строку на массив подстрок
                .filter(word => word.length <= 3)  // Фильтруем подстроки, длина которых <= 3
                .join(' ');  // Собираем обратно строку, разделенную пробелами
console.log(result); */
