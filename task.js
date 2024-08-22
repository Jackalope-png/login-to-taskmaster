const divdiv = document.getElementsByTagName("div")[2];
const divdiv2 = document.getElementsByTagName("div")[3];
const rowdiv = document.createElement("div");
const inputing = document.createElement("input");
rowdiv.className = "rowww";
divdiv.appendChild(rowdiv);
inputing.className = "inputinput";
inputing.setAttribute("type", "text");
inputing.setAttribute("placeholder", "Enter task");
rowdiv.appendChild(inputing);
const click = document.createElement("input");
click.setAttribute("type", "button");
click.setAttribute("value", "Add");
click.className = "buttonbutton";
rowdiv.appendChild(click);
click.onclick = Adddivs;
function Adddivs() {
  const taskText = inputing.value;
  if (taskText === "") {
    alert("Please enter a task");
    return;
  }
  const taskDiv = document.createElement("div");
  taskDiv.className = "taskdiv";
  taskDiv.textContent = taskText;
  divdiv.appendChild(taskDiv);
  const donedone = document.createElement("img");
  donedone.src =
    "https://static.vecteezy.com/system/resources/previews/019/521/981/original/green-check-mark-icon-with-circle-checkmark-illustration-free-vector.jpg";
  donedone.className = "divimg";
  taskDiv.appendChild(donedone);
  donedone.onclick = COMPLETED;
  const taskdivimg = document.createElement("img");
  taskdivimg.src =
    "https://png.pngtree.com/png-vector/20190114/ourmid/pngtree-vector-trash-icon-png-image_313135.jpg";
  taskdivimg.className = "divimg";
  taskDiv.appendChild(taskdivimg);
  taskdivimg.onclick = destroydiv;
  const donedonesss = document.createElement("img");
  donedonesss.src =
    "https://www.pngitem.com/pimgs/m/402-4025970_transparent-edit-icon-png-icon-edit-svg-png.png";
  donedonesss.className = "divimg2";
  taskDiv.appendChild(donedonesss);
  const date = new Date();
  const dateandtime = document.createElement("div");
  const formatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedTime = formatter.format(date);
  dateandtime.textContent = formattedTime;
  taskDiv.appendChild(dateandtime);

  function destroydiv() {
    taskDiv.remove();
  }
  function COMPLETED() {
    taskDiv.remove();
    const taskDiv3 = document.createElement("div");
    taskDiv3.className = "taskdiv";
    taskDiv3.textContent = taskText;
    divdiv2.appendChild(taskDiv3);
    const taskdivimg3 = document.createElement("img");
    taskdivimg3.src =
      "https://png.pngtree.com/png-vector/20190114/ourmid/pngtree-vector-trash-icon-png-image_313135.jpg";
    taskdivimg3.className = "divimg";
    taskDiv3.appendChild(taskdivimg3);
    taskdivimg3.onclick = destroydiv;
    const date = new Date();
    const dateandtime = document.createElement("div");
    const formatter = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
    const formattedTime = formatter.format(date);
    dateandtime.textContent = formattedTime;
    dateandtime.className = "smaller";
    taskDiv3.appendChild(dateandtime);
    function destroydiv() {
      taskDiv3.remove();
    }
  }
  donedonesss.onclick = function () {
    dateandtime.textContent = "";
    makeEditable(taskDiv);
  };
  inputing.value = "";
}
function makeEditable(taskDiv) {
  const input = document.createElement("input");
  input.type = "text";
  input.value = taskDiv.textContent;
  input.onblur = function () {
    saveChanges(input.value, taskDiv);
  };
  input.onkeydown = function (event) {
    if (event.key === "Enter") {
      saveChanges(input.value, taskDiv);
    }
  };
  taskDiv.textContent = "";
  taskDiv.appendChild(input);
  input.focus();
  function saveChanges(newText, taskDiv) {
    if (newText.trim() === "") {
      taskDiv.remove();
      return;
    }
    taskDiv.textContent = newText;
    const donedone = document.createElement("img");
    donedone.src =
      "https://static.vecteezy.com/system/resources/previews/019/521/981/original/green-check-mark-icon-with-circle-checkmark-illustration-free-vector.jpg";
    donedone.className = "divimg";
    taskDiv.appendChild(donedone);
    donedone.onclick = COMPLETED;
    const taskdivimg = document.createElement("img");
    taskdivimg.src =
      "https://png.pngtree.com/png-vector/20190114/ourmid/pngtree-vector-trash-icon-png-image_313135.jpg";
    taskdivimg.className = "divimg";
    taskDiv.appendChild(taskdivimg);
    taskdivimg.onclick = destroydiv;
    const donedonesss = document.createElement("img");
    donedonesss.src =
      "https://www.pngitem.com/pimgs/m/402-4025970_transparent-edit-icon-png-icon-edit-svg-png.png";
    donedonesss.className = "divimg2";
    taskDiv.appendChild(donedonesss);
    donedonesss.onclick = function () {
      makeEditable(taskDiv);
    };
    function destroydiv() {
      taskDiv.remove();
    }
    function COMPLETED() {
      taskDiv.remove();
      const taskDiv3 = document.createElement("div");
      taskDiv3.className = "taskdiv";
      taskDiv3.textContent = taskDiv.textContent;
      divdiv2.appendChild(taskDiv3);
      const taskdivimg3 = document.createElement("img");
      taskdivimg3.src =
        "https://png.pngtree.com/png-vector/20190114/ourmid/pngtree-vector-trash-icon-png-image_313135.jpg";
      taskdivimg3.className = "divimg";
      taskDiv3.appendChild(taskdivimg3);
      taskdivimg3.onclick = destroydiv;
      const date = new Date();
      const dateandtime = document.createElement("div");
      const formatter = new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });
      const formattedTime = formatter.format(date);
      dateandtime.textContent = formattedTime;
      dateandtime.className = "smaller2";
      taskDiv3.appendChild(dateandtime);
      function destroydiv() {
        taskDiv3.remove();
      }
    }
  }
}
    const email = localStorage.getItem("email");
    const phonenum = localStorage.getItem("phonenum");
    const password = localStorage.getItem("password");
    document.getElementById("email").textContent = "Email: " + email;
    document.getElementById("phonenum").textContent = "Phone Number: " + phonenum;
    document.getElementById("password").textContent = "Password: " + password;