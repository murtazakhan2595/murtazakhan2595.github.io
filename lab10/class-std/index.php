<?php
// Define the Student class
class Student {
    // Properties (attributes)
    public $rollNo;
    public $name;
    public $branch;
    public $year;

    // Constructor to initialize properties
    public function __construct($rollNo, $name, $branch, $year) {
        $this->rollNo = $rollNo;
        $this->name = $name;
        $this->branch = $branch;
        $this->year = $year;
    }

    // Method to print student details
    public function printDetails() {
        echo "Roll No: " . $this->rollNo . "<br>";
        echo "Name: " . $this->name . "<br>";
        echo "Branch: " . $this->branch . "<br>";
        echo "Year: " . $this->year . "<br><br>";
    }
}

// Create instances of the Student class
$student1 = new Student(1, "John Doe", "Computer Science", "Third Year");
$student2 = new Student(2, "Jane Smith", "Electrical Engineering", "Second Year");
$student3 = new Student(3, "Alice Johnson", "Mechanical Engineering", "Final Year");

// Print the details of each student
echo "<h2>Student Details</h2>";
echo "<h3>Student 1</h3>";
$student1->printDetails();
echo "<h3>Student 2</h3>";
$student2->printDetails();
echo "<h3>Student 3</h3>";
$student3->printDetails();
?>
