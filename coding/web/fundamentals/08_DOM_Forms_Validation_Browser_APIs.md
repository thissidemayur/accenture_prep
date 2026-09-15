# DOM Forms → Validation → Browser APIs
## Accenture Placement Preparation

This document summarizes the DOM Forms, Validation, and Browser APIs concepts covered during preparation.

---

# 1. DOM Forms

Forms collect user input and allow JavaScript to process it.

Example:

```html
<form id="userForm">
    <input id="name" name="name" placeholder="Name">
    <input id="email" name="email" placeholder="Email">

    <select id="role" name="role">
        <option value="">Select Role</option>
        <option value="developer">Developer</option>
        <option value="tester">Tester</option>
        <option value="designer">Designer</option>
    </select>

    <button type="submit">Add User</button>
</form>
```

Select the form:

```js
const form = document.querySelector("#userForm");
```

---

# 2. Form Submit Event

Listen for the form's `submit` event:

```js
form.addEventListener("submit", event => {
    // form handling
});
```

The submit event occurs when the user submits the form.

---

# 3. `preventDefault()`

Normally, submitting a form can reload/navigate the page.

Use:

```js
event.preventDefault();
```

to stop the browser's default form submission behavior.

Example:

```js
form.addEventListener("submit", event => {

    event.preventDefault();

    console.log("Form submitted without page reload");

});
```

Mental model:

```text
Submit form
    ↓
Browser default behavior
    ↓
preventDefault()
    ↓
JavaScript handles the form
```

---

# 4. Form Input Values

For an input:

```html
<input id="name">
```

Get its value:

```js
const name = document.querySelector("#name").value;
```

For checkbox:

```js
const checkbox = document.querySelector("#terms");

console.log(checkbox.checked);
```

`.checked` gives a Boolean:

```text
true / false
```

---

# 5. `FormData`

`FormData` provides an easy way to collect form values.

Example:

```js
form.addEventListener("submit", event => {

    event.preventDefault();

    const formData = new FormData(form);

});
```

Important:

`FormData` uses the HTML form controls' `name` attributes.

Example:

```html
<input name="name">
<input name="email">
<select name="role">
```

---

# 6. `FormData.get()`

Get one value:

```js
const name = formData.get("name");
const email = formData.get("email");
const role = formData.get("role");
```

Example:

```js
const formData = new FormData(form);

console.log(formData.get("name"));
console.log(formData.get("email"));
console.log(formData.get("role"));
```

---

# 7. `FormData.getAll()`

`getAll()` is useful when multiple controls have the same name.

Example:

```html
<input type="checkbox" name="skills" value="js">
<input type="checkbox" name="skills" value="go">
<input type="checkbox" name="skills" value="docker">
```

Then:

```js
const skills = formData.getAll("skills");
```

Possible result:

```js
["js", "go", "docker"]
```

Mental model:

```text
get()    → one value
getAll() → all values for that name
```

---

# 8. Radio Buttons

Radio buttons usually share the same `name`.

```html
<input type="radio" name="role" value="developer">
<input type="radio" name="role" value="tester">
<input type="radio" name="role" value="designer">
```

Using `FormData`:

```js
const role = formData.get("role");
```

Only the selected radio value is returned.

---

# 9. Checkboxes

Checkboxes can be handled using `getAll()` when multiple boxes have the same name.

```js
const skills = formData.getAll("skills");
```

This produces an array of selected values.

---

# 10. Select / Dropdown

Example:

```html
<select name="role">
    <option value="">Select Role</option>
    <option value="developer">Developer</option>
    <option value="tester">Tester</option>
</select>
```

Using:

```js
const role = formData.get("role");
```

returns the selected option's value.

---

# 11. Form Validation

Validation ensures that submitted data satisfies the application's requirements.

Typical checks:

```text
Required fields
Valid email
Minimum length
Allowed values
Matching passwords
Valid numbers
```

Basic example:

```js
if (!name || !email || !role) {
    // validation failed
}
```

---

# 12. Validation with Multiple Errors

Instead of immediately stopping at the first error, collect errors.

Example:

```js
const errors = {};

if (!name) {
    errors.name = "Name is required";
}

if (!email) {
    errors.email = "Email is required";
}

if (!role) {
    errors.role = "Role is required";
}
```

Then check:

```js
if (Object.keys(errors).length > 0) {
    // validation failed
}
```

Important:

```js
Object.keys(errors)
```

returns all error-property names.

If there are no errors:

```js
Object.keys(errors).length === 0
```

