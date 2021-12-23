const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");


function deleteToDo(event){
    const li = event.target.parentElement ;
    li.remove();
}



function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText= "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newToDo;
    toDoList.appendChild(li);
}


function handleToDoSubmit(){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    //console.log(toDoInput.value, newToDo);
    paintToDo(newToDo);
}


toDoForm.addEventListener("submit", handleToDoSubmit);