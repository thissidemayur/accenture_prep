let studentsList = [];

const studentForm = document.querySelector("#studentForm");
const studentTable = document.querySelector("#studentTable");
const studentTableBody = document.querySelector("#studentTableBody");


function renderStudentTable(studentList){
  if(studentList.length === 0) {
    console.log("No student Found")
    return
  }

  studentList.forEach((student)=>{
    const tr = document.createElement("tr")
    const td1 = document.createElement("td")
    const td2 = document.createElement("td");
    const td3= document.createElement("td");
    const dlteBtn = document.createElement("button")
    const editBtn = document.createElement("button");

    dlteBtn.classList.add("dlteBtn")
    editBtn.classList.add("editBtn")
    tr.dataset.id=student.id

    // 
    td1.textContent=student.name
    td2.textContent=student.age
    dlteBtn.textContent="Delete"
    editBtn.textContent="Edit"

    // 
    td3.append(dlteBtn,editBtn)
    tr.append(td1,td2,td3)
    studentTableBody.appendChild(tr)


  })

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
  }
  age = Number(age);

  studentsList.push({id:Date.now() ,name,age})
  studentForm.reset()
  renderStudentTable(studentsList)

});



renderStudentTable(studentsList);
