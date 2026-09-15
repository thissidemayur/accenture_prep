# 04 — Events, Bubbling & Event Delegation

## Today's Topics

- `event.target`
- `event.currentTarget`
- Event bubbling
- Event delegation
- Dynamic elements
- `closest()` in delegation
- `matches()`
- `stopPropagation()`
- Dynamic elements + delegated events

---

## 1. `event.target`

`event.target` is the element where the event **originally occurred**.

```html
<div id="container">
    <button id="btn">
        <span>Click Me</span>
    </button>
</div>
```

If the user clicks the `<span>`:

```javascript
container.addEventListener("click", (event) => {
    console.log(event.target);
});
```

Result:

```text
event.target → <span>
```

If the user clicks the button itself:

```text
event.target → <button>
```

### Rule

```text
event.target
→ Where did the event START?
```

---

## 2. `event.currentTarget`

`event.currentTarget` is the element whose **event listener is currently executing**.

```javascript
container.addEventListener("click", (event) => {
    console.log(event.target);
    console.log(event.currentTarget);
});
```

If the span is clicked:

```text
event.target        → span
event.currentTarget → container
```

### Rule

```text
event.target
→ original event source

event.currentTarget
→ element whose listener is currently running
```

---

## 3. `target` vs `currentTarget`

Example:

```html
<div id="parent">
    <button id="child">
        <span>Click</span>
    </button>
</div>
```

If the span is clicked and the listener is on `parent`:

```text
event.target        → span
event.currentTarget → parent
```

`event.target` stays the original event source while the event bubbles.

`event.currentTarget` depends on which listener is currently executing.

---

# 4. Event Bubbling

Event bubbling means an event can travel upward through the DOM.

```html
<div id="parent">
    <button id="child">Click</button>
</div>
```

```javascript
parent.addEventListener("click", () => {
    console.log("Parent");
});

child.addEventListener("click", () => {
    console.log("Child");
});
```

When the button is clicked:

```text
button
  ↓
parent
```

Output:

```text
Child
Parent
```

The event starts at the button and bubbles upward.

---

## Bubbling Example

If:

```html
<div id="parent">
    <button id="child">
        <span id="text">Click</span>
    </button>
</div>
```

and the span is clicked:

```text
span
 ↓
button
 ↓
parent
```

If only `parent` has the listener:

```text
event.target        → span
event.currentTarget → parent
```

---

# 5. Event Delegation

Event delegation means:

> Attach one event listener to a common parent instead of attaching separate listeners to every child.

Instead of:

```javascript
document.querySelectorAll(".delete").forEach((button) => {
    button.addEventListener("click", handler);
});
```

Use:

```javascript
const tasks = document.querySelector("#tasks");

tasks.addEventListener("click", (event) => {
    const button = event.target.closest(".delete");

    if (!button) {
        return;
    }

    console.log("Delete clicked");
});
```

### Why it works

```text
child click
    ↓
event bubbles
    ↓
parent listener receives event
    ↓
event.target identifies origin
    ↓
closest() finds relevant child
```

---

# 6. Why Event Delegation Is Useful

Without delegation:

```text
100 buttons
→ potentially 100 individual listeners
```

With delegation:

```text
100 buttons
      ↓
1 parent listener
```

The bigger practical advantage:

> A delegated parent listener can handle dynamically created descendants.

---

# 7. Dynamic Elements

A dynamic element is added to the DOM after the page initially loads.

Example:

```javascript
const button = document.createElement("button");

button.classList.add("delete");
button.textContent = "Delete";

tasks.append(button);
```

If individual listeners were attached before this button existed:

```javascript
document.querySelectorAll(".delete").forEach((button) => {
    button.addEventListener("click", handler);
});
```

the newly created button does not automatically receive that listener.

---

# 8. Dynamic Elements + Event Delegation

Put the listener on the parent:

```javascript
tasks.addEventListener("click", (event) => {
    const button = event.target.closest(".delete");

    if (!button) {
        return;
    }

    console.log("Delete clicked");
});
```

Now dynamically created buttons can be handled because their clicks bubble to `tasks`.

```text
Create child dynamically
        ↓
append to parent
        ↓
user clicks child
        ↓
event bubbles
        ↓
parent listener
        ↓
closest(".delete")
        ↓
handle action
```

---

# 9. `closest()` in Event Delegation

Given:

```html
<button class="delete">
    <span>🗑️</span>
</button>
```

If the user clicks the span:

```javascript
event.target
```

→ `<span>`

But:

```javascript
event.target.closest(".delete")
```

→ `<button class="delete">`

Why?

```text
span
 ↑
button.delete
```

`closest()` searches the current element and its ancestors.

---

# 10. `matches()`

`matches()` checks whether the **current element itself** matches a CSS selector.

```javascript
button.matches(".delete");
```

→ `true` if the button has the `.delete` class.

If a span inside the button is clicked:

```javascript
event.target.matches(".delete");
```

→ `false`

because the span itself does not match `.delete`.

### Difference

```text
matches()
→ checks current element only

closest()
→ checks current element + ancestors
```

---

# 11. `stopPropagation()`

`event.stopPropagation()` stops the event from continuing to propagate through the DOM.

```javascript
parent.addEventListener("click", () => {
    console.log("Parent");
});

child.addEventListener("click", (event) => {
    console.log("Child");

    event.stopPropagation();
});
```

Clicking the child:

```text
Child
```

The parent listener does not execute.

### Flow

```text
child click
    ↓
child listener
    ↓
stopPropagation()
    ↓
🛑 bubbling stops
```

---

# 12. What `stopPropagation()` Does NOT Do

It does not stop the current callback from continuing.

