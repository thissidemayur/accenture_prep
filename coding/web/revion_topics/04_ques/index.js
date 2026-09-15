const userForm = document.querySelector("#userForm");
const errorDisplay = document.querySelector("#error");
const parentUserDiv = document.querySelector("#users");

// Load existing users from localStorage
const storedUsers = localStorage.getItem("userList");

let userList = storedUsers ? JSON.parse(storedUsers) : [];

// Render users
function renderUser(userList) {
  parentUserDiv.innerHTML = "";

  if (userList.length === 0) {
    return;
  }

  userList.forEach((user) => {
    const userDiv = document.createElement("div");
    const nameP = document.createElement("p");
    const emailP = document.createElement("p");
    const roleP = document.createElement("p");
    const deleteUser = document.createElement("button");

    userDiv.className = "user";
    userDiv.dataset.id = user.id;

    nameP.textContent = user.name;
    emailP.textContent = user.email;
    roleP.textContent = user.role;

    deleteUser.textContent = "Delete";
    deleteUser.className = "deleteUser";

    const styles = [nameP, emailP, roleP];

    styles.forEach((element) => {
      element.style.display = "inline-block";
      element.style.width = "200px";
    });

    roleP.style.width = "150px";

    userDiv.append(nameP, emailP, roleP, deleteUser);

    parentUserDiv.append(userDiv);
  });
}

// Form submission
userForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(userForm);
  const validationError = {};

  const name = formData.get("name")?.trim() || "";
  const email = formData.get("email")?.trim().toLowerCase() || "";
  const role = formData.get("role") || "";

  // Validation
  if (!name) {
    validationError.name = "Name should not be empty";
  }

  if (!email) {
    validationError.email = "Email should not be empty";
  }

  if (!role) {
    validationError.role = "Role should not be empty";
  }

  // Show validation errors
  if (Object.keys(validationError).length > 0) {
    errorDisplay.textContent = Object.values(validationError).join(", ");

    errorDisplay.style.color = "red";

    return;
  }

  errorDisplay.textContent = "";

  // Create user
  const user = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2),

    name,
    email,
    role,
  };

  // Update state
  userList.push(user);

  // Persist state
  localStorage.setItem("userList", JSON.stringify(userList));

  // Reset form
  userForm.reset();

  // Update UI
  renderUser(userList);
});

// Event delegation for Delete
parentUserDiv.addEventListener("click", (event) => {
  const deleteButton = event.target.closest(".deleteUser");

  if (!deleteButton) {
    return;
  }

  const userDiv = event.target.closest(".user");

  if (!userDiv) {
    return;
  }

  const userId = userDiv.dataset.id;

  if (!userId) {
    return;
  }

  // Remove user from state
  userList = userList.filter((user) => user.id !== userId);

  // Persist updated state
  localStorage.setItem("userList", JSON.stringify(userList));

  // Update UI
  renderUser(userList);
});

// Initial rendering
renderUser(userList);
