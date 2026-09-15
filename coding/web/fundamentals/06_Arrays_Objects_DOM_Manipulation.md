# JavaScript Arrays + Objects + DOM Manipulation
## Accenture Placement Preparation

This document covers the Arrays + Objects concepts and how they were combined with DOM manipulation during preparation.

---

# 1. DOM Manipulation — Core Idea

The DOM (Document Object Model) represents an HTML document as objects that JavaScript can access and modify.

Basic flow:

```text
HTML
 ↓
DOM
 ↓
JavaScript selects elements
 ↓
JavaScript reads/modifies them
 ↓
Browser updates the page
```

---

# 2. Selecting DOM Elements

## `querySelector()`

Returns the first element matching a CSS selector.

```js
const button = document.querySelector("#btn");
```

Examples:

```js
document.querySelector("#title");
document.querySelector(".card");
document.querySelector("input");
```

---

## `querySelectorAll()`

Returns all matching elements.

```js
const buttons = document.querySelectorAll(".delete");
```

This returns a collection of matching elements that can be iterated.

```js
buttons.forEach(button => {
    console.log(button);
});
```

Difference:

```text
querySelector()    → first matching element
querySelectorAll() → all matching elements
```

---

# 3. Reading Form/Input Values

For an input:

```html
<input id="name">
```

Use:

```js
const name = document.querySelector("#name").value;
```

For a checkbox:

```js
const checkbox = document.querySelector("#terms");

console.log(checkbox.checked);
```

`.checked` returns:

```text
true / false
```

---

# 4. `textContent`

Used to read or change text inside an element.

```js
const title = document.querySelector("#title");

title.textContent = "Hello World";
```

Prefer `textContent` when inserting plain text from JavaScript.

---

# 5. Creating Elements

Use `document.createElement()` to create a new DOM element.

```js
const div = document.createElement("div");
```

Then configure it:

```js
div.textContent = "Hello";
div.className = "card";
```

---

# 6. Adding Elements to the DOM

## `append()`

```js
container.append(div);
```

Adds the element at the end of the container.

## `prepend()`

```js
container.prepend(div);
```

Adds the element at the beginning.

You can also append text:

```js
container.append("Hello");
```

---

# 7. Removing Elements

An element can remove itself:

```js
element.remove();
```

Example:

```js
const card = document.querySelector(".card");

card.remove();
```

---

# 8. DOM Traversal

DOM traversal means moving between related elements.

## `parentElement`

Gets the parent:

```js
const parent = element.parentElement;
```

## `children`

Gets child elements:

```js
const children = element.children;
```

## `firstElementChild`

```js
element.firstElementChild;
```

## `lastElementChild`

```js
element.lastElementChild;
```

## `nextElementSibling`

Gets the next sibling element:

```js
element.nextElementSibling;
```

## `previousElementSibling`

Gets the previous sibling element:

```js
element.previousElementSibling;
```

---

# 9. `closest()`

Finds the nearest ancestor matching a selector.

Example:

```html
<div class="card">
    <button class="delete">Delete</button>
</div>
```

From the button:

```js
const card = button.closest(".card");
```

This is extremely useful for event delegation.

---

# 10. `matches()`

Checks whether an element matches a CSS selector.

```js
if (event.target.matches(".delete")) {
    // delete logic
}
```

Returns:

```text
true / false
```

---

# 11. Events

Add an event listener:

```js
button.addEventListener("click", () => {
    console.log("Clicked");
});
```

Common events:

```text
click
input
change
submit
```

---

# 12. `event.target` vs `event.currentTarget`

## `event.target`

The element where the event originally occurred.

```js
event.target
```

## `event.currentTarget`

The element whose event listener is currently executing.

Example:

```js
container.addEventListener("click", event => {
    console.log(event.target);
    console.log(event.currentTarget);
});
```

If a button inside the container is clicked:

```text
target        → button
currentTarget → container
```

---

# 13. Event Bubbling

Events generally propagate from the target upward through its ancestors.

Example:

```html
<div id="parent">
    <button id="child">Click</button>
</div>
```

Clicking the button can trigger:

```text
button
 ↓
parent
 ↓
higher ancestors
```

This is called event bubbling.

---

# 14. `stopPropagation()`

Stops the event from continuing to bubble.

```js
event.stopPropagation();
```

Example:

