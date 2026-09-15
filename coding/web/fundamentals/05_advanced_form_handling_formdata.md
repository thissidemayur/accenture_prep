# 05 — Advanced Form Handling + FormData

## 1. Form Submission Flow

```javascript
const form = document.querySelector("#userForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // process form
});
```

Typical flow:

```text
submit
  ↓
preventDefault()
  ↓
collect form data
  ↓
normalize values
  ↓
validate
  ↓
show errors OR process valid data
```

---

## 2. Form Controls

### Text / Number input

```javascript
input.value
```

For numbers, convert when needed:

```javascript
const age = Number(input.value);
```

### Radio

```javascript
radio.checked
radio.value
```

`.checked` gives `true` / `false`.

### Checkbox

```javascript
checkbox.checked
checkbox.value
```

Multiple checkboxes can be selected.

### Select

```javascript
select.value
```

Returns the selected option's `value`.

---

## 3. Manually Collecting Multiple Checkboxes

```javascript
const skillCheckboxes = document.querySelectorAll(
    'input[type="checkbox"][name="skills"]'
);

const selectedSkills = [];

skillCheckboxes.forEach((skill) => {
    if (skill.checked) {
        selectedSkills.push(skill.value);
    }
});
```

Example:

```javascript
["javascript", "docker"]
```

The array is an **accumulator**.

---

## 4. `forEach()` vs `for...of` vs `map()`

### `forEach()`

Runs code for every item and returns `undefined`.

```javascript
items.forEach((item) => {
    console.log(item);
});
```

### `for...of`

Loops through iterable values.

```javascript
for (const item of items) {
    console.log(item);
}
```

It does not itself create an array.

### `map()`

Transforms items and returns a new array.

```javascript
const result = numbers.map((number) => {
    return number * 2;
});
```

Result:

```javascript
[2, 4, 6]
```

Mental model:

```text
forEach()
→ perform an action

for...of
→ loop through items

map()
→ transform into a new array
```

---

## 5. Radio Selection

Given:

```html
<input type="radio" name="gender" value="male">
<input type="radio" name="gender" value="female">
<input type="radio" name="gender" value="other">
```

Manual approach:

```javascript
const genderRadios = document.querySelectorAll(
    'input[type="radio"][name="gender"]'
);

let selectedGender = "";

genderRadios.forEach((gender) => {
    if (gender.checked) {
        selectedGender = gender.value;
    }
});
```

Remember:

```text
radio.checked
→ true / false

radio.value
→ value attribute
```

---

# 6. What is `FormData`?

`FormData` collects a form's submitted name/value pairs.

```javascript
const form = document.querySelector("#userForm");

const formData = new FormData(form);
```

Example:

```html
<input name="username" value="mayur">
<input name="email" value="mayur@example.com">
```

Conceptually:

```text
username → mayur
email    → mayur@example.com
```

---

## 7. Why `name` Matters

`FormData` uses the form control's `name` as the key.

```html
<input id="username" name="username">
```

Then:

```javascript
formData.get("username");
```

works.

Remember:

```text
id
→ useful for DOM selection

name
→ form-data key
```

---

## 8. `FormData.get()`

Use:

```javascript
formData.get("fieldName");
```

Example:

```javascript
formData.get("username");
```

If there is no matching form-data entry:

```javascript
formData.get("unknown");
```

returns:

```javascript
null
```

---

## 9. `FormData.getAll()`

Use when multiple values can exist under the same name.

```javascript
formData.getAll("skills");
```

Example result:

```javascript
["javascript", "docker"]
```

---

## 10. `get()` vs `getAll()`

```text
get()
→ one value

getAll()
→ all values for that name
```

For a radio group:

```javascript
formData.get("gender");
```

is normally enough.

For multiple checkboxes:

```javascript
formData.getAll("skills");
```

is needed.

---

## 11. Unchecked Checkboxes

Unchecked checkboxes are not included in `FormData`.

Therefore:

```javascript
const skills = formData.getAll("skills");

if (skills.length === 0) {
    // no skill selected
}
```

