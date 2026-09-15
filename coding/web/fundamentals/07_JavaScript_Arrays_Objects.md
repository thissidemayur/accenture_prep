# JavaScript Arrays & Objects — Accenture Placement Preparation

## 1. Core Array Methods

### `forEach()`
Executes a function once for every array element.

```js
const numbers = [10, 20, 30];

numbers.forEach(num => {
    console.log(num);
});
```

Use when you want to perform an action for every element.

---

### `map()`
Creates a **new array** by transforming every element.

```js
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => {
    return num * 2;
});
```

Result:

```js
[2, 4, 6, 8]
```

Mental model:

```text
Array → map() → New Array
```

---

### `filter()`
Creates a new array containing only elements that satisfy a condition.

```js
const numbers = [1, 2, 3, 4, 5, 6];

const even = numbers.filter(num => {
    return num % 2 === 0;
});
```

Result:

```js
[2, 4, 6]
```

---

### `find()`
Returns the **first element** that satisfies a condition.

```js
const result = numbers.find(num => num > 25);
```

If nothing matches, it returns `undefined`.

```text
find()   → one element
filter() → array of elements
```

---

### `findIndex()`
Returns the index of the first matching element.

```js
const index = numbers.findIndex(num => num > 25);
```

If nothing matches, returns `-1`.

---

### `slice()`
Extracts a portion of an array without modifying the original.

```js
const numbers = [10, 20, 30, 40, 50];

const result = numbers.slice(1, 4);
```

Result:

```js
[20, 30, 40]
```

The ending index is excluded.

---

### `sort()`
Sorts an array.

For numbers:

```js
numbers.sort((a, b) => a - b);
```

Descending:

```js
numbers.sort((a, b) => b - a);
```

**Important:** `sort()` mutates the original array.

For a non-mutating sort:

```js
const sorted = [...numbers].sort((a, b) => a - b);
```

---

### `includes()`
Checks whether an array contains a value.

Returns a Boolean.

```js
const fruits = ["apple", "banana", "orange"];

console.log(fruits.includes("banana")); // true
```

---

### `some()`
Checks whether **at least one** element satisfies a condition.

```js
const result = numbers.some(num => num % 2 === 0);
```

Returns `true` if any element matches.

---

### `every()`
Checks whether **all** elements satisfy a condition.

```js
const result = numbers.every(num => num % 2 === 0);
```

Returns `true` only if every element matches.

```text
some()  → at least one
every() → all
```

---

# 2. Arrays of Objects

Very common in real applications and coding assessments.

```js
const employees = [
    { name: "A", salary: 40000 },
    { name: "B", salary: 55000 },
    { name: "C", salary: 35000 }
];
```

Access an object:

```js
employees[0].name;
```

Result:

```text
A
```

Loop through them:

```js
employees.forEach(emp => {
    console.log(emp.name, emp.salary);
});
```

## Filtering objects

```js
const highSalary = employees.filter(emp => {
    return emp.salary > 40000;
});
```

## Finding an object

```js
const employee = employees.find(emp => {
    return emp.name === "B";
});
```

## Deleting an object

```js
employees = employees.filter(emp => {
    return emp.name !== "B";
});
```

---

# 3. Spread Operator

The spread operator `...` expands/copies values.

### Array copy

```js
const numbers = [1, 2, 3];

const copy = [...numbers];
```

### Object copy

```js
const user = {
    name: "Mayur",
    age: 21
};

const copy = { ...user };
```

Useful before operations that mutate data:

```js
const sorted = [...numbers].sort((a, b) => a - b);
```

---

# 4. Function Reference vs Function Call

### Execute now

```js
applyFilterAndSort();
```

### Pass the function for later

```js
input.addEventListener("input", applyFilterAndSort);
```

Do not normally write:

```js
input.addEventListener("input", applyFilterAndSort());
```

because that executes the function immediately.

If arguments are needed:

```js
button.addEventListener("click", () => {
    deleteProduct(5);
});
```

