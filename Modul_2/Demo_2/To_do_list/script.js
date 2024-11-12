const input = document.getElementById("input");
const list = document.getElementById("list");

// Fungsi untuk menambahkan task baru
function addTask() {
  if (input.value === "") {
    alert("Input tidak boleh kosong");
  } else {
    const li = document.createElement("li");
   
    // Tambahkan tombol Edit dan Hapus (×)
    const spanEdit = document.createElement("button");
    spanEdit.innerHTML = "Edit";
    spanEdit.className = "editBtn";
    spanEdit.onclick = function () {
      editTask(li);
    };

    const spanRemove = document.createElement("span");
    spanRemove.innerHTML = "\u00d7";
    spanRemove.className = "removeBtn";

    li.appendChild(spanEdit);
    li.appendChild(spanRemove);
    list.appendChild(li);
  }
  input.value = "";
}

// Fungsi untuk mengedit task
function editTask(li) {
  const newValue = prompt("Edit task:", li.firstChild.nodeValue);
  if (newValue) {
    li.firstChild.nodeValue = newValue;
  }
}

// Fungsi untuk mengatur event listener di list
list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);
