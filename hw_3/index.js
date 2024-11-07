// 1. Написать функцию, которая принимает в качестве аргументов два числа и возращает их сумму
const summ=(a,b)=>a+b;

// 2. Написать функцию, принимающую массив с числами в качестве аргумента и возвращающую новый новый массив с положительными числами
const getPositiveNum=(arr)=>arr.filter(num=>num>=0);

// 3. Написать функцию, которая принимает 5 числовых аргументов и возращает самое большое число из них
const getMaxNum=(a,b,c,d,e)=>Math.max(a,b,c,d,e);

// 4. Написать функцию, которая принимает массив с числами и возращает самое большое число
const getMaxNumArray=(arr)=>Math.max(...arr);

// 5. Написать функцию, которая принимает два числа и возвращает первое число, возведенное в степень сторого числа
const powNum=(a,b)=>Math.pow(a,b);

// 6. Написать функцию, которая принимает два массива и возвращает один массив, созданный из двух переданных
const mergeArrays=(arr1,arr2)=>arr1.concat(arr2);

// 7. Напишите стрелочную функцию, которая принимает массив чисел и возвращает новый массив, содержащий только положительные чётные числа.
const getPositiveEvenNumbers=(arr)=>arr.filter(num=>num>=0 && num%2===0);

// 8. Напишите стрелочную функцию, которая принимает две строки и возвращает самую длинную
const getLongestString=(str1,str2)=>Math.max(str1.length,str2.length);

// 9. Напишите стрелочную функцию, которая принимает строку и возвращает её с первой буквой в верхнем регистре.
const capitalizeFirstLetter=(str)=>str.charAt(0).toUpperCase() + str.slice(1);



