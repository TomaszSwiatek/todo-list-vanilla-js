const ul = document.querySelector(".todos");
// const input = document.querySelector(".input-todo");
const form = document.querySelector(".form-todo");
// const AddTodoButton = document.querySelector(".add-todo");

form.addEventListener("submit", e => {
  e.preventDefault();
  const li = `<li>${form.todo.value}</li>`;

  if (form.todo.value !== "") {
    ul.innerHTML += li;
    form.todo.value = "";
  } else {
    alert("put some value");
  }
});

// grab all saved todos and add remove event on this

//this approahc wont be good becouse, when we add new todos, thay have not added eventlistener by this forEach method. We have to add event listener to ul tag which always exist, like below.
// const todos = document.querySelectorAll("li");
// console.log(todos);
// todos.forEach(todo => {
//   todo.addEventListener("click", e => {
//     console.log(e.target);
//     e.target.remove();
//   });
// });

//and we have one event instead a whole list of events what improve performance.
// this is named event delegation ( event bubbling u suprotnom smjeru)
ul.addEventListener("click", e => {
  // see that e.target always navigate and recognize which element we clicked:
  console.log(e.target);
  if (e.target.tagName === "LI") {
    //on clicked element we remove it, but only when it is li tag.
    e.target.remove();
  }
});
//https://www.udemy.com/modern-javascript-from-novice-to-ninja/learn/lecture/14174917#overview     //55 par, 7 minit +/-