can validate that at least one skill was selected.

---

## 12. Disabled Controls

Disabled controls are excluded from normal form data.

```html
<input name="username" value="Mayur">

<input
    name="email"
    value="test@gmail.com"
    disabled
>
```

The disabled email field is not included in:

```javascript
new FormData(form);
```

Remember:

```text
enabled → included
disabled → excluded
```

---

## 13. `FormData` → JavaScript Object

```javascript
const formData = new FormData(form);

const userObject = {
    name: formData.get("name"),
    email: formData.get("email"),
    role: formData.get("role"),
    skills: formData.getAll("skills")
};
```

Example:

```javascript
{
    name: "Mayur",
    email: "mayur@gmail.com",
    role: "backend",
    skills: ["javascript", "docker"]
}
```

---

## 14. Normalize Values

For text:

```javascript
const name = formData.get("name")?.trim() || "";
const email = formData.get("email")?.trim() || "";
```

`trim()` removes leading/trailing whitespace.

`?.` prevents an error if `get()` returns `null`.

---

## 15. Validation with an Error Object

```javascript
const errors = {};

if (!name) {
    errors.name = "Name is required";
}

if (!email) {
    errors.email = "Email is required";
}

if (!role) {
    errors.role = "Role must be selected";
}

if (skills.length === 0) {
    errors.skills = "At least one skill is required";
}
```

Check whether errors exist:

```javascript
if (Object.keys(errors).length > 0) {
    // show errors
    return;
}
```

---

## 16. `Object.keys(errors).length`

```javascript
const errors = {
    name: "Name is required",
    email: "Email is required"
};
```

```javascript
Object.keys(errors);
```

returns:

```javascript
["name", "email"]
```

Therefore:

```javascript
Object.keys(errors).length
```

returns:

```text
2
```

For:

```javascript
const errors = {};
```

the length is:

```text
0
```

---

## 17. Displaying Errors

HTML:

```html
<div id="errors"></div>
```

JavaScript:

```javascript
const errorDiv = document.querySelector("#errors");

for (const [key, message] of Object.entries(errors)) {
    const p = document.createElement("p");

    p.textContent = message;
    p.classList.add("error");

    errorDiv.append(p);
}
```

`Object.entries()` provides key/value pairs.

---

## 18. Clear Previous Errors

At the beginning of submission:

```javascript
errorDiv.innerHTML = "";
```

This prevents old errors from remaining after another submission.

---

## 19. Stop After Validation Errors

Correct:

```javascript
if (Object.keys(errors).length > 0) {
    showErrors();
    return;
}

submitData();
```

The `return` prevents invalid data from reaching successful-submission logic.

---

## 20. Email Validation

A simple email pattern:

```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

Test it:

```javascript
emailRegex.test(email);
```

Result:

```text
match → true
no match → false
```

Do not blindly memorize complex regex patterns. Regex will be covered separately.

---

## 21. `form.reset()`

Restores form controls to their initial/default state.

```javascript
form.reset();
```

It does not remove the form from the DOM.

After successful submission:

```javascript
console.log(userObject);
form.reset();
```

---

## 22. `input` vs `change`

### `input`

Useful when reacting while a value is being changed.

```javascript
search.addEventListener("input", (event) => {
    console.log(event.target.value);
});
```

Useful for search boxes.

### `change`

Useful when a control's value has changed/been committed.

Common examples:

```text
<select>
checkbox
radio
```

Example:

```javascript
city.addEventListener("change", (event) => {
    console.log(event.target.value);
});
```

Mental model:

```text
input
→ value changing during interaction

