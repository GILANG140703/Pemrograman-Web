function append(value) {
  let result = document.getElementById("result");
  if (value === "^") {
    result.value += "**";
  } else {
    result.value += value;
  }
}

function clearAll() {
  document.getElementById("result").value = "";
}

function deleteLast() {
  let result = document.getElementById("result");
  result.value = result.value.slice(0, -1);
}

function calculate() {
  try {
    let result = document.getElementById("result").value;
    let finalResult = eval(result);
    document.getElementById("result").value = finalResult;
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}
