function validateEmail(email) {
  // Regular expression to validate email format
  var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
}

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;

  if (name === "" || email === "" || address === "") {
    alert("Semua data harus diisi.");
  } else if (!validateEmail(email)) {
    alert("Email tidak valid.");
  } else {
    alert("Pendaftaran berhasil!");
  }
}