---

# 5. `reduce()`

`reduce()` takes many array elements and builds **one final result**.

Basic syntax:

```js
array.reduce((accumulator, currentValue) => {
    return updatedAccumulator;
}, initialValue);
```

The returned value becomes the accumulator for the next iteration.

## Array → Number

```js
const prices = [100, 250, 50, 600];

const total = prices.reduce((acc, price) => {
    return acc + price;
}, 0);
```

Result:

```text
1000
```

## Find maximum number

```js
const numbers = [12, 45, 7, 89, 23, 56];

const maxNum = numbers.reduce((acc, currentVal) => {

    if (acc < currentVal) {
        return currentVal;
    }

    return acc;

}, numbers[0]);
```

Using `numbers[0]` is safer than `0` when negative values are possible.

## Array → Array

```js
const numbers = [1, 2, 3, 4, 5];

const newArr = numbers.reduce((acc, currentVal) => {

    if (currentVal % 2 === 0) {
        acc.push(currentVal);
    }

    return acc;

}, []);
```

Result:

```js
[2, 4]
```

## Array → Object: Frequency Counter

```js
const fruits = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "apple"
];

const cnt = fruits.reduce((acc, fruit) => {

    if (acc[fruit]) {
        acc[fruit]++;
    } else {
        acc[fruit] = 1;
    }

    return acc;

}, {});
```

Result:

```js
{
    apple: 3,
    banana: 2,
    orange: 1
}
```

Important:

```js
acc[fruit]
```

If `fruit` is `"apple"`, then it means:

```js
acc["apple"]
```

This is dynamic property access.

## Array of Objects → Number

```js
const employees = [
    { name: "A", salary: 40000 },
    { name: "B", salary: 55000 },
    { name: "C", salary: 35000 },
    { name: "D", salary: 70000 }
];

const totalSal = employees.reduce((acc, employee) => {
    return acc + employee.salary;
}, 0);
```

Result:

```text
200000
```

## Count roles

```js
const employees = [
    { name: "A", role: "developer" },
    { name: "B", role: "tester" },
    { name: "C", role: "developer" },
    { name: "D", role: "designer" },
    { name: "E", role: "developer" },
    { name: "F", role: "tester" }
];

const roleCnt = employees.reduce((acc, emp) => {

    if (acc[emp.role]) {
        acc[emp.role]++;
    } else {
        acc[emp.role] = 1;
    }

    return acc;

}, {});
```

Result:

```js
{
    developer: 3,
    tester: 2,
    designer: 1
}
```

## Find most expensive product

```js
const products = [
    { name: "Mouse", price: 50 },
    { name: "Keyboard", price: 100 },
    { name: "Monitor", price: 300 },
    { name: "Laptop", price: 1200 },
    { name: "Headphones", price: 150 }
];

const expensiveProduct = products.reduce((acc, product) => {

    if (product.price > acc.price) {
        return product;
    }

    return acc;

}, products[0]);
```

Result:

```js
{
    name: "Laptop",
    price: 1200
}
```

### `reduce()` mental model

The initial value often indicates what you are building:

```text
0       → Number
""      → String
[]      → Array
{}      → Object
object  → Object
```

---

# 6. `Object.keys()`

Returns an array containing all property names of an object.

```js
const employee = {
    name: "Rahul",
    age: 22,
    department: "IT",
    salary: 50000
};

console.log(Object.keys(employee));
```

Result:

```js
["name", "age", "department", "salary"]
```

Mental model:

```text
Object → Object.keys() → Array of keys
```

## `Object.keys()` + `forEach()`

```js
Object.keys(employee).forEach(key => {
    console.log(key, employee[key]);
});
```

Output:

```text
name Rahul
age 22
department IT
salary 50000
```

Important:

```js
employee[key]
```

uses dynamic property access.

If:

```js
key = "name"
```

then:

```js
employee[key]
```

means:

```js
employee["name"]
```

---

# 7. `Object.values()`

