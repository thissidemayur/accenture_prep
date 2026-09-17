const localeStudents = localStorage.getItem("students") ? JSON.parse(localStorage.getItem("students")) : null
let studentsList = localeStudents ?? [];

const studentForm = document.querySelector("#studentForm");
const studentTable = document.querySelector("#studentTable");
const studentTableBody = document.querySelector("#studentTableBody");
const searchStudent = document.querySelector("#searchStudent");
const selectedSort = document.querySelector("#selectedSort");


function addStudentsToLocaleStorage(studentList) {
  localStorage.setItem("students", JSON.stringify(studentList));
}

function reteriveStudentsToLocaleStorage() {
  return JSON.parse(localStorage.getItem("students"));
}

function renderStudentTable(studentList) {
    studentTableBody.innerHTML = "";
const oldMessage = document.querySelector("#emptyMessage");
oldMessage?.remove();
  if (studentList.length === 0) {
    const div = document.createElement("div");
    div.id = "emptyMessage";
    div.textContent = "Student not present";
    studentTableBody.before(div);
    
    return;
  }

  // studentTableBody.replaceChild()

  studentList.forEach((student) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const dlteBtn = document.createElement("button");
    const editBtn = document.createElement("button");

    dlteBtn.classList.add("dlteBtn");
    editBtn.classList.add("editBtn");
    tr.dataset.id = student.id;

    //
    td1.textContent = student.name;
    td2.textContent = student.age;
    dlteBtn.textContent = "Delete";
    editBtn.textContent = "Edit";

    //
    td3.append(dlteBtn, editBtn);
    tr.append(td1, td2, td3);
    studentTableBody.appendChild(tr);
  });
}

studentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(studentForm);

  const name = formData.get("studentName").trim();
  if (!name) {
    alert("student name should be present");
    return;
  }

  let age = formData.get("age");
  if (!age) {
    alert("student age should be there");
    return
  }
  age = Number(age);

  studentsList.push({ id: Date.now(), name, age });
  studentForm.reset();
  renderStudentTable(studentsList);
  addStudentsToLocaleStorage(studentsList);
});

studentTableBody.addEventListener("click", (event) => {
  const dlteBtn = event.target.closest(".dlteBtn");
  const editBtn = event.target.closest(".editBtn");

  if (dlteBtn) {
    const tr = event.target.closest("tr");
    let id = tr.dataset.id;
    if (!id) return;
    id = Number(id);
    studentsList = studentsList.filter((student) => student.id !== id);
    renderStudentTable(studentsList);
    addStudentsToLocaleStorage(studentsList);
    return;
  }
  if (editBtn) {
    const tr = event.target.closest("tr");
    let id = tr.dataset.id;
    if (!id) return;
    id = Number(id);
    const student = studentsList.find((student) => student.id === id);
    
    const nameInput = prompt("Enter name: ");
    const ageInput = Number(prompt("Enter Age"));
    if (!nameInput && !ageInput) {
      alert("No change made");
      return;
    }
    if (nameInput) student.name = nameInput.trim();
   
   
   
   if (ageInput) {
     const age = Number(ageInput);

     if (!Number.isFinite(age) || age <= 0) {
       alert("Invalid age");
       return;
     }

     student.age = age;
   }
   
   
   

    renderStudentTable(studentsList);
    addStudentsToLocaleStorage(studentsList);
    console.log("User information add successfully ");
  }
});

searchStudent.addEventListener("input", searchAndSort);
selectedSort.addEventListener("change", searchAndSort);

function searchAndSort() {
  const searchText =  searchStudent.value.trim().toLowerCase()
  const selected = selectedSort.value

  const filterStudents = studentsList.filter((student) =>
    student.name.toLowerCase().includes(searchText),
  );

  if (selected === "ageLow") {
    filterStudents.sort((a, b) => a.age - b.age);
  } else if (selected === "ageHigh") {
    filterStudents.sort((a, b) => b.age - a.age);
  } else if (selected === "nameAZ") {
    filterStudents.sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
    );
  }

  renderStudentTable(filterStudents);




  
}
renderStudentTable(studentsList);

