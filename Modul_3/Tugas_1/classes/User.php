<?php
namespace GymSystem;

abstract class User {
    protected $name;
    protected $age;

    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }

    public function getDetails() {
        return "Nama: $this->name, Usia: $this->age";
    }

    // Abstract method untuk implementasi oleh kelas turunan
    abstract public function getRole();
}
