<?php
namespace GymSystem\Controllers;

use GymSystem\Membership;
use GymSystem\Trainer;

class GymController {
    private $members = [];
    private $trainers = [];

    public function addMember($name, $age, $membershipType) {
        $member = new Membership($name, $age, $membershipType);
        $this->members[] = $member;
        return $member;
    }

    public function addTrainer($name, $age, $specialty) {
        $trainer = new Trainer($name, $age, $specialty);
        $this->trainers[] = $trainer;
        return $trainer;
    }

    public function getMembers() {
        return $this->members;
    }

    public function getTrainers() {
        return $this->trainers;
    }
}