```js
child.addEventListener("click", event => {
    event.stopPropagation();
});
```

---

# 15. Event Delegation

Instead of adding listeners to many child elements, add one listener to their parent.

Example:

```js
container.addEventListener("click", event => {

    if (event.target.matches(".delete")) {
        // delete logic
    }

});
```

This is especially useful for **dynamically created elements**.

Mental model:

```text
Many dynamic buttons
        ↓
One parent listener
        ↓
event.target
        ↓
Identify clicked element
```

---

# 16. Arrays + Objects + DOM

A very common web application pattern is an array containing objects.

Example:

```js
const products = [
    {
        id: 1,
        name: "iPhone",
        price: 1000,
        category: "electronics"
    },
    {
        id: 2,
        name: "Laptop",
        price: 1500,
        category: "electronics"
    }
];
```

Each array element is an object.

Access:

```js
products[0].name;
```

Result:

```text
iPhone
```

---

# 17. Rendering Arrays of Objects

Suppose:

```html
<div id="products"></div>
```

Select it:

```js
const productsContainer = document.querySelector("#products");
```

Create a render function:

```js
function renderProducts(productList) {

    productsContainer.innerHTML = "";

    productList.forEach(product => {

        const card = document.createElement("div");

        card.className = "card";
        card.textContent =
            `${product.name} - ₹${product.price}`;

        productsContainer.append(card);
    });
}
```

Then:

```js
renderProducts(products);
```

Mental model:

```text
Array of Objects
      ↓
forEach()
      ↓
createElement()
      ↓
Fill element
      ↓
append()
      ↓
DOM
```

---

# 18. Dynamic DOM Rendering

Instead of manually writing every product in HTML:

```html
<div>iPhone</div>
<div>Laptop</div>
```

JavaScript generates the elements from data.

This is important because the data can change.

```text
State/Data
   ↓
Render function
   ↓
DOM
```

---

# 19. Filtering Data + Rendering

Example:

```js
const filteredProducts = products.filter(product => {
    return product.price > 500;
});

renderProducts(filteredProducts);
```

Flow:

```text
products
   ↓
filter()
   ↓
filtered array
   ↓
renderProducts()
   ↓
DOM
```

---

# 20. Search UI

Example:

```js
searchInput.addEventListener("input", event => {

    const searchText = event.target.value.toLowerCase();

    const filtered = products.filter(product => {
        return product.name
            .toLowerCase()
            .includes(searchText);
    });

    renderProducts(filtered);
});
```

Important concepts combined:

```text
input event
event.target
value
toLowerCase()
filter()
includes()
render()
```

---

# 21. Multiple Filters

A common architecture:

```js
function applyFilterAndSort() {

    let result = products;

    // search filter
    // category filter
    // price filter
    // sorting

    renderProducts(result);
}
```

Each control calls the same function:

```js
searchInput.addEventListener("input", applyFilterAndSort);

categorySelect.addEventListener("change", applyFilterAndSort);

priceSelect.addEventListener("change", applyFilterAndSort);

sortSelect.addEventListener("change", applyFilterAndSort);
```

Important:

When registering the event listener:

```js
applyFilterAndSort
```

not:

```js
applyFilterAndSort()
```

because the first passes the function for later execution.

---

# 22. Sorting + Rendering

Example:

```js
function applyFilterAndSort() {

    let result = [...products];

    result.sort((a, b) => {
        return a.price - b.price;
    });

    renderProducts(result);
}
```

Why use:

```js
[...products]
```

Because `sort()` mutates the array.

---

# 23. Delete with Event Delegation

Suppose each delete button has:

```js
button.dataset.id = product.id;
```

Then:

```js
productsContainer.addEventListener("click", event => {

    const button = event.target.closest(".delete");

    if (!button) return;

    const id = Number(button.dataset.id);

    products = products.filter(product => {
        return product.id !== id;
    });

    applyFilterAndSort();
});
```

Flow:

```text
Click
 ↓
Parent listener
 ↓
closest(".delete")
 ↓
dataset.id
 ↓
Number()
 ↓
filter()
 ↓
Update array
 ↓
Render
```

---

# 24. `dataset`

HTML:

```html
<button data-id="5">Delete</button>
```

JavaScript:

```js
const id = button.dataset.id;
```

Result:

```text
"5"
```

Dataset values are strings.

Convert when a numeric ID is required:

```js
const id = Number(button.dataset.id);
```

---

# 25. Handling No Results

After filtering:

```js
if (result.length === 0) {
    productsContainer.textContent = "No products found";
    return;
}
```

Otherwise render normally:

```js
renderProducts(result);
```

This creates a better user experience and is a useful assessment pattern.

---

# 26. Arrays + Objects + DOM + Events: Complete Flow

A product management UI can work like this:

```text
                 PRODUCTS ARRAY
                       ↓
              applyFilterAndSort()
                 ↙     ↓      ↘
             search  filter   sort
                 \     |      /
                  \    |     /
                   RESULT ARRAY
                       ↓
                renderProducts()
                       ↓
                  createElement()
                       ↓
                    append()
                       ↓
                      DOM
```

For deletion:

```text
User clicks Delete
       ↓
Event delegation
       ↓
closest(".delete")
       ↓
dataset.id
       ↓
filter()
       ↓
Update products array
       ↓
applyFilterAndSort()
       ↓
Render DOM again
```

---

# 27. Important Separation: State vs Rendering

Keep data and UI logic conceptually separate.

### State

```js
let products = [
    { id: 1, name: "Laptop", price: 1200 }
];
```

### Rendering

```js
function renderProducts(productList) {
    // create DOM from productList
}
```

### Filtering/sorting

```js
function applyFilterAndSort() {
    // create result from state
    // render result
}
```

Architecture:

```text
State
 ↓
Transform
 ↓
Render
 ↓
DOM
```

When state changes:

```text
State changes
 ↓
Transform again
 ↓
Render again
```

---

# 28. High-Value DOM Methods

| Method / Property | Purpose |
|---|---|
| `querySelector()` | Select first matching element |
| `querySelectorAll()` | Select all matching elements |
| `.value` | Read form/input value |
| `.checked` | Read checkbox state |
| `.textContent` | Read/write text |
| `createElement()` | Create DOM element |
| `append()` | Add at end |
| `prepend()` | Add at beginning |
| `.remove()` | Remove element |
| `.parentElement` | Get parent |
| `.children` | Get child elements |
| `.firstElementChild` | First child element |
| `.lastElementChild` | Last child element |
| `.nextElementSibling` | Next sibling |
| `.previousElementSibling` | Previous sibling |
| `.closest()` | Find nearest matching ancestor |
| `.matches()` | Check selector match |
| `.dataset` | Read/write `data-*` values |

---

# 29. High-Value Event Concepts

| Concept | Meaning |
|---|---|
| `addEventListener()` | Register an event listener |
| `event.target` | Original event target |
| `event.currentTarget` | Element running listener |
| `preventDefault()` | Stop default browser action |
| `stopPropagation()` | Stop event bubbling |
| Event bubbling | Event moves from target toward ancestors |
| Event delegation | Parent handles events from children |

---

# 30. High-Value Array + DOM Combinations

### Search

```js
filter() + includes() + input event
```

### Display list

```js
forEach() + createElement() + append()
```

### Transform displayed data

```js
map() + render()
```

### Delete item

```js
filter() + dataset + event delegation
```

### Find specific item

```js
find() + DOM update
```

### Sort displayed items

```js
spread + sort() + render()
```

### Complex validation/state processing

```js
some() / every() / reduce()
```

---

# 31. Accenture-Style Mental Checklist

When given a DOM + data problem, think:

```text
1. Where is my state?
   → array/object

2. Which DOM element receives the output?
   → querySelector()

3. How do I transform the data?
   → map/filter/find/reduce/sort

4. How do I create the UI?
   → createElement()

5. How do I insert it?
   → append()/prepend()

6. How do I detect interaction?
   → addEventListener()

7. Are elements dynamic?
   → event delegation

8. How do I identify the clicked item?
   → closest() + dataset

9. After changing state, what happens?
   → render again
```

---

# 32. Final Mental Model

The most important combined concept is:

```text
DATA
(Array of Objects)
       ↓
USER ACTION
(input / change / click)
       ↓
EVENT HANDLER
       ↓
TRANSFORM DATA
(filter / map / find / sort / reduce)
       ↓
RENDER
(createElement / textContent / append)
       ↓
DOM
       ↓
USER SEES UPDATED UI
```

This completes the Arrays + Objects + DOM Manipulation section for the current Accenture placement preparation track.