```javascript
child.addEventListener("click", (event) => {
    console.log("Child 1");

    event.stopPropagation();

    console.log("Child 2");
});
```

Output:

```text
Child 1
Child 2
```

The callback continues.

Only propagation to other elements is stopped.

---

# 13. `stopPropagation()` vs `preventDefault()`

These solve different problems.

### `preventDefault()`

Prevents the browser's default action.

Common form example:

```javascript
event.preventDefault();
```

```text
submit
 ↓
preventDefault()
 ↓
normal browser form submission is prevented
```

### `stopPropagation()`

Stops the event from propagating through the DOM.

```text
child
 ↓
stopPropagation()
 ↓
parent does not receive bubbled event
```

### Remember

```text
preventDefault()
→ stop browser's default behavior

stopPropagation()
→ stop event propagation
```

---

# 14. Don't Use `stopPropagation()` Everywhere

Event bubbling is useful.

Event delegation depends on bubbling.

If a child does:

```javascript
event.stopPropagation();
```

the event may never reach the delegated parent.

```text
button
  ↓
stopPropagation()
  ↓
🛑
  ↓
#tasks listener never receives event
```

Use it only when you intentionally want to prevent ancestor listeners from receiving the event.

---

# 15. Robust Delegation Pattern

```javascript
const tasks = document.querySelector("#tasks");

tasks.addEventListener("click", (event) => {
    const deleteButton = event.target.closest(".delete");

    if (!deleteButton) {
        return;
    }

    const task = deleteButton.closest(".task");

    if (!task) {
        return;
    }

    task.remove();
});
```

This works whether the user clicks:

```text
button itself
```

or:

```text
an element nested inside the button
```

---

# 16. Dynamic Task Example

HTML:

```html
<div id="tasks"></div>
<button id="addTask">Add Task</button>
```

JavaScript:

```javascript
const tasks = document.querySelector("#tasks");
const addTask = document.querySelector("#addTask");

addTask.addEventListener("click", () => {
    const div = document.createElement("div");
    const span = document.createElement("span");
    const button = document.createElement("button");

    div.className = "task";

    span.textContent = "New Task";

    button.textContent = "Delete";
    button.className = "delete";

    div.append(span, button);
    tasks.appendChild(div);
});

tasks.addEventListener("click", (event) => {
    const deleteButton = event.target.closest(".delete");

    if (!deleteButton) {
        return;
    }

    const task = deleteButton.closest(".task");

    if (task) {
        task.remove();
    }
});
```

### Important architecture

```text
Add Task listener
    ↓
create + append task

Tasks listener
    ↓
handle Delete clicks using delegation
```

These are two different click events.

---

# 17. Common Mistake: Wrong Event Object

Wrong:

```javascript
addTask.addEventListener("click", (event) => {
    // create delete button

    const button = event.target.closest(".delete");
});
```

When Add Task is clicked:

```text
event.target
    ↓
#addTask
```

It is not the newly created Delete button.

Creating an element afterward does not change the event already being handled.

Correct architecture:

```text
Add Task click
    ↓
create task

Delete click
    ↓
tasks delegated listener
    ↓
find delete button
    ↓
remove task
```

---

# 18. Common Mistake: Forgetting `return`

Wrong:

```javascript
const button = event.target.closest(".delete");

if (!button) {
    console.log("Not a delete button");
}

button.closest(".task").remove();
```

If no button is found:

```javascript
button === null
```

but execution continues.

Correct:

```javascript
const button = event.target.closest(".delete");

if (!button) {
    return;
}

button.closest(".task")?.remove();
```

---

# 19. Common Mistake: Removing the Wrong Task

Avoid:

```javascript
document.querySelector(".task").remove();
```

inside a delegated handler.

`querySelector(".task")` returns the **first** matching task.

Instead:

```javascript
const task = event.target.closest(".task");

if (task) {
    task.remove();
}
```

This removes the task associated with the clicked element.

---

# 20. Event Flow to Remember

```text
USER INTERACTION
       ↓
event.target
       ↓
event bubbles
       ↓
ancestor listener
       ↓
event.currentTarget
       ↓
closest() / matches()
       ↓
DOM action
```

---

# 21. Quick Revision Table

| Concept | Meaning |
|---|---|
| `event.target` | Original element where event occurred |
| `event.currentTarget` | Element whose listener is currently executing |
| Bubbling | Event travels upward through ancestors |
| Event delegation | Parent handles child events |
| `closest()` | Finds nearest matching current/ancestor element |
| `matches()` | Checks whether current element matches selector |
| `stopPropagation()` | Stops event propagation |
| `preventDefault()` | Prevents browser's default action |

---

# 22. Active Recall

1. Difference between `event.target` and `event.currentTarget`?
2. If a span inside a button is clicked, what is `event.target`?
3. Why does a parent's click listener execute when a child is clicked?
4. What is event delegation?
5. Why is delegation useful for dynamically created elements?
6. Difference between `matches()` and `closest()`?
7. What does `stopPropagation()` do?
8. Difference between `stopPropagation()` and `preventDefault()`?
9. Why can `document.querySelector(".task").remove()` remove the wrong task?
10. Why doesn't `event.target.closest(".delete")` inside the Add Task handler find the newly created Delete button?

---

# Today's Status

```text
event.target               ✅
event.currentTarget        ✅
target vs currentTarget    ✅
event bubbling             ✅
event delegation           ✅
dynamic elements           ✅
dynamic + delegated events ✅
closest() in delegation    ✅
matches()                  ✅
stopPropagation()          ✅
```

## Not covered today

These belong to later topics:

```text
cloneNode()
FormData
Advanced forms
fetch()
Tables
Sorting
Regex
```
