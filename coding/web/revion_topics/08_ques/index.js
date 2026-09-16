const localeStudents = localStorage.getItem("students") ? JSON.parse(localStorage.getItem("students")) : null
let studentsList = localeStudents ?? [];

const studentForm = document.querySelector("#studentForm");
const studentTable = document.querySelector("#studentTable");
const studentTableBody = document.querySelector("#studentTableBody");
const searchStudent = document.querySelector("#searchStudent");


function addStudentsToLocaleStorage(studentList) {
  localStorage.setItem("students", JSON.stringify(studentList));
}

function reteriveStudentsToLocaleStorage() {
  return JSON.parse(localStorage.getItem("students"));
}

function renderStudentTable(studentList) {
  if (studentList.length === 0) {
    return;
  }

  studentTableBody.innerHTML=""
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
    console.log("TR: ",tr)
    if (!id) return;
    id = Number(id);
    studentsList = studentsList.filter((student) => student.id !== id);
    renderStudentTable(studentsList);
    addStudentsToLocaleStorage(studentsList);
    console.log("Id delted successfully: ",id);
    return;
  }
  if (editBtn) {
    const tr = event.target.closest("tr");
    let id = tr.dataset.id;
    if (!id) return;
    id = Number(id);
    const student = studentsList.find((student) => student.id === id);
    const name = prompt("Enter name: ");
    const age = Number(prompt("Enter Age"));
    if (!name && !age) {
      alert("to update user you need to either either name or age");
      return
    }
    if(name) student.name = name
    if(age) student.age = age;
    console.log("Student: ", student);
    studentsList[student.id] = student;
    renderStudentTable(studentsList);
    addStudentsToLocaleStorage(studentsList);
    console.log("User information add successfully ");
  }
});

searchStudent.addEventListener("input",(event)=>{
  const searchVal = searchStudent?.value.trim().toLowerCase()
  const searchStudents = studentsList.filter((student) =>
    student.name.toLowerCase().includes(searchVal),
  );
  console.log("searchStudents: ", searchStudents);
  if(searchStudent.length === 0 ){
    const div = document.createElement("div")
    div.textContent = "No students found";
    studentTable.before(div);
      renderStudentTable([]);

    return;
  }

  renderStudentTable(searchStudents);

})

renderStudentTable(studentsList);

