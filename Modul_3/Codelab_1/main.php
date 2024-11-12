<?php
function segitigaSamaSisi($n) {
    for ($i = 1; $i <= $n; $i++) {
        // Cetak spasi
        for ($j = $i; $j < $n; $j++) {
            echo "&nbsp;&nbsp;";
        }
        // Cetak bintang
        for ($k = 1; $k <= (2 * $i - 1); $k++) {
            echo "*";
        }
        // Pindah ke baris berikutnya
        echo "<br>";
    }
}

segitigaSamaSisi(5);  // Ubah angka 5 sesuai jumlah baris yang diinginkan
?>
