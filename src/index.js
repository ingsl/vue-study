const list = [
  { id: 0, name: "Yoon", age: 20 },
  { id: 1, name: "lee", age: 30 },
  { id: 2, name: "kim", age: 32 },
  { id: 3, name: "han", age: 40 }
];

// 1.some 동일값 찾음
const some = list.some(item => item.age === 30);
console.log(some);

// 2. every 전체 값이 모두 ture 일떄
const every = list.every(item => typeof item.age === "number");

// 3.forEach

//4.map
const map = list.map(item => item.age > 29);

//5.filter
const filter = list.filter(item => item.age > 29);

//6.reduce
const reduce = list.reduce((acc, item) => {
  acc[item.name] = item;
  return acc;
}, {});
