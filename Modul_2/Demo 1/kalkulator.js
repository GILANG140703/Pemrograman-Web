function append(value) {
  let result = document.getElementById("result");

  if (value === "×") {
    result.value += "×"; // Tampilkan simbol × di layar
  } else if (value === "^") {
    result.value += "^"; // Simpan ^ untuk pangkat
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

    // Ganti simbol × dengan * untuk kalkulasi
    result = result.replace(/×/g, "*"); // Ganti semua × dengan *

    // Mengganti simbol pangkat (^) dengan Math.pow
    result = result.replace(/(\d+)\^(\d+)/g, "Math.pow($1, $2)"); // Ubah a^b menjadi Math.pow(a, b)

    let finalResult = eval(result); // Hitung hasil menggunakan eval

    // Tampilkan hasil dengan mengganti kembali * menjadi ×
    document.getElementById("result").value = finalResult
      .toString()
      .replace(/\*/g, "×"); // Ganti * dengan ×
  } catch (error) {
    document.getElementById("result").value = "Error"; // Tampilkan error jika ada kesalahan
  }
}
