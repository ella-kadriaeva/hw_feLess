// Создайте стрелочную функцию, которая бы принимала массив и цифру, возвращала бы элемент массива под этим индексом.
const numbs = [6, 7, 1, -10, 78, 18, -5, -38, 9];
const getNum = (arr, index) => arr[index];
console.log(getNum(numbs, 4));
// Создайте функцию, которая бы принимала бы следующие параметры: код погоды
// функция decode, которая дает расшифровку погоды по коду.
// Функция должна возвращать строку, описывающую погоду.
// Таблица соответствия код-описание:
// SQ – шквал
// PO – пыльный вихрь
// FC - торнадо
// BR – дымка (видимость от 1 до 9 км)
// HZ – мгла (видимость менее 10 км)
// FU – дым (видимость менее 10 км)
// DS - пыльная буря (видимость менее 10 км)
// SS - песчаная буря (видимость менее 10 км)

const decode = (cod) => {
  switch (cod) {
    case "SQ":
      return "шквал";
    case "PO":
      return "пыльный вихрь";
    case "FC":
      return "торнадо";
    case "BR":
      return "дымка";
    case "HZ":
      return "мгла";
    case "FU":
      return "дым";
    case "DS":
      return "пыльная буря";
    case "SS":
      return "песчаная буря";
    default:
      return "непонятно";
  }
};
// 1. Вывести в консоль все числа от 0 до 20
const printNum = (num) => {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
};

// 2. Вывести в консоль каждое третье число от 15 до 96
const printThirdNum = (num1, num2) => {
  for (let i = num1; i <= num2; i += 3) {
    console.log(i);
  }
};
printThirdNum(15, 96);
// 3. Вывести в консоль каждое третье число от 96 до 15
const printThirdNumLow = (num1, num2) => {
  for (let i = num2; i <= num1; i -= 3) {
    console.log(i);
  }
};
printThirdNumLow(15, 96);

// 4. Вывести в консоль каждое число от 100 до 57
const printNumLow = (num1, num2) => {
  for (let i = num2; i <= num1; i--) {
    console.log(i);
  }
};
printNumLow(100, 57);
const numbers = [6, 7, 1, -10, 78, 18, -5, -38, 9];

// 2. Сформировать новый массив, в который попадут все числа из массива numbers умноженные на 2
const arrDouble = numbers.map((number) => number * 2);

// 3. Сформировать новый массив, в который попадут все положительные числа из массива numbers деленные на 2
const arrDivided = numbers.map((number) => number * 2);

// Создаем массивы с именами и возрастами
let names = ["Семен", "Иван", "Петр", "Татьяна"];
let ages = [18, 27, 74, 34];

// Создаем новый массив для заполнения строками по образу "Имя Возраст лет/годов"
let combinedArray = (arr1,arr2) => {
  const res =[];
  for(let i = 0; i < arr1.length; i++){
    res.push(`${arr1[i]} ${arr2[i]} лет/годов`);
  }
  return res;
};

// Заполняем новый массив при помощи цикла
let newArray = (num) => {
  const res = [];
  for (let i = 0; i < num; i++) {
    res.push(i);
  } return res;
};
// Выводим полученный массив в консоль
let originalArray = [1, 2, 3, 4, 5]; // Предположим, что это ваш исходный массив
// Используем метод reverse() для обращения порядка элементов в массиве
// Вывод обращенного массива в консоль
originalArray.reverse().map((el) => console.log(el));