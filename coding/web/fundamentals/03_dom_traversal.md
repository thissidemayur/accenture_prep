# 03 — DOM Traversal

## Scope

Today's session covered only DOM traversal:

- `parentElement`
- `parentNode` (basic distinction)
- `children`
- `firstElementChild`
- `lastElementChild`
- `nextElementSibling`
- `previousElementSibling`
- `closest()`
- `matches()`

---

## 1. DOM Tree Mental Model

```text
                         PARENT
                           ↑
                           │
                 parentElement
                           │
                           │
previousElementSibling ← ELEMENT → nextElementSibling
                           │
                           │
                           ↓
                        children
                       ↙        ↘
          firstElementChild   lastElementChild
```

Think of the DOM as a tree.

- **Up** → parent
- **Down** → children
- **Sideways** → siblings
- **Search upward** → `closest()`
- **Check current element** → `matches()`

---

## 2. `parentElement`

Returns the **immediate parent HTML element**.

```html
<div id="container">
    <div class="task">
        <button id="delete">Delete</button>
    </div>
</div>
```

```javascript
const button = document.querySelector("#delete");

button.parentElement;
```

Returns the `.task` `<div>`.

Move up another level:

```javascript
button.parentElement.parentElement;
```

Returns `#container`.

### Mental model

```text
element
   ↑
parentElement
```

It moves **one level upward**.

---

## 3. `parentElement` vs `parentNode`

For normal HTML assessment questions, `parentElement` is usually what you want.

```javascript
element.parentElement
```

returns an `Element` or `null`.

```javascript
element.parentNode
```

is more general and can return other DOM node types such as `Document` or `DocumentFragment`.

### Practical rule

```text
Need the parent HTML element?
        ↓
Use parentElement
```

---

## 4. `children`

Returns the collection of the element's **direct child elements**.

```html
<div class="task">
    <span>Learn JavaScript</span>
    <button class="delete">Delete</button>
</div>
```

```javascript
const task = document.querySelector(".task");

task.children;
```

Conceptually:

```text
HTMLCollection
    0 → <span>
    1 → <button>
```

### Access by index

```javascript
task.children[0];          // <span>
task.children[1];          // <button>
task.children.length;      // 2
```

Important:

> `children` means **direct child elements only**.

---

## 5. `firstElementChild`

Returns the **first direct child element**.

```javascript
task.firstElementChild;
```

Returns:

```html
<span>Learn JavaScript</span>
```

It corresponds to:

```javascript
task.children[0];
```

Example:

```javascript
task.firstElementChild.textContent;
```

Returns:

```text
Learn JavaScript
```

---

## 6. `lastElementChild`

Returns the **last direct child element**.

```javascript
task.lastElementChild;
```

Returns:

```html
<button class="delete">Delete</button>
```

It corresponds conceptually to:

```javascript
task.children[task.children.length - 1];
```

---

## 7. `children` vs First/Last Child

Given:

```html
<div class="task">
    <span>Learn JavaScript</span>
    <button class="delete">Delete</button>
</div>
```

```text
task.children
    ↓
[span, button]

task.firstElementChild
    ↓
span

task.lastElementChild
    ↓
button
```

Quick rule:

```text
children           → all direct child elements
firstElementChild  → first direct child element
lastElementChild   → last direct child element
```

---

## 8. `nextElementSibling`

Returns the **next sibling element**.

```html
<div class="task">
    <span>Learn JavaScript</span>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
</div>
```

```javascript
const editButton = document.querySelector(".edit");

editButton.nextElementSibling;
```

Returns:

```html
<button class="delete">Delete</button>
```

Mental model:

```text
span → edit → delete
        ↑
      current

nextElementSibling
        ↓
      delete
```

If there is no next sibling element, it returns:

```javascript
null
```

---

## 9. `previousElementSibling`

Returns the **previous sibling element**.

```javascript
editButton.previousElementSibling;
```

Returns:

```html
<span>Learn JavaScript</span>
```

Mental model:

```text
span ← edit ← delete
       ↑
     current

previousElementSibling
        ↓
       span
```

If there is no previous sibling element, it returns:

```javascript
null
```

---

## 10. Sibling Mental Model

```text
             parent
                │
        ┌───────┼───────┐
        ↓       ↓       ↓
        A  ←→  B  ←→   C
              current
```

From `B`:

```javascript
B.previousElementSibling; // A
B.nextElementSibling;     // C
```

---

## 11. `closest()`

`closest(selector)` searches upward from the current element and returns the **nearest element matching the selector**.

It includes the current element itself in the search.

Example:

```html
<div class="tasks">
    <div class="task">
        <button class="delete">
            <span>Delete</span>
        </button>
    </div>
</div>
```

```javascript
const span = document.querySelector(".delete span");

span.closest(".task");
```

Returns the nearest `.task` element.

```javascript
span.closest(".tasks");
```

Returns the `.tasks` element.

### Mental model

```text
current
   ↑
ancestor
   ↑
ancestor
   ↑
matching element
```

`closest()` searches upward until it finds the nearest match.

---

## 12. `parentElement` vs `closest()`

### `parentElement`

Moves **exactly one level upward**:

```text
span
 ↑
button
```

```javascript
span.parentElement;
```

