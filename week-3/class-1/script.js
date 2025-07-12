let ctr = 1;

function addTodo() {
  const inputEl = document.querySelector("input");
  const todoContent = inputEl.value;

  const h4Element = document.createElement("h4");
  h4Element.innerHTML = todoContent;

  const buttonEl = document.createElement("button");
  buttonEl.innerHTML = "Delete";
  buttonEl.setAttribute("onClick", "deleteTodo(" + ctr + ")");
  //   buttonEl.addEventListener("click", (index) => {
  //     console.log(index);
  //   });

  const divEl = document.createElement("div");
  divEl.setAttribute("id", ctr);
  //   divEl.innerHTML =
  //     "<div>" +
  //     todoContent +
  //     '</div><button onClick="deleteTodo(' +
  //     ctr +
  //     ')">Delete</button>';
  divEl.appendChild(h4Element);
  divEl.appendChild(buttonEl);

  document.querySelector("body").appendChild(divEl);
  ctr = ctr + 1;
}

function deleteTodo(index) {
  console.log(index);
  const elementDelete = document.getElementById(index);
  elementDelete.parentNode.removeChild(elementDelete);
}

// setInterval(function () {
//   const countEl = document.querySelector("#counter");
//   console.log(countEl.innerHTML);
//   countEl.innerHTML = Number(countEl.innerHTML) + 1;
// }, 1000);