Returns an array containing all property values.

```js
console.log(Object.values(employee));
```

Result:

```js
["Rahul", 22, "IT", 50000]
```

Mental model:

```text
Object → Object.values() → Array of values
```

---

# 8. `Object.entries()`

Returns an array containing `[key, value]` pairs.

```js
console.log(Object.entries(employee));
```

Result:

```js
[
    ["name", "Rahul"],
    ["age", 22],
    ["department", "IT"],
    ["salary", 50000]
]
```

Mental model:

```text
Object → Object.entries() → Array of [key, value] pairs
```

## With destructuring

```js
Object.entries(employee).forEach(([key, value]) => {
    console.log(key, value);
});
```

For:

```js
["name", "Rahul"]
```

JavaScript assigns:

```text
key = "name"
value = "Rahul"
```

---

# 9. Filtering Object Data with `entries()`

```js
const marks = {
    math: 85,
    physics: 72,
    chemistry: 91,
    english: 68
};

Object.entries(marks).forEach(([subject, mark]) => {

    if (mark > 80) {
        console.log(subject, mark);
    }

});
```

Output:

```text
math 85
chemistry 91
```

---

# 10. Combining `Object.values()` + `reduce()`

```js
const marks = {
    math: 80,
    physics: 90,
    chemistry: 70
};

const total = Object.values(marks).reduce((acc, mark) => {
    return acc + mark;
}, 0);

console.log(total);
```

Result:

```text
240
```

Concept chain:

```text
Object
  ↓
Object.values()
  ↓
Array
  ↓
reduce()
  ↓
Number
```

---

# 11. Practical Product Filter Architecture

A typical application can combine arrays, objects, filtering, sorting, DOM and events.

```text
User Input
    ↓
Search / Category / Price / Sort
    ↓
applyFilterAndSort()
    ↓
filter()
    ↓
sort()
    ↓
renderProducts()
    ↓
DOM
```

Deletion:

```text
Click delete
    ↓
Event delegation
    ↓
closest()
    ↓
dataset.id
    ↓
filter()
    ↓
Update state
    ↓
Render again
```

Important principle:

> Keep application state separate from rendering logic.

---

# 12. High-Value Differences

| Method | Returns | Main purpose |
|---|---|---|
| `forEach()` | `undefined` | Perform an action |
| `map()` | New array | Transform elements |
| `filter()` | New array | Select matching elements |
| `find()` | One element / `undefined` | Find first match |
| `findIndex()` | Number | Find first matching index |
| `slice()` | New array | Extract a portion |
| `sort()` | Same array | Sort; mutates original |
| `includes()` | Boolean | Check whether a value exists |
| `some()` | Boolean | At least one matches |
| `every()` | Boolean | All match |
| `reduce()` | Any single final value | Accumulate/build a result |
| `Object.keys()` | Array | Get keys |
| `Object.values()` | Array | Get values |
| `Object.entries()` | Array of pairs | Get keys + values |

---

# 13. Assessment Mental Checklist

When you see an array/object problem:

```text
Need to perform an action on every item?
→ forEach()

Need to transform every item?
→ map()

Need only matching items?
→ filter()

Need the first matching item?
→ find()

Need the index?
→ findIndex()

Need to check whether a value exists?
→ includes()

Need to check if at least one matches?
→ some()

Need to check if all match?
→ every()

Need one final result?
→ reduce()

Need object property names?
→ Object.keys()

Need object property values?
→ Object.values()

Need both key and value?
→ Object.entries()
```

---

# 14. Core Mental Model

```text
forEach()
Array → action

map()
Array → Array

filter()
Array → smaller Array

find()
Array → one value

findIndex()
Array → index

some()
Array → Boolean

every()
Array → Boolean

reduce()
Array → ANY single final result

Object.keys()
Object → Array of keys

Object.values()
Object → Array of values

Object.entries()
Object → Array of [key, value]
```

This completes the Arrays + Objects section for the current Accenture placement preparation track.
