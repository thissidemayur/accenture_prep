# JavaScript DOM Manipulation — Assessment Revision Sheet

> Purpose: Quick revision for vanilla JavaScript / DOM-based coding assessments.
> Focus: What an API does, when to use it, syntax, and common mistakes.

---

## 1. Selection

### `document.getElementById()`

**What it does:** Selects an element by its `id`.

**When to use:** When you know the exact ID of the element.

**Syntax:**

```javascript
const element = document.getElementById("search");
```

**Example:**

```html
<input id="search">
```

```javascript
const input = document.getElementById("search");
```

**Common mistake:** Do not include `#` here.

```javascript
document.getElementById("search");  // correct
document.getElementById("#search"); // wrong
```

---

### `document.querySelector()`

**What it does:** Selects the **first** element matching a CSS selector.

**When to use:** When you want one element and need CSS selector syntax.

**Syntax:**

```javascript
const element = document.querySelector("selector");
```

**Examples:**

```javascript
document.querySelector("#search");     // ID
document.querySelector(".product");    // class
document.querySelector("li");           // first <li>
document.querySelector("ul .product"); // descendant selector
```

**Remember:**

```text
#name      → ID
.product   → class
li         → element
```

---

### `document.querySelectorAll()`

**What it does:** Selects **all** elements matching a CSS selector.

**When to use:** When you need to work with multiple matching elements.

**Syntax:**

```javascript
const elements = document.querySelectorAll(".product");
```

The result is a **NodeList**, not a normal JavaScript array.

A NodeList can be iterated with `forEach()`:

```javascript
elements.forEach((element) => {
    console.log(element.textContent);
});
```

**Remember:**

```text
querySelector()     → first matching element
querySelectorAll()  → all matching elements (NodeList)
```

---

# 2. Reading and Modifying Elements

## `element.textContent`

**What it does:** Reads or sets the text content inside an element.

**When to use:** When you need text rather than HTML markup.

**Read:**

```javascript
const text = element.textContent;
```

**Set:**

```javascript
element.textContent = "Apple";
```

Example:

```html
<li class="product">Banana</li>
```

```javascript
console.log(product.textContent);
// Banana
```

---

## `element.value`

**What it does:** Reads or sets the current value of form controls such as `<input>`, `<textarea>`, and `<select>`.

**When to use:** When reading user-entered form/input data.

**Read:**

```javascript
const value = input.value;
```

**Set:**

```javascript
input.value = "nana";
```

Example:

```html
<input id="search">
```

```javascript
const input = document.querySelector("#search");

input.value = "nana";
console.log(input.value);
```

### Important distinction

```text
<input>  → input.value
<li>     → li.textContent
```

---

## `element.innerHTML`

**What it does:** Reads or replaces the HTML markup inside an element.

**When to use:** When you intentionally need to insert or inspect HTML markup.

**Example:**

```javascript
element.innerHTML = "<strong>Hello</strong>";
```

The browser interprets `<strong>` as HTML.

### Assessment rule

Prefer `textContent` when you only need text.

Prefer `createElement()` + `appendChild()` when dynamically constructing DOM elements.

Do not use `innerHTML` unnecessarily.

---

## `element.style`

**What it does:** Reads or modifies an element's inline CSS styles.

**When to use:** For simple direct style changes in an assessment.

**Examples:**

```javascript
element.style.display = "none";
element.style.display = "";
element.style.color = "red";
```

### Common show/hide pattern

```javascript
if (isFound) {
    product.style.display = "";
} else {
    product.style.display = "none";
}
```

---

# 3. `classList`

`classList` provides methods for manipulating CSS classes on an element.

## `element.classList.add()`

**What it does:** Adds a class.

```javascript
element.classList.add("hidden");
```

---

## `element.classList.remove()`

**What it does:** Removes a class.

```javascript
element.classList.remove("hidden");
```

---

## `element.classList.toggle()`

**What it does:** Adds the class if it is absent; removes it if it is present.

```javascript
element.classList.toggle("hidden");
```

**When to use:** Toggle visibility or state.

---

## `element.classList.contains()`

**What it does:** Checks whether a class exists.

**Returns:** `true` or `false`.

```javascript
if (element.classList.contains("hidden")) {
    console.log("Element is hidden");
}
```

### Mental model

```text
add("x")       → ensure x exists
remove("x")    → ensure x does not exist
toggle("x")    → add/remove x
contains("x")  → check whether x exists
```

---

# 4. Events

## `element.addEventListener()`

**What it does:** Registers a function that runs when a specified event occurs.

**Syntax:**

```javascript
element.addEventListener("eventName", () => {
    // code
});
```

**Example:**

```javascript
button.addEventListener("click", () => {
    console.log("Button clicked");
});
```

### Common events for web assessments

```text
click
input
change
submit
keydown
keyup
```

---

## `event`

The browser passes an **event object** to the callback.

```javascript
button.addEventListener("click", (event) => {
    console.log(event);
});
```

The object contains information about the event.

---

## `event.target`

**What it does:** Refers to the element that triggered the event.

```javascript
button.addEventListener("click", (event) => {
    console.log(event.target);
});
```

This becomes especially important when using **event delegation**.

---

## `event.preventDefault()`

**What it does:** Prevents the browser's default action for that event.

**Classic example:**

```javascript
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // custom form handling
});
```

Do not think of it as "removing the event." It prevents the **default browser behavior** associated with the event.

---

# 5. Creating, Appending, and Removing Elements

## `document.createElement()`

**What it does:** Creates a new DOM element.

**When to use:** When dynamically creating list items, table rows, buttons, cards, messages, etc.

**Syntax:**

```javascript
const element = document.createElement("li");
```

**Important:** `createElement()` belongs to `document`, not an existing element.

---

## `element.appendChild()`

**What it does:** Adds a DOM node as the last child of an element.

**Example:**

```javascript
const li = document.createElement("li");

li.textContent = "Apple";

list.appendChild(li);
```

Mental model:

```text
document.createElement()
        ↓
create new element
        ↓
configure it
        ↓
appendChild()
        ↓
put it into the DOM
```

---

## `element.remove()`

**What it does:** Removes the element from the DOM.

**Example:**

```javascript
li.remove();
```

Useful for:

- deleting list items
- deleting table rows
- removing messages
- removing cards

---

# 6. Attributes

## `element.getAttribute()`

**What it does:** Reads an attribute value.

**Syntax:**

```javascript
const value = element.getAttribute("data-name");
```

Example:

```html
<li data-name="apple fruit">Apple</li>
```

```javascript
console.log(product.getAttribute("data-name"));
// apple fruit
```

---

## `element.setAttribute()`

**What it does:** Creates or changes an attribute.

**Syntax:**

```javascript
element.setAttribute("attribute", "value");
```

Example:

```javascript
button.setAttribute("disabled", "true");
```

Other examples:

```javascript
element.setAttribute("data-status", "completed");
element.setAttribute("title", "Delete task");
```

---

# 7. `data-*` Attributes and `dataset`

Custom `data-*` attributes are useful for storing small pieces of information directly on an HTML element.

### HTML

```html
<li class="product" data-name="apple fruit">
    Apple
</li>
```

### JavaScript

```javascript
product.dataset.name;
```

Result:

```text
"apple fruit"
```

### Mapping

```text
data-name
   ↓
dataset.name

data-user-id
   ↓
dataset.userId

data-task-status
   ↓
dataset.taskStatus
```

### When to use

`data-*` attributes are particularly useful when the DOM element needs associated data for:

- filtering
- identifying records
- button actions
- sorting
- state handling

Example:

```javascript
const name = product.dataset.name.toLowerCase();

if (name.includes(searchValue)) {
    // match
}
```

---

# 8. Essential String Operations for DOM Questions

These JavaScript methods frequently appear together with DOM manipulation.

## `.toLowerCase()`

Converts a string to lowercase.

```javascript
const value = input.value.toLowerCase();
```

Useful for case-insensitive search.

---

## `.trim()`

Removes whitespace from the beginning and end of a string.

```javascript
const value = input.value.trim();
```

Useful for form validation and search input.

---

## `.includes()`

Checks whether a string contains another string.

