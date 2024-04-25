// Remove import statement
// import { Student } from "./Student";
var _a;
// Define Student class
var Student = /** @class */ (function () {
    function Student(FullName, Grade) {
        this.FullName = FullName;
        this.Grade = Grade;
    }
    return Student;
}());
// Initialize studentList
var studentList = [];
// Assign event listener to button
var btn = (_a = document.querySelector('#btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (e) {
    e.preventDefault();
    createStudent();
});
// Function to create a new student
function createStudent() {
    var fullNameInput = document.getElementById("fullName").value;
    var gradeInput = parseInt(document.getElementById("grade").value);
    if (fullNameInput && !isNaN(gradeInput)) {
        var newStudent = new Student(fullNameInput, gradeInput);
        studentList.push(newStudent);
        displayStudents();
        document.getElementById("fullName").value = "";
        document.getElementById("grade").value = "";
    }
    else {
        alert("Please enter valid values for Full Name and Grade.");
    }
}
// Function to display students
function displayStudents() {
    var studentListDiv = document.getElementById("studentList");
    studentListDiv.innerHTML = "";
    studentList.forEach(function (student, index) {
        var studentDiv = document.createElement("div");
        studentDiv.innerHTML = "\n            <span>Name: ".concat(student.FullName, ", Grade: ").concat(student.Grade, "</span>\n            <button onclick=\"editStudent(").concat(index, ")\">Edit</button>\n            <button onclick=\"deleteStudent(").concat(index, ")\">Delete</button>\n        ");
        studentListDiv.appendChild(studentDiv);
    });
}
// Function to edit a student
function editStudent(index) {
    var student = studentList[index];
    var newName = prompt("Enter new name:", student.FullName);
    var newGrade = prompt("Enter new grade:", student.Grade.toString());
    if (newName !== null && newGrade !== null) {
        student.FullName = newName;
        student.Grade = parseInt(newGrade);
        displayStudents();
    }
}
// Function to delete a student
function deleteStudent(index) {
    studentList.splice(index, 1);
    displayStudents();
}
// Initial display of students
displayStudents();
