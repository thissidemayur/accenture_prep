const prices = [100, 250, 50, 600];

// whatever we return  inside reduce callback it become acculator
const total = prices.reduce((acc, currentVal) => {
  return (acc += currentVal);
}, 0);
console.log(total);

const maxNum = prices.reduce((acc, currentVal) => {
  if (acc < currentVal) return currentVal;
  return acc;
}, 0);
console.log(maxNum);

const words = ["I", "love", "JavaScript"];
const sent = words.reduce((acc, currentVal) => {
  return `${acc} ${currentVal}`;
}, "");

console.log(sent);

const numbers = [1, 2, 3, 4, 5];
const newArr = numbers.reduce((acc, currentVal) => {
  if (currentVal % 2 === 0) acc.push(currentVal);
  return acc;
}, []);
console.log(newArr);

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const cnt = fruits.reduce((acc, fruit) => {
  if (acc[fruit]) acc[fruit]++;
  else acc[fruit] = 1;

  return acc;
}, {});
console.log(cnt);

const users = [
  { name: "Mayur", role: "developer" },
  { name: "Rahul", role: "tester" },
  { name: "Aman", role: "developer" },
  { name: "Priya", role: "designer" },
];

const userDetails = users.reduce((acc, user) => {
  if (!acc[user.role]) {
    acc[user.role] = [];
  }

  acc[user.role].push(user.name);

  return acc;
}, {});

console.log(userDetails);

// count salary
let employees = [
  { name: "A", salary: 40000 },
  { name: "B", salary: 55000 },
  { name: "C", salary: 35000 },
  { name: "D", salary: 70000 },
];
const totalSal = employees.reduce((acc, currentVal) => {
  return acc + currentVal.salary;
}, 0);
console.log(totalSal);

// count role:
employees = [
  { name: "A", role: "developer" },
  { name: "B", role: "tester" },
  { name: "C", role: "developer" },
  { name: "D", role: "designer" },
  { name: "E", role: "developer" },
  { name: "F", role: "tester" },
];
const roleCnt = employees.reduce((acc, emp) => {
  if (acc[emp.role]) acc[emp.role]++;
  else acc[emp.role] = 1;

  return acc;
}, {});

console.log(roleCnt);

const products = [
  { name: "Mouse", price: 50 },
  { name: "Keyboard", price: 100 },
  { name: "Monitor", price: 300 },
  { name: "Laptop", price: 1200 },
  { name: "Headphones", price: 150 },
];
const expensiveProduct = products.reduce((acc, product) => {


  if(acc.price < product.price) {
    acc.name = product.name;
    acc.price = product.price;
  }

  return acc

}, {name:"",price:0});

console.log(expensiveProduct);


// 
const employee = {
  name: "Rahul",
  age: 22,
  department: "IT",
  salary: 50000,
};

Object.keys(employee).forEach(empDet =>{
  console.log(empDet," ", employee[empDet])
} )

const salaries = {
  A: 40000,
  B: 55000,
  C: 35000,
};
Object.entries(salaries).forEach(([name,salary])=>{
  if (salary > 40000) {
    console.log(name, salary);
  }
})

const product = {
  name: "Laptop",
  price: 1200,
  category: "electronics",
  stock: 15,
};

Object.entries(product).forEach(([key,val])=>{
  console.log(key," ",val)
})

const marks = {
  math: 85,
  physics: 72,
  chemistry: 91,
  english: 68,
};

Object.entries(marks).forEach(([sub, mark]) => {
  if (mark > 80) {
    console.log(sub);
  }
});