→ button

### `closest()`

Searches upward until a matching selector is found:

```text
span
 ↑
button.delete
 ↑
div.task
 ↑
div.tasks
```

```javascript
span.closest(".task");
```

→ `.task`

### Rule

```text
Immediate parent?
    → parentElement

Nearest matching ancestor/current element?
    → closest(selector)
```

---

## 13. `closest()` Can Return `null`

If no matching element exists:

```javascript
element.closest(".does-not-exist");
```

returns:

```javascript
null
```

Safe pattern:

```javascript
const task = event.target.closest(".task");

if (task) {
    task.remove();
}
```

---

## 14. `matches()`

Checks whether the **current element itself** matches a CSS selector.

Returns a boolean:

```text
true
false
```

Example:

```html
<button class="delete">Delete</button>
```

```javascript
button.matches(".delete");
```

→ `true`

For:

```html
<button class="edit">Edit</button>
```

```javascript
button.matches(".delete");
```

→ `false`

---

## 15. `matches()` vs `closest()`

### `matches()`

```javascript
element.matches(".delete");
```

means:

> Does THIS exact element match `.delete`?

### `closest()`

```javascript
element.closest(".delete");
```

means:

> Does this element or one of its ancestors match `.delete`?

Example:

```html
<button class="delete">
    <span>Delete</span>
</button>
```

If the user clicks the `<span>`:

```javascript
event.target.matches(".delete");
```

→ `false`

But:

```javascript
event.target.closest(".delete");
```

→ the Delete button.

---

## 16. `event.target` + `closest()`

This is highly useful for dynamic UIs.

```html
<div class="task">
    <button class="delete">
        <span>🗑️</span>
    </button>
</div>
```

If the user clicks the inner `<span>`:

```javascript
event.target;
```

refers to the `<span>`.

Find the button:

```javascript
event.target.closest(".delete");
```

Find the task:

```javascript
event.target.closest(".task");
```

Remove the task:

```javascript
const task = event.target.closest(".task");

if (task) {
    task.remove();
}
```

---

## 17. Why `closest()` Is Better Than Hard-Coded Parent Chains

Fragile:

```javascript
event.target.parentElement.parentElement.remove();
```

This assumes the HTML structure never changes.

Better:

```javascript
const task = event.target.closest(".task");

if (task) {
    task.remove();
}
```

This expresses the actual intention:

> Find the nearest task containing the clicked element.

---

## 18. Integrated Event Delegation Pattern

```javascript
const tasks = document.querySelector("#tasks");

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

This combines:

```text
event.target
+
closest()
+
conditional validation
+
remove()
```

---

## 19. Common Mistakes

### Mistake 1 — Removing the wrong task

Avoid:

```javascript
document.querySelector(".task").remove();
```

when handling a clicked task.

`querySelector(".task")` returns the **first** matching task, not necessarily the clicked task.

Prefer:

```javascript
event.target.closest(".task")?.remove();
```

or an explicit `if`.

---

### Mistake 2 — Removing the wrong variable in a loop

Wrong:

```javascript
for (const task of tasks.children) {
    taskElem.remove();
}
```

Correct:

```javascript
for (const task of tasks.children) {
    task.remove();
}
```

The loop variable represents the current child.

---

### Mistake 3 — Confusing parent and children

```text
element.parentElement
→ goes UP

element.children
→ goes DOWN
```

---

### Mistake 4 — Confusing `matches()` and `closest()`

```text
matches()
→ checks current element only

closest()
→ searches current element + ancestors
```

---

# 20. DOM Traversal Cheat Sheet

```text
parentElement
→ immediate parent HTML element

children
→ all direct child elements

firstElementChild
→ first direct child element

lastElementChild
→ last direct child element

nextElementSibling
→ next sibling element

previousElementSibling
→ previous sibling element

closest(selector)
→ nearest matching element while searching upward

matches(selector)
→ checks whether current element matches selector
```

---

# 21. Active Recall

You should be able to answer these without looking them up:

```text
parentElement
→ What is my immediate parent?

children
→ What are my direct child elements?

firstElementChild
→ What is my first child element?

lastElementChild
→ What is my last child element?

nextElementSibling
→ What element comes after me?

previousElementSibling
→ What element comes before me?

closest(".task")
→ What is the nearest matching element while moving upward?

matches(".delete")
→ Does this exact element match .delete?
```

---

# Today's Status

```text
DOM Traversal

parentElement           ✅
parentNode              ✅ basic distinction
children                ✅
firstElementChild       ✅
lastElementChild        ✅
nextElementSibling      ✅
previousElementSibling  ✅
closest()               ✅
matches()               ✅
```

## Not included today

These belong to later topics:

```text
cloneNode()
FormData
Advanced forms
Tables
Array → DOM rendering
Sorting
```

Today's session was specifically about **DOM traversal**.

---

# Core Mental Model

```text
                 parent
                   ↑
                   │
previous ←──── current ────→ next
                   │
                   ↓
                children
```

Remember:

```text
parentElement       → go UP one level
children            → go DOWN to direct children
first/last child    → go DOWN to a specific edge
previous/next       → move SIDEWAYS
closest()           → SEARCH UPWARD
matches()           → CHECK CURRENT ELEMENT
```
