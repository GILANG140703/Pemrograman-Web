<?php
require_once 'classes/User.php';
require_once 'classes/Membership.php';
require_once 'classes/Trainer.php';
require_once 'traits/GymTrait.php';
require_once 'controllers/GymController.php';

use GymSystem\Controllers\GymController;

// Membuat instansi dari GymController
$gymController = new GymController();

$gymController->addMember("Gilang", 21, "Gold");

$gymController->addTrainer("Alan Smith", 35, "Angkat Beban");

echo str_repeat("=", 50) . PHP_EOL;
echo "               DAFTAR ANGGOTA                " . PHP_EOL;
echo str_repeat("=", 50) . PHP_EOL;

foreach ($gymController->getMembers() as $member) {
    echo "Nama: " . $member->getName() . ", ";
    echo "Usia: " . $member->getAge() . ", ";
    echo "Tipe Membership: " . $member->getMembershipType() . ", ";
    echo "Role: " . $member->getRole() . PHP_EOL;
    echo str_repeat("-", 8) . PHP_EOL;  // Garis pemisah setelah setiap anggota
}

echo str_repeat("=", 50) . PHP_EOL;
echo "               DAFTAR PELATIH                " . PHP_EOL;
echo str_repeat("=", 50) . PHP_EOL;

foreach ($gymController->getTrainers() as $trainer) {
    echo "Nama: " . $trainer->getName() . ", ";
    echo "Usia: " . $trainer->getAge() . ", ";
    echo "Keahlian: " . $trainer->getSpecialty() . ", ";
    echo "Role: " . $trainer->getRole() . PHP_EOL;
    echo str_repeat("-", 8) . PHP_EOL;
}
