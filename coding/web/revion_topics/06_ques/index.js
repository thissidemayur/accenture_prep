const employeeForm = document.querySelector("#employeeForm");
const employeeList = document.querySelector("#employeeList");
const searchInput = document.querySelector("#searchInput");
const departmentFilter = document.querySelector("#departmentFilter");
const sortFilter = document.querySelector("#sortFilter");
const error = document.querySelector("#error");
const status = document.querySelector("#status");
const loadBtn = document.querySelector("#loadBtn");

// Memory
const storedEmployee = localStorage.getItem("employees")
let employees = storedEmployee
  ? JSON.parse(storedEmployee)
  : [];

// form submission
function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(employeeForm);

  // name
  const name = formData.get("name").trim();
  const email = formData.get("email").trim().toLowerCase();
  const department = formData.get("department");
  const salary = formData.get("salary").trim();

  const errors = {};

  if (!name) {
    errors.name = "name cannot be empty";
  }

  if (!email || !email.includes("@")) {
    errors.email = "email cannot be empty";
  }

  if (!department) {
    errors.department = "department must be selected";
  }

  if (!salary || salary <= 0) {
    errors.salary = "salary must be greater than 0";
  }

  // errors length
  if (Object.keys(errors).length > 0) {
    let errMsg = "";
    Object.values(errors).forEach((value) => {
      errMsg = errMsg + value + " ";
    });
    error.textContent = errMsg;
    error.style.color = "red";
    return;
  }

  error.innerHTML = "";

  const user = {
    id: Date.now().toString(36) + (Math.random() * 100000).toString(36),
    name,
    email,
    salary,
    department,
  };

  employees.push(user);
  localStorage.setItem("employees", JSON.stringify(employees));
  employeeForm.reset();
  renderEmployees(employees);
}

// dynamic render employee
function renderEmployees(employeeArray = []) {
  if (employeeArray.length === 0) {
     const p = document.createElement("p");
     p.textContent = "No employees found";
     employeeList.append(p);
    return;
  }

  employeeList.replaceChildren();

  employeeArray.forEach((employee) => {
    const li = document.createElement("li");
    li.textContent = `${employee.name} \n${employee.email} \n${employee.department} \n${employee.salary}`;
    li.dataset.id = employee.id;
    li.className = "emp";

    const dlteBtn = document.createElement("button");
    dlteBtn.textContent = "Delete";
    dlteBtn.className = "dlteBtn";

    employeeList.append(li);
    li.appendChild(dlteBtn);
  });
}

// delete employee
function deleteEmployee(event) {
  const dlteBtn = event.target.closest(".dlteBtn");

  if (!dlteBtn) {
    return;
  }

  const empId = event.target.closest(".emp").dataset.id;
  console.log("empId: ", empId);
  if (!empId) {
    return;
  }

  employees = employees.filter((emp) => emp.id !== empId);
  localStorage.setItem("employees", JSON.stringify(employees));

  renderEmployees(employees);
}

//sort and filter
function sortAndFilterEmployee(event) {
  const searchValue = searchInput.value?.trim().toLowerCase();
  const selectedDepartment = departmentFilter.value;
  const filteredSelectd = sortFilter.value;

  const filteredEmps = employees.filter((emp) => {
    const searchEmpName = emp.name.includes(searchValue);
    const department =
      selectedDepartment === "all" || selectedDepartment === emp.department;

    return searchEmpName && department;
  });

  if (filteredEmps.length === 0) {
    employeeList.innerHTML = "<p> No Employees Found</p>";
    return;
  }

  if (filteredSelectd === "salaryLow") {
    filteredEmps.sort((a, b) => a.salary - b.salary);
  } else if (filteredSelectd === "salaryHigh") {
    filteredEmps.sort((a, b) => b.salary - a.salary);
  } else if (filteredSelectd === "nameAZ") {
    filteredEmps.sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
    );
  }
  renderEmployees(filteredEmps);
}

async function fetchUser() {
  status.textContent = "Loading...";
  loadBtn.disabled = true;

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
      status.textContent = "Failed to load employees";
      throw new Error("Employee not fetched");
    }
    const data = await res.json();
    if(data.length === 0 ) {
      const p = document.createElement("p")
      p.textContent = "No employees available";
      employeeList.appendChild(p)
      return
    }
    const emps = data.map((emp) => ({
      id: emp.id,
      name: emp.name,
      email: emp.email,
      department: "Engineering",
      salary: Math.round(50000 + Math.random() * 100000),
    }));
  

    status.textContent = "Employees loaded successfully";
    setTimeout(() => {
      status.textContent = "";
    }, 3000);
    localStorage.setItem("employees", JSON.stringify(emps));
    renderEmployees(emps);
  } catch (error) {
    error.textContent = "Failed to load employees";
    console.log(error);
  } finally {
    // status.textContent = "";
    loadBtn.disabled = false;
  }
}

employeeList.addEventListener("click", deleteEmployee);
employeeForm.addEventListener("submit", handleFormSubmit);
searchInput.addEventListener("input", sortAndFilterEmployee);
departmentFilter.addEventListener("change", sortAndFilterEmployee);
sortFilter.addEventListener("change", sortAndFilterEmployee);
loadBtn.addEventListener("click", fetchUser);

renderEmployees(employees);
