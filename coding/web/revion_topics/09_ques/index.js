const employees = [
  { id: 1, name: "Rahul", department: "IT", salary: 60000 },
  { id: 2, name: "Aman", department: "HR", salary: 45000 },
  { id: 3, name: "Priya", department: "IT", salary: 75000 },
  { id: 4, name: "Neha", department: "Finance", salary: 55000 },
  { id: 5, name: "Rohit", department: "IT", salary: 90000 },
];

const employeeList = document.querySelector("#employeeList");
const employeeSearch = document.querySelector("#employeeSearch");
const departmentFilter = document.querySelector("#departmentFilter");
const salarySort = document.querySelector("#salarySort");

function renderEmployees(empList) {
  const noEmpMsgDiv = document.querySelector("#noEmpMsg");
  if (noEmpMsgDiv) noEmpMsgDiv.remove();

  employeeList.textContent = "";

  if (empList.length === 0) {
    const div = document.createElement("div");
    div.textContent = "No Employee found";
    div.id = "noEmpMsg";

    employeeList.append(div);
  }

  empList.forEach((emp) => {
    const div = document.createElement("div");
    const nameP = document.createElement("p");
    const departmentP = document.createElement("p");
    const salaryP = document.createElement("p");

    div.dataset.id = emp.id;
    nameP.textContent = emp.name;
    departmentP.textContent = emp.department;
    salaryP.textContent = emp.salary;

    div.append(nameP, departmentP, salaryP);
    employeeList.append(div);
  });
}

function searchAndSort() {
  const searchedValue = employeeSearch.value.trim().toLowerCase();
  const departmentSelected = departmentFilter.value;
  const salarySelected = salarySort.value;

  const searchEmpByNameAndDepart = employees.filter((emp) => {
    const isMatched = emp.name.toLowerCase().includes(searchedValue);
    const isSelectedDepartment =
      departmentSelected === "all" || departmentSelected === emp.department;

    return isMatched && isSelectedDepartment;
  });

  //
  if (salarySelected === "low") {
    searchEmpByNameAndDepart.sort((a, b) => a.salary - b.salary);

    return renderEmployees(searchEmpByNameAndDepart);
  } else if (salarySelected === "high") {
    searchEmpByNameAndDepart.sort((a, b) => b.salary - a.salary);
    return renderEmployees(searchEmpByNameAndDepart);
  }

  return renderEmployees(searchEmpByNameAndDepart);
}

employeeSearch.addEventListener("input", searchAndSort);
departmentFilter.addEventListener("change", searchAndSort);
salarySort.addEventListener("change", searchAndSort);

const highestSalaryBtn = document.createElement("button");
highestSalaryBtn.id = "highestSalary";
highestSalaryBtn.textContent = "Show Highest Salary";
salarySort.after(highestSalaryBtn);

highestSalaryBtn.addEventListener("click",()=>{
    if (employees.length === 0) {
      renderEmployees([]);
      return;
    }

  const hgihestPaid = employees.reduce((max,emp)=> {
    return emp.salary > max.salary ? emp : max;
  },employees[0])
  renderEmployees([hgihestPaid]);
})
renderEmployees(employees);
