# JavaScript Events — Assessment Revision Sheet

> Quick revision for vanilla JavaScript / DOM-based coding assessments.

---

## 1. What Is an Event?

An **event** is something that happens in the browser.

Examples:

- User clicks a button
- User types into an input
- User submits a form
- User changes a dropdown
- User presses or releases a keyboard key

Mental model:

```text
Browser detects action
        ↓
Event occurs
        ↓
Event listener catches it
        ↓
Callback function executes
```

---

## 2. `addEventListener()`

### What it does

Registers a function that runs when a specified event occurs.

### Syntax

```javascript
element.addEventListener("eventName", callback);
```

### Example

```javascript
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
    console.log("Button clicked");
});
```

The second argument is a function.

Correct:

```javascript
button.addEventListener("click", handleClick);
```

Wrong:

```javascript
button.addEventListener("click", handleClick());
```

`handleClick()` executes immediately; `handleClick` passes the function for later execution.

---

## 3. `click`

Fires when the user clicks an element.

```javascript
button.addEventListener("click", () => {
    console.log("Clicked");
});
```

Typical assessment uses:

- Add item
- Delete item
- Complete task
- Clear input
- Toggle state
- Update counters

---

## 4. `input`

Fires when an input's value changes through user interaction.

```javascript
input.addEventListener("input", () => {
    console.log(input.value);
});
```

Typical use: search/filter while typing.

```javascript
searchInput.addEventListener("input", () => {
    const search = searchInput.value.toLowerCase().trim();

    // filtering logic
});
```

Mental model:

```text
User types "a"   → input event
User types "ap"  → input event
User types "app" → input event
```

---

## 5. `change`

Fires when the value of a form control changes and the change is committed.

Common uses:

- `<select>`
- Checkbox
- Radio button

Example:

```javascript
const category = document.querySelector("#category");

category.addEventListener("change", () => {
    console.log(category.value);
});
```

Assessment mental model:

```text
Search input → input
Dropdown     → change
Checkbox     → change
Radio        → change
```

---

## 6. `submit`

Fires when a form is submitted.

```javascript
const form = document.querySelector("#taskForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("Form submitted");
});
```

For JavaScript-controlled forms, `preventDefault()` is commonly used to prevent the browser's normal form submission behavior.

---

## 7. `event`

The browser passes an **event object** to the callback.

```javascript
button.addEventListener("click", (event) => {
    console.log(event);
});
```

Mental model:

```text
event
├── target
├── preventDefault()
└── other event information
```

---

## 8. `event.target`

Refers to the DOM element that **originated the event**.

```javascript
button.addEventListener("click", (event) => {
    console.log(event.target);
});
```

Important:

```text
event.target ≠ element with an ID
event.target = element that triggered/originated the event
```

---

## 9. `event.target` + `classList`

Useful for checking which kind of button triggered an event.

```javascript
container.addEventListener("click", (event) => {
    if (event.target.classList.contains("complete")) {
        console.log("Complete clicked");
    }
});
```

If the clicked element has `class="complete"`:

```javascript
event.target.classList.contains("complete");
// true
```

This becomes important for event delegation.

---

## 10. `event.preventDefault()`

Prevents the browser's **default action associated with the event**.

It does **not** remove the event.

Form example:

```javascript
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Custom form handling
});
```

Mental model:

```text
Submit form
    ↓
submit event
    ↓
callback
    ↓
preventDefault()
    ↓
browser's default submission is prevented
    ↓
JavaScript handles the form
```

---

## 11. Important Assessment Events

| Event | Typical use |
|---|---|
| `click` | Buttons / clickable elements |
| `input` | Search / typing |
| `change` | Select / checkbox / radio |
| `submit` | Forms |
| `keydown` | Key pressed |
| `keyup` | Key released |

Prioritize:

```text
click
input
change
submit
```

---

## 12. Named vs Inline Callback

Inline:

```javascript
button.addEventListener("click", () => {
    console.log("Clicked");
});
```

Named:

