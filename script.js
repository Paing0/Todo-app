//count the tasks
function count() {
  document.querySelector(".badge").textContent =
    document.querySelectorAll("#tasks li").length;
}
//create item when input is clicked
document.querySelector("button").onclick = () => {
  let text = document.querySelector("input").value;
  if (text == "") return false;

  createItem(text);
  count();

  document.querySelector("input").value = "";
  document.querySelector("input").focus();
};

// Hitting enter == hitting button
document.querySelector("input").onkeydown = (e) => {
  if (e.key == "Enter") {
    document.querySelector("button").onclick();
  }
};

function createItem(text) {
  // create li and add text
  let li = document.createElement("li");
  li.classList.add("list-group-item");
  li.textContent = text;

  // check the task, add check icon
  let check = document.createElement("a");
  check.classList.add("fa-solid", "fa-check", "float-start", "me-2");
  check.setAttribute("href", "#");
  // on check clicked, #done will be added, remove check, count goes up by 1
  check.onclick = () => {
    document.querySelector("#done").appendChild(li);
    check.remove();
    count();
  };
  li.appendChild(check);

  // add del icon and remove li
  let del = document.createElement("a");
  del.classList.add("fa-solid", "fa-trash", "text-danger", "float-end");
  del.setAttribute("href", "#");
  del.onclick = () => {
    li.remove();
    count();
  };
  li.appendChild(del);

  document.querySelector("#tasks").appendChild(li);
}
