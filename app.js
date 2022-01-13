//Selectors
const todoInput = document.querySelector(".goal-input");
const valueInput = document.querySelector(".value-input");
const todoButton = document.querySelector(".goal-button");
const todoList = document.querySelector(".todo-list");

const rewardInput = document.querySelector(".reward-input");
const costInput = document.querySelector(".cost-input");
const rewardButton = document.querySelector(".reward-button");
const rewardList = document.querySelector(".reward-list");

const coinCount = document.querySelector(".coin-counter");
const speed = 100;
//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
rewardList.addEventListener('click', deleteCheck);
rewardButton.addEventListener('click', addReward);
//Functions
function addTodo(event){
  //Prevent form from submitting
  event.preventDefault();

  if (todoInput.value == "" || valueInput.value == ""){
    console.log("Empty field - goals");
    return;
  }
  //Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Creat LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //Value
  const todoVal = document.createElement('p');
  if (parseInt(valueInput.value) <= 0){
    console.log("goal val must be > 0");
    valueInput.value = '';
    return;
  }
  todoVal.innerText = valueInput.value;
    todoVal.classList.add("todo-val");
  todoDiv.appendChild(todoVal);
  //Check mark BUTTON
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class = "fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //Trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //Append to list
  todoList.appendChild(todoDiv);
  todoInput.value = '';
  valueInput.value = '';
}

function addReward(event){
  //Prevent form from submitting
  event.preventDefault();

  if (rewardInput.value == "" || costInput.value == ""){
    console.log("Empty field - rewards");
    return;
  }
  //Todo DIV
  const rewardDiv = document.createElement("div");
  rewardDiv.classList.add("reward");
  //Creat LI
  const newReward = document.createElement("li");
  newReward.innerText = rewardInput.value;
  newReward.classList.add("reward-item");
  rewardDiv.appendChild(newReward);
  //Value
  const rewardVal = document.createElement('p');
  if (parseInt(costInput.value) <= 0){
    console.log("reward cost must be > 0");
    costInput.value = '';
    return;
  }
  rewardVal.innerText = costInput.value;
  rewardVal.classList.add("reward-val");
  rewardDiv.appendChild(rewardVal);
  //Check mark BUTTON
  const purchaseButton = document.createElement("button");
  purchaseButton.innerHTML = "<i class='fas fa-cart-plus'></i>"
  purchaseButton.classList.add("purchase-btn");
  rewardDiv.appendChild(purchaseButton);
  //Trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  rewardDiv.appendChild(trashButton);
  //Append to list
  rewardList.appendChild(rewardDiv);
  rewardInput.value = '';
  costInput.value = '';
}

function deleteCheck(event){
  const item = event.target;
  //DELETE TODO
  if (item.classList[0] === "trash-btn"){
    const todo = item.parentElement;
    todo.remove();
  }
  //COMPLETE TODO
  if (item.classList[0] === "complete-btn"){
    const todo = item.parentElement;
    //todo.toggle("completed");
    console.log(todo.children[1].innerHTML);
    const currVal =  parseInt(document.getElementById("coin-counter").innerHTML);
    const addVal = parseInt(todo.children[1].innerHTML);
    const newVal = currVal + addVal;

    document.getElementById("coin-counter").innerHTML = newVal;
  }
    if (item.classList[0] === "purchase-btn"){
      const reward = item.parentElement;
      const currVal =  parseInt(document.getElementById("coin-counter").innerHTML);
      const addVal = parseInt(reward.children[1].innerHTML);
      const newVal = currVal - addVal;
      if (newVal < 0)
      {
        console.log("Cannot go negative");
        return;
      }
      document.getElementById("coin-counter").innerHTML = newVal;
    }
}