```javascript
const handleClick = () => {
    console.log("Clicked");
};

button.addEventListener("click", handleClick);
```

Use a named function when the handler is longer or reused.

---

## 13. Common Mistakes

### Calling the handler instead of passing it

Wrong:

```javascript
button.addEventListener("click", handleClick());
```

Correct:

```javascript
button.addEventListener("click", handleClick);
```

### Confusing `preventDefault()` with an event

```text
submit              → event
preventDefault()    → method used inside the handler
```

### Using `click` for live search

Wrong:

```javascript
search.addEventListener("click", ...);
```

Correct:

```javascript
search.addEventListener("input", ...);
```

### Filtering outside the event

Wrong for live search:

```javascript
const inputValue = input.value.toLowerCase();

products.forEach((product) => {
    // filter
});
```

This runs once.

Correct:

```javascript
input.addEventListener("input", () => {
    const inputValue = input.value.toLowerCase();

    products.forEach((product) => {
        // filter
    });
});
```

---

## 14. Combined Example — Search + Clear

HTML:

```html
<input id="search">
<button id="clear">Clear</button>
```

JavaScript:

```javascript
const search = document.querySelector("#search");
const clearBtn = document.querySelector("#clear");

search.addEventListener("input", () => {
    console.log(search.value);
});

clearBtn.addEventListener("click", (event) => {
    search.value = "";

    console.log("Input cleared");
    console.log(event.target);
});
```

Combines:

```text
querySelector()
+
input
+
click
+
value
+
event.target
```

---

## 15. Event Mental Model

For assessment questions:

```text
What action?
     ↓
Which event?

User clicks       → click
User types        → input
Dropdown changes  → change
Form submitted    → submit
Key pressed       → keydown
Key released      → keyup
```

Then:

```text
EVENT
  ↓
addEventListener()
  ↓
callback
  ↓
event
  ↓
event.target
  ↓
DOM / JavaScript logic
```

---

## 16. High-Priority Cheat Sheet

| Concept | Meaning | Example |
|---|---|---|
| `addEventListener()` | Listen for an event | `button.addEventListener(...)` |
| `click` | User clicks | Buttons |
| `input` | Input value changes | Search |
| `change` | Form control changes | Select / checkbox |
| `submit` | Form submitted | Task form |
| `event` | Event information object | `event` |
| `event.target` | Element that triggered event | `event.target` |
| `event.preventDefault()` | Prevent default browser action | Form |

---

## 17. Assessment Patterns

### Search

```text
input event
    ↓
input.value
    ↓
filter
    ↓
DOM update
```

### Button action

```text
click event
    ↓
event.target if needed
    ↓
perform action
```

### Form

```text
submit event
    ↓
preventDefault()
    ↓
read values
    ↓
validate
    ↓
update DOM
```

### Dropdown

```text
change event
    ↓
select.value
    ↓
filter/update DOM
```

---

## Final Recall

You should be able to write these without looking them up:

```javascript
element.addEventListener("click", () => {});
```

```javascript
element.addEventListener("input", () => {});
```

```javascript
element.addEventListener("change", () => {});
```

```javascript
form.addEventListener("submit", (event) => {
    event.preventDefault();
});
```

```javascript
element.addEventListener("click", (event) => {
    console.log(event.target);
});
```

---

## Learning Status

```text
01 — DOM Fundamentals     ✅
02 — Events                ✅
03 — Forms                 ⏳
04 — Dynamic DOM           ⏳
05 — Tables                ⏳
06 — Arrays + DOM          ⏳
07 — Search / Filter       ⏳
08 — State / Counters      ⏳
09 — Event Delegation      ⏳
10 — Combined Practice     ⏳
11 — Accenture Question 2  ⏳
```

The goal is not to memorize this file word-for-word.

The goal is to recognize the pattern immediately:

```text
"User types"
      ↓
input event

"User clicks"
      ↓
click event

"Form submitted"
      ↓
submit + preventDefault()

"Which element triggered it?"
      ↓
event.target
```
