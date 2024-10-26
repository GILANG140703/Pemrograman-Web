<?php
namespace GymSystem;

class Trainer {
    protected $name;
    protected $age;
    protected $specialty;

    public function __construct($name, $age, $specialty) {
        $this->name = $name;
        $this->age = $age;
        $this->specialty = $specialty;
    }

    public function getName() {
        return $this->name;
    }

    public function getAge() {
        return $this->age;
    }

    public function getSpecialty() {
        return $this->specialty;
    }

    public function getRole() {
        return "Pelatih";
    }
}

