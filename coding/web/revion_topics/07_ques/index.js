let students = [
  { id: 1, name: "Mayur", age: 22 },
  { id: 2, name: "Aman", age: 21 },
  { id: 3, name: "Rahul", age: 23 },
];

const studentLocalStorage = localStorage.getItem("students")
students = studentLocalStorage ? JSON.parse(studentLocalStorage) : students;


const studentTable = document.querySelector("#studentTable");
const tableBody = document.querySelector("#tableBody");
const tableSearchInput = document.querySelector("#searchInput");
const tableSortSelect = document.querySelector("#sortSelect");
const addStudentForm = document.querySelector("#addStudentForm");


function saveStudents() {
    localStorage.setItem("students", JSON.stringify(students));

}


function renderStudentTable(studentsList) {
  // tableBody.replaceChildren()
  tableBody.innerHTML = "";
 
   
  if (studentsList.length === 0) {
    const emptyRow = document.createElement("tr");
    const emptyCell = document.createElement("td");
    emptyCell.colSpan = 3;
    emptyCell.textContent = "No Data Present";
    emptyCell.style.textAlign = "center";
    emptyRow.appendChild(emptyCell);
    tableBody.appendChild(emptyRow);
    return;
  }


  studentsList.forEach((student) => {
    const studentRow = document.createElement("tr");
    const studentNameDataCol = document.createElement("td");
    const studentAgeDataCol = document.createElement("td");
    const actionCol = document.createElement("td");
    const deleteStudentRow = document.createElement("button");
    const editStudentRow = document.createElement("button");

    studentRow.dataset.id = student.id;
    studentNameDataCol.textContent = student.name;
    studentAgeDataCol.textContent = student.age;
    deleteStudentRow.textContent = "Delete";
    deleteStudentRow.className = "deleteBtn";
    editStudentRow.className = "editBtn";
    editStudentRow.textContent = "Edit";

    actionCol.append(deleteStudentRow, editStudentRow);

    studentRow.append(studentNameDataCol, studentAgeDataCol, actionCol);
    tableBody.appendChild(studentRow);
  });

}


studentTable.addEventListener("click", (event) => {
  const deleteBtn = event.target.closest(".deleteBtn");
  const editBtn = event.target.closest(".editBtn");
  const studentRow = event.target.closest("tr");

  if (!studentRow) return;

  const studentId = Number(studentRow.dataset.id);

  if (editBtn) {
    const editedStudent = students.find((student) => student.id === studentId);

    if (!editedStudent) return;

    const namePrompt = prompt("Edit Name:");
    const agePrompt = prompt("Edit Age:");

    if (!namePrompt && !agePrompt) {
      console.log("No changes made");
      return;
    }

    if (namePrompt) {
      editedStudent.name = namePrompt.trim();
    }

    if (agePrompt) {
      editedStudent.age = Number(agePrompt);
    }
saveStudents()
    renderStudentTable(students);
    return;
  }

  if (deleteBtn) {
    students = students.filter((student) => student.id !== studentId);
saveStudents();
    renderStudentTable(students);
  }
});

function applySearchAndSort() {
  const searchUserInput = tableSearchInput.value.trim().toLowerCase();

  const filteredStudentList = students.filter((student) =>  student.name
      .toLowerCase()
      .includes(searchUserInput));

  const selectedSort = tableSortSelect.value;

  if (selectedSort === "ageLow") {
     filteredStudentList.sort((a, b) => a.age - b.age);
  } else if (selectedSort === "ageHigh") {
    filteredStudentList.sort((a, b) => b.age - a.age);
  } else if (selectedSort === "nameAZ") {
    filteredStudentList.sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
    );
  }
  renderStudentTable(filteredStudentList);
}

tableSearchInput.addEventListener("input",applySearchAndSort);
tableSortSelect.addEventListener("change",applySearchAndSort)

addStudentForm.addEventListener("submit",(event)=>{
  event.preventDefault()

  const formData = new FormData(addStudentForm);
  const name= formData.get("name")?.trim().toLowerCase()
  let age = formData.get("age")

  if(!name || !age){
    alert("Name and Age field is mandotory")
    return
  }

  age=Number(age)
  students.push({name,age})
  saveStudents()
  addStudentForm.reset()
  console.log("DOne")
  renderStudentTable(students)

})


renderStudentTable(students);