---

# 13. Visual Error Rendering

An error object can be displayed in the DOM.

Example:

```html
<p id="error"></p>
```

JavaScript:

```js
const errorElement = document.querySelector("#error");

errorElement.textContent = "Please fill all required fields.";
```

For multiple errors:

```js
errorElement.textContent = Object.values(errors).join(", ");
```

---

# 14. Form Reset

After successful submission:

```js
form.reset();
```

This returns the form controls to their initial state.

Example:

```js
form.addEventListener("submit", event => {

    event.preventDefault();

    // validate and process data

    form.reset();

});
```

---

# 15. Convert Form Data into an Object

A common application pattern:

```text
Form
 ↓
FormData
 ↓
Validation
 ↓
Object
 ↓
Application state
```

Example:

```js
const formData = new FormData(form);

const user = {
    id: Date.now(),
    name: formData.get("name"),
    email: formData.get("email"),
    role: formData.get("role")
};
```

Now `user` is a normal JavaScript object.

---

# 16. DOM + Forms + Arrays of Objects

A user-management application can maintain:

```js
let userList = [];
```

When a valid form is submitted:

```js
const user = {
    id: Date.now(),
    name: formData.get("name"),
    email: formData.get("email"),
    role: formData.get("role")
};

userList.push(user);
```

Then render the updated state to the DOM.

Mental model:

```text
User enters data
      ↓
Form submit
      ↓
preventDefault()
      ↓
FormData
      ↓
Validation
      ↓
Create object
      ↓
Add to array
      ↓
Render DOM
```

---

# 17. Browser Storage APIs

Browser storage allows JavaScript to persist data in the browser.

The two important storage APIs covered are:

```text
localStorage
sessionStorage
```

---

# 18. `localStorage`

`localStorage` stores data in the browser and normally keeps it after the browser is closed.

Set:

```js
localStorage.setItem("username", "Mayur");
```

Get:

```js
const username = localStorage.getItem("username");
```

Remove one item:

```js
localStorage.removeItem("username");
```

Remove everything stored by the origin:

```js
localStorage.clear();
```

---

# 19. `sessionStorage`

`sessionStorage` uses the same basic API:

```js
sessionStorage.setItem("username", "Mayur");
```

Get:

```js
const username = sessionStorage.getItem("username");
```

Remove:

```js
sessionStorage.removeItem("username");
```

Clear:

```js
sessionStorage.clear();
```

The key difference:

```text
localStorage
→ persists beyond the current browser session

sessionStorage
→ associated with the current tab/session
```

---

# 20. Storage Only Stores Strings

This is extremely important.

Storage values are strings.

For example:

```js
const user = {
    name: "Mayur",
    role: "developer"
};

localStorage.setItem("user", user);
```

This does NOT correctly preserve the object structure.

Use JSON.

---

# 21. `JSON.stringify()`

Convert a JavaScript object/array into a JSON string.

```js
const user = {
    name: "Mayur",
    role: "developer"
};

const jsonUser = JSON.stringify(user);

localStorage.setItem("user", jsonUser);
```

Mental model:

```text
JavaScript object
       ↓
JSON.stringify()
       ↓
String
       ↓
Browser storage
```

---

# 22. `JSON.parse()`

Convert a JSON string back into a JavaScript object.

```js
const storedUser = localStorage.getItem("user");

const user = JSON.parse(storedUser);
```

Mental model:

```text
Storage string
      ↓
JSON.parse()
      ↓
JavaScript object
```

---

# 23. Store an Array in localStorage

Example:

```js
const userList = [
    { name: "A", role: "developer" },
    { name: "B", role: "tester" }
];

localStorage.setItem(
    "userList",
    JSON.stringify(userList)
);
```

---

# 24. Retrieve an Array from localStorage

```js
const storedUsers = localStorage.getItem("userList");

const userList = storedUsers
    ? JSON.parse(storedUsers)
    : [];
```

This is a useful pattern.

If storage exists:

```text
storedUsers → parse it
```

If storage does not exist:

```text
storedUsers → null → use []
```

---

# 25. Important `stringify()` vs `parse()` Mistake

Wrong:

```js
localStorage.setItem("userList", JSON.parse(userList));
```

Correct:

```js
localStorage.setItem(
    "userList",
    JSON.stringify(userList)
);
```

For retrieving:

```js
const storedUsers = localStorage.getItem("userList");

const userList = storedUsers
    ? JSON.parse(storedUsers)
    : [];
```

Remember:

```text
Before storage:
Object/Array → JSON.stringify()

After retrieval:
String → JSON.parse()
```

---

# 26. Persistent User Management Pattern

A complete application follows this architecture:

```text
Application starts
      ↓
Read localStorage
      ↓
JSON.parse()
      ↓
userList state
      ↓
Render users
```

On form submission:

```text
Form
 ↓
preventDefault()
 ↓
FormData
 ↓
Validation
 ↓
Create user object
 ↓
userList.push()
 ↓
JSON.stringify()
 ↓
localStorage.setItem()
 ↓
Render
```

On deletion:

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
Update userList
 ↓
JSON.stringify()
 ↓
localStorage.setItem()
 ↓
Render
```

---

# 27. State vs Storage vs DOM

Keep these concepts separate.

### State

The current JavaScript data:

```js
let userList = [];
```

### Storage

Persistent browser data:

```js
localStorage
```

### DOM

What the user sees:

```html
<div id="users"></div>
```

Architecture:

```text
localStorage
     ↓
  JavaScript state
     ↓
    render()
     ↓
     DOM
```

When state changes:

```text
State changes
     ↓
Storage updated
     ↓
DOM rendered again
```

Important principle:

> Do not repeatedly read localStorage during every render. Load the stored state once, update the state, persist changes, and render from the state.

---

# 28. DOM + Event Delegation + `dataset`

When dynamically creating elements, `dataset` is useful for storing identifiers in HTML.

Example:

```js
button.dataset.id = user.id;
```

HTML becomes conceptually:

```html
<button data-id="123">Delete</button>
```

Read it:

```js
const id = button.dataset.id;
```

Because `dataset` values are strings, convert to a number when needed:

```js
const id = Number(button.dataset.id);
```

---

# 29. Event Delegation for Dynamic Elements

If delete buttons are created dynamically, attaching a listener to every button is unnecessary.

Instead, attach one listener to the parent:

```js
usersContainer.addEventListener("click", event => {

    const button = event.target.closest(".delete");

    if (!button) return;

    const id = Number(button.dataset.id);

    userList = userList.filter(user => {
        return user.id !== id;
    });

    localStorage.setItem(
        "userList",
        JSON.stringify(userList)
    );

    renderUsers();
});
```

Concept:

```text
Parent listener
      ↓
event.target
      ↓
closest(".delete")
      ↓
dataset.id
      ↓
filter()
      ↓
state update
      ↓
storage update
      ↓
render
```

---

# 30. High-Value Browser APIs Covered

| API / Concept | Purpose |
|---|---|
| `localStorage` | Persistent browser storage |
| `sessionStorage` | Session/tab storage |
| `setItem()` | Store a value |
| `getItem()` | Retrieve a value |
| `removeItem()` | Remove one stored item |
| `clear()` | Clear storage |
| `JSON.stringify()` | Object/array → JSON string |
| `JSON.parse()` | JSON string → object/array |
| `FormData` | Collect form data |
| `FormData.get()` | Get one form value |
| `FormData.getAll()` | Get all values for a field |
| `form.reset()` | Reset form controls |
| `dataset` | Store/read `data-*` attributes |

---

# 31. Important Assessment Patterns

### Pattern 1 — Form submission

```js
form.addEventListener("submit", event => {
    event.preventDefault();

    const formData = new FormData(form);

    // validate
    // create object
    // update state
    // render
});
```

### Pattern 2 — Persistent array

```js
const stored = localStorage.getItem("items");

let items = stored ? JSON.parse(stored) : [];
```

### Pattern 3 — Save state

```js
localStorage.setItem(
    "items",
    JSON.stringify(items)
);
```

### Pattern 4 — Dynamic delete

```js
items = items.filter(item => item.id !== id);
```

### Pattern 5 — Render from state

```text
state → render() → DOM
```

---

# 32. Final Mental Model

For a form-based browser application:

```text
                  USER
                   ↓
                FORM
                   ↓
             submit event
                   ↓
           preventDefault()
                   ↓
               FormData
                   ↓
              Validation
                   ↓
             Create Object
                   ↓
             Array / State
              ↙         ↘
       localStorage      render()
              ↓             ↓
       JSON.stringify      DOM
```

For loading the application:

```text
localStorage
     ↓
getItem()
     ↓
JSON.parse()
     ↓
JavaScript state
     ↓
render()
     ↓
DOM
```

This completes the DOM Forms → Validation → Browser Storage/JSON section covered during the current Accenture preparation track.