Returns `true` or `false`.

```javascript
const name = "banana";

name.includes("nan"); // true
name.includes("xyz"); // false
```

### Typical filtering pattern

```javascript
const search = input.value.toLowerCase().trim();

products.forEach((product) => {
    const name = product.textContent.toLowerCase().trim();

    if (name.includes(search)) {
        product.style.display = "";
    } else {
        product.style.display = "none";
    }
});
```

---

# 9. Core Mental Model

For vanilla web assessment questions, think:

```text
HTML
 ↓
creates DOM elements
 ↓
JavaScript selects elements
 ↓
events detect user actions
 ↓
JavaScript reads data
 ↓
JavaScript applies logic
 ↓
JavaScript modifies DOM
 ↓
browser updates the page
```

Example:

```text
User types
    ↓
"input" event
    ↓
input.value
    ↓
toLowerCase()
    ↓
loop through products
    ↓
textContent / dataset
    ↓
includes()
    ↓
style.display / classList
    ↓
updated UI
```

---

# 10. High-Priority API Cheat Sheet

| API / Property | What it does | Typical use |
|---|---|---|
| `getElementById()` | Select by ID | Select one known element |
| `querySelector()` | First CSS-selector match | Select one element |
| `querySelectorAll()` | All CSS-selector matches | Work with multiple elements |
| `.textContent` | Read/set text | Read list/card text |
| `.value` | Read/set form value | Inputs/forms |
| `.innerHTML` | Read/set HTML markup | Intentional HTML insertion |
| `.style` | Modify inline CSS | Simple show/hide/style |
| `.classList.add()` | Add class | Apply state/style |
| `.classList.remove()` | Remove class | Remove state/style |
| `.classList.toggle()` | Add/remove class | Toggle state |
| `.classList.contains()` | Check class | State checking |
| `addEventListener()` | Listen for events | User interaction |
| `event.target` | Element that triggered event | Event handling/delegation |
| `event.preventDefault()` | Stop default browser action | Forms |
| `document.createElement()` | Create DOM element | Dynamic UI |
| `.appendChild()` | Add child element | Insert dynamic UI |
| `.remove()` | Remove element | Delete UI |
| `.getAttribute()` | Read attribute | Inspect attributes |
| `.setAttribute()` | Set attribute | Modify attributes |
| `.dataset` | Access `data-*` values | Filtering/state/data |

---

# 11. Common Assessment Mistakes

### Mistake 1 — Calling `querySelectorAll()` an array

It returns a **NodeList**.

```javascript
const products = document.querySelectorAll(".product");
```

---

### Mistake 2 — Confusing `.value` and `.textContent`

```text
input.value
li.textContent
```

---

### Mistake 3 — Forgetting CSS selector syntax

```javascript
querySelector("#search");  // ID
querySelector(".product"); // class
querySelector("li");       // element
```

---

### Mistake 4 — Using `input.currentInputValue`

If you create:

```javascript
const currentInputValue = input.value;
```

then `currentInputValue` is a variable, not an `input` property.

---

### Mistake 5 — Filtering in the wrong place

If filtering should happen whenever the user types:

```javascript
input.addEventListener("input", () => {
    // read current input
    // filter
    // update DOM
});
```

Do not put the filtering logic outside the event callback if it needs to rerun after every input change.

---

### Mistake 6 — Reversing `.includes()`

For search:

```javascript
productName.includes(searchValue);
```

not:

```javascript
searchValue.includes(productName);
```

---

### Mistake 7 — Using `element.createElement()`

Wrong:

```javascript
element.createElement("li");
```

Correct:

```javascript
document.createElement("li");
```

---

### Mistake 8 — Misunderstanding `preventDefault()`

It does **not** remove the event.

It prevents the browser's default action.

---

# Revision Priority

Before attempting larger assessment problems, become comfortable with these in this order:

1. Selection
2. `.value`
3. `.textContent`
4. `addEventListener()`
5. `event.target`
6. `.classList`
7. `.style`
8. `createElement()`
9. `appendChild()`
10. `.remove()`
11. Attributes
12. `dataset`
13. Form events
14. Dynamic tables
15. Event delegation

