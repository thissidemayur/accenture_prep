const bodyElem = document.querySelector("body");

// create element
const formElem = document.createElement("form");
const inputElem = document.createElement("input");
const buttonElem = document.createElement("button");
const ulElem = document.createElement("ul");

// set attributes to element
formElem.setAttribute("id", "taskForm");
inputElem.setAttribute("id", "taskInput");
buttonElem.setAttribute("type", "submit");
ulElem.setAttribute("id", "taskList");

// set text
buttonElem.textContent = "Submit"

// create a whole HTML structure
bodyElem.append(formElem, ulElem);
formElem.append(inputElem, buttonElem);

const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");

const createLiElement = (taskText = "", ulElement) => {
  const liElem = document.createElement("li");
  liElem.textContent = taskText;

  liElem.classList.add("task");
  ulElement.append(liElem);

  const dlteBtnElm = document.createElement("button")
  dlteBtnElm.dataset.id="dlteBtn"
  dlteBtnElm.textContent = "Delete"
  liElem.appendChild(dlteBtnElm)

    dlteBtnElm.addEventListener("click",(event)=>{
          const btn = event.target
            const li = btn.parentElement
        li.remove()

    })

};
const onSubmit = (event) => {
  event.preventDefault();
  const input = taskInput.value.trim();
//   console.log("Hy")
  if (!input) {
    console.log("please write something in input");
    return;
  }
    createLiElement(input, ulElem);
  taskInput.value = "";
};

taskForm.addEventListener("submit",onSubmit)