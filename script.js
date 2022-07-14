//Xử lý số

//Bài 1
function volumeOfSphere(r) {
  let V = 0;
  V = (4 / 3) * Math.PI * r ** 3;
  return V;
}
console.log(volumeOfSphere(1)); // 4.1887902047863905

//Bài 2
function sum(a, b) {
  let total = 0;
  for (let index = a + 1; index < b; index++) {
    if (Number.isInteger(index)) total += index;
  }
  return total;
}
console.log(sum(3, 8)); //22

//Bài 3
function sumDivisors(num) {
  var sum = 0;
  for (var i = 1; i <= num; i++) {
    if (num % i == 0) {
      sum += i;
    }
  }
  console.log(sum);
}

sumDivisors(6); // 12

//Bài 4
function isPrime(number) {
  if (number < 2) return false;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}
console.log(isPrime(2)); //true

//Bài 5
function sum(a, b) {
  let total = 0;
  for (let i = a; i <= b; i++) {
    if (isPrime(i)) total += i;
  }
  return total;
}

console.log(sum(1, 3)); //5

//Xử lý chuỗi

//Bài 1
function capitalize(str) {
  let splitStr = str.toLowerCase().split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }

  return splitStr.join(" ");
}

console.log(capitalize("HELLO world")); // "Hello World"

//Bài 2
function spinalCase(str) {
  let newArr = str.match(/[A-Za-z]{1}[a-z]*|\s[a-z]+/g);
  return newArr.join("-").replace(/\s/g, "").toLowerCase();
}

console.log(spinalCase("Hello World")); // "hello-world"

//Bài 3
function isPalindrome(str) {
  let noSpaces = str.replace(/\W/g, "");
  let finalStr = noSpaces;

  let a = finalStr.length;
  for (let i = 0; i < Math.floor(a / 2); i++) {
    if (finalStr[i] !== finalStr[a - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("race car")); //true
console.log(isPalindrome("hello world")); //false

//Bài 4
function isIncluded(string, substring) {
  if (string.toLowerCase().includes(substring.toLowerCase())) return true;
  else return false;
}

console.log(isIncluded("hello world", "hell")); //true

//Xử lí mảng

//Bài 1

function removeFalse(arr) {
  let filtered = arr.filter(Boolean);
  return filtered;
}

console.log(removeFalse([0, 1, null, NaN, undefined, 3, false, ""])); // [1,3]

//Bài 2
function longestStrings(arr) {
  var max = arr[0].length;
  arr.map((str) => (max = Math.max(max, str.length)));
  result = arr.filter((str) => str.length == max);
  return result;
}
console.log(longestStrings(["aba", "aa", "ad", "c", "vcd"])); // ['aba','vcd']

//Bài 3

function findDifference(arr1, arr2) {
  //  let similar = arr1.filter(x => arr2.includes(x));
  let difference = arr1
    .filter((x) => !arr2.includes(x))
    .concat(arr2.filter((x) => !arr1.includes(x)));

  return difference;
}

console.log(findDifference([1, 2, 3], [1, 3, 4, 5, 5])); //[2,4,5,5]

//Bài 4

//Xử lý object

//Bài 1

function avgAge(students) {
  return (
    students.reduce((age, students) => age + students.age, 0) / students.length
  );
}

let arr = [
  { name: "Huy", age: 20 },
  { name: "Ben", age: 30 },
  { name: "Long", age: 10 },
];
console.log(avgAge(arr)); //20

//Bài 2

function sortByAge(students) {
  students.sort(function (a, b) {
    return a.age - b.age;
  });
  return students;
}
// let arr = [
//   { name: "Huy", age: 20 },
//   { name: "Ben", age: 30 },
//   { name: "Long", age: 10 },
// ];
console.log(sortByAge(arr));

//Bài 3

function sortByName(students) {
  students.sort(function (x, y) {
    return x.name.toLowerCase - y.name.toLowerCase;
  });
  return students;
}
console.log(sortByName(arr));

//Bài 4

function nameH(students) {
  students.filter(function (h) {
    return h.name.slice(0, 1) == "h";
  });
}
console.log(arr.find(nameH));

//Tổng hợp

//Bài 1
function timeFromA(a, x) {
  let msOfA =
    Number(a.split(":")[0]) * 60 * 60 * 1000 +
    Number(a.split(":")[0]) * 60 * 1000 +
    Number(a.split(":")[0]) * 1000;
  let msOfX = x * 1000;
    
  let result = msOfA + msOfX;
  let seconds = Math.floor((result / 1000) % 60);
  let minutes = Math.floor((result / (60 * 1000)) % 60);
  let hours = Math.floor((result / (1000 * 60 * 60)) % 24);
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return hours + ":" + minutes + ":" + seconds;
}
