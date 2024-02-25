export const exercises = [
  {
    name: "concat",
    exercise: `const arr1 = [1, 2];
const arr2 = [3, 4];
const result = arr1.concat(arr2);
console.log(result); // [1, 2, 3, 4]`,
  },
  {
    name: "copyWithin",
    exercise: `const myArr = [1, 2, 3, 4, 5];
const result = myArr.copyWithin(0, 3);
console.log(result); // [4, 5, 3, 4, 5]`,
  },
  {
    name: "entries",
    exercise: `const myArr = ['a', 'b', 'c'];
const iterator = myArr.entries();
for (const entry of iterator) {
console.log(entry);
}`,
  },
  {
    name: "every",
    exercise: `const myArr = [1, 2, 3, 4, 5];
const result = myArr.every((element) => element > 0);
console.log(result); // true`,
  },
  {
    name: "fill",
    exercise: `const myArr = [1, 2, 3, 4, 5];
const result = myArr.fill(0, 2, 4);
console.log(result); // [1, 2, 0, 0, 5]`,
  },
  {
    name: "filter",
    exercise: `const myArr = [1, 2, 3, 4, 5];
const result = myArr.filter((element) => element > 2);
console.log(result); // [3, 4, 5]`,
  },
  {
    name: "find",
    exercise: `const myArr = [1, 2, 3, 4, 5];
const result = myArr.find((element) => element > 2);
console.log(result); // 3`,
  },
  {
    name: "findIndex",
    exercise: `const myArr = [1, 2, 3, 4, 5];
const result = myArr.findIndex((element) => element > 2);
console.log(result); // 2`,
  },
  {
    name: "flat",
    exercise: `const arr = [1, 2, [3, 4, [5, 6]]];
const result = arr.flat(2);
console.log(result); // [1, 2, 3, 4, 5, 6]`,
  },
  {
    name: "flatMap",
    exercise: `const myArr = [1, 2, 3, 4, 5];
const result = myArr.flatMap((element) => [element, element * 2]);
console.log(result); // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]`,
  },
  {
    name: "forEach",
    exercise: `const myArr = [1, 2, 3, 4, 5];
myArr.forEach((element) => console.log(element));`,
  },
  {
    name: "from",
    exercise: `const result = Array.from('hello');
console.log(result); // ['h', 'e', 'l', 'l', 'o']`,
  },
  {
    name: "includes",
    exercise: `const myArr = [1, 2, 3, 4, 5];
const result = myArr.includes(3);
console.log(result); // true`,
  },
  {
    name: "indexOf",
    exercise: `const myArr = [1, 2, 3, 4, 5];
const result = myArr.indexOf(3);
console.log(result); // 2`,
  },
  {
    name: "isArray",
    exercise: `const myArr = [1, 2, 3, 4, 5];
const result = Array.isArray(myArr);
console.log(result); // true`,
  },
  {
    name: "join",
    exercise: `const myArr = [1, 2, 3, 4, 5];
const result = myArr.join('-');
console.log(result); // '1-2-3-4-5'`,
  },
  {
    name: "keys",
    exercise: `const myArr = ['a', 'b', 'c'];
const iterator = myArr.keys();
for (const key of iterator) {
console.log(key);
}`,
  },
  {
    name: "lastIndexOf",
    exercise: `const myArr = [1, 2, 3, 4, 2];
const result = myArr.lastIndexOf(2);
console.log(result); // 4`,
  },
  {
    name: "map",
    exercise: `const myArr = [1, 2, 3, 4, 5];
const result = myArr.map((element) => element + 10);
console.log(result); // [11, 12, 13, 14, 15]`,
  },
  {
    name: "pop",
    exercise: `const myArr = [1, 2, 3, 4, 5];
const result = myArr.pop();
console.log(result); // 5`,
  },
  {
    name: "push",
    exercise: `const myArr = [1, 2, 3, 4];
const result = myArr.push(5);
console.log(result); // 5`,
  },
  {
    name: "reduce",
    exercise: `const myArr = [1, 2, 3, 4, 5];
const result = myArr.reduce((acc, curr) => acc + curr, 0);
console.log(result); // 15`,
  },
  {
    name: "reverse",
    exercise: `const myArr = [1, 2, 3, 4, 5];
const result = myArr.reverse();
console.log(result); // [5, 4, 3, 2, 1]`,
  },
  {
    name: "shift",
    exercise: `const myArr = [1, 2, 3, 4, 5];
const result = myArr.shift();
console.log(result); // 1`,
  },
  {
    name: "slice",
    exercise: `const myArr = [1, 2, 3, 4, 5];
const result = myArr.slice(1, 3);
console.log(result); // [2, 3]`,
  },
  {
    name: "some",
    exercise: `const myArr = [1, 2, 3, 4, 5];
const result = myArr.some((element) => element > 4);
console.log(result); // true`,
  },
  {
    name: "sort",
    exercise: `const myArr = [3, 1, 4, 1, 5, 9, 2, 6];
const result = myArr.sort();
console.log(result); // [1, 1, 2, 3, 4, 5, 6, 9]`,
  },
  {
    name: "splice",
    exercise: `const myArr = [1, 2, 3, 4, 5];
const result = myArr.splice(2, 2, 6);
console.log(result); // [3, 4]`,
  },
  {
    name: "toLocaleString",
    exercise: `const myArr = [1, 2, 3, 4, 5];
const result = myArr.toLocaleString();
console.log(result); // '1,2,3,4,5'`,
  },
  {
    name: "toString",
    exercise: `const myArr = [1, 2, 3, 4, 5];
const result = myArr.toString();
console.log(result); // '1,2,3,4,5'`,
  },
  {
    name: "unshift",
    exercise: `const myArr = [2, 3, 4, 5];
const result = myArr.unshift(1);
console.log(result); // 5`,
  },
  {
    name: "values",
    exercise: `const myArr = ['a', 'b', 'c'];
const iterator = myArr.values();
for (const value of iterator) {
console.log(value);
}`,
  },
];
