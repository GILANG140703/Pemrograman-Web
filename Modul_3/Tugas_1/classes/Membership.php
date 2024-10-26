<?php
namespace GymSystem;

class Membership {
    protected $name;
    protected $age;
    protected $membershipType;

    public function __construct($name, $age, $membershipType) {
        $this->name = $name;
        $this->age = $age;
        $this->membershipType = $membershipType;
    }

    public function getName() {
        return $this->name;
    }

    public function getAge() {
        return $this->age;
    }

    public function getMembershipType() {
        return $this->membershipType;
    }

    public function getRole() {
        return "Anggota";
    }
}