change
→ value has changed
```

---

# 23. Complete Advanced Form Pattern

```javascript
const form = document.querySelector("#userForm");
const errorDiv = document.querySelector("#errors");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    errorDiv.innerHTML = "";

    const formData = new FormData(form);

    const name = formData.get("name")?.trim() || "";
    const email = formData.get("email")?.trim() || "";
    const role = formData.get("role");
    const skills = formData.getAll("skills");

    const errors = {};

    if (!name) {
        errors.name = "Please enter name";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        errors.email = "Please enter email";
    } else if (!emailRegex.test(email)) {
        errors.email = "Please enter a valid email";
    }

    if (!role) {
        errors.role = "Role must be selected";
    }

    if (skills.length === 0) {
        errors.skills = "At least one skill should be selected";
    }

    if (Object.keys(errors).length > 0) {
        for (const [key, message] of Object.entries(errors)) {
            const p = document.createElement("p");

            p.textContent = message;
            p.classList.add("error");

            errorDiv.append(p);
        }

        return;
    }

    const userObject = {
        name,
        email,
        role,
        skills
    };

    console.log(userObject);

    form.reset();
});
```

---

# 24. Common Mistakes

### `querySelector()` for multiple checkboxes

```javascript
document.querySelector(
    'input[type="checkbox"][name="skills"]'
);
```

returns only the first matching element.

Use:

```javascript
document.querySelectorAll(
    'input[type="checkbox"][name="skills"]'
);
```

---

### `NodeList.map()`

`querySelectorAll()` returns a `NodeList`.

Use:

```javascript
forEach()
```

or:

```javascript
for...of
```

directly.

---

### Forgetting `return`

```javascript
if (Object.keys(errors).length > 0) {
    showErrors();
    return;
}
```

---

### Overwriting required-email error

Prefer:

```javascript
if (!email) {
    errors.email = "Email is required";
} else if (!emailRegex.test(email)) {
    errors.email = "Invalid email";
}
```

---

### Incorrect class assignment

Wrong:

```javascript
p.class = "error";
```

Use:

```javascript
p.className = "error";
```

or:

```javascript
p.classList.add("error");
```

---

# 25. Assessment Mental Model

When a question says:

> "On submit, collect user details, validate them, display errors, and process valid data."

Translate it into:

```text
submit
  ↓
preventDefault()
  ↓
new FormData(form)
  ↓
get() / getAll()
  ↓
normalize
  ↓
validate
  ↓
errors?
 ┌──────────────┴──────────────┐
YES                            NO
 ↓                              ↓
render errors              create object
 ↓                              ↓
return                         process
                                ↓
                           form.reset()
```

---

# 26. Quick Revision Table

| Requirement | Tool / Property |
|---|---|
| Read text input | `.value` |
| Check radio | `.checked` |
| Check checkbox | `.checked` |
| Read select | `.value` |
| Collect form | `new FormData(form)` |
| One form value | `formData.get()` |
| Multiple same-name values | `formData.getAll()` |
| Remove whitespace | `.trim()` |
| Validate regex | `regex.test()` |
| Count errors | `Object.keys(errors).length` |
| Loop error pairs | `Object.entries()` |
| Reset form | `form.reset()` |
| React while typing | `input` |
| React to selection change | `change` |

---

# 27. Final Revision Checklist

You should be able to explain:

1. Why `FormData` uses the `name` attribute.
2. Difference between `.value` and `.checked`.
3. Why `getAll()` is used for multiple checkboxes.
4. Why `get()` is normally enough for a radio group.
5. What happens to unchecked checkboxes.
6. What happens to disabled controls.
7. What `form.reset()` does.
8. Difference between `input` and `change`.
9. Why an error object is useful.
10. Why `return` is used after validation errors.
11. What `Object.entries()` provides.
12. Why previous errors should be cleared.
13. Why `formData.get("name").trim()` can throw when the field is missing.
14. Why blindly copying regex is risky.
15. The complete form-processing flow.

---

## Status

```text
Form controls                  ✅
Checkboxes                     ✅
Radio buttons                  ✅
FormData                       ✅
get() / getAll()               ✅
FormData → object              ✅
Normalization                  ✅
Validation                     ✅
Error object                   ✅
Error UI                       ✅
form.reset()                   ✅
input vs change                ✅
Disabled / unchecked controls  ✅
Integrated form problem        ✅
```
