// Remove import statement
// import { Student } from "./Student";

// Define Student class
class Student {
    public FullName: string;
    public Grade: number;

    public constructor(FullName: string, Grade: number) {
        this.FullName = FullName;
        this.Grade = Grade;
    }
}

// Initialize studentList
const studentList: Student[] = [];

// Assign event listener to button
let btn = document.querySelector('#btn')?.addEventListener('click',(e) =>
{
    e.preventDefault();
    createStudent();
})

// Function to create a new student
function createStudent() {
    const fullNameInput = (document.getElementById("fullName") as HTMLInputElement).value;
    const gradeInput = parseInt((document.getElementById("grade") as HTMLInputElement).value);

    if (fullNameInput && !isNaN(gradeInput)) {
        const newStudent = new Student(fullNameInput, gradeInput);
        studentList.push(newStudent);
        displayStudents();
        (document.getElementById("fullName") as HTMLInputElement).value = "";
        (document.getElementById("grade") as HTMLInputElement).value = "";
    } else {
        alert("Please enter valid values for Full Name and Grade.");
    }
}

// Function to display students
function displayStudents() {
    const studentListDiv = document.getElementById("studentList")!;
    studentListDiv.innerHTML = "";

    studentList.forEach((student, index) => {
        const studentDiv = document.createElement("div");
        studentDiv.innerHTML = `
            <span>Name: ${student.FullName}, Grade: ${student.Grade}</span>
            <button onclick="editStudent(${index})">Edit</button>
            <button onclick="deleteStudent(${index})">Delete</button>
        `;
        studentListDiv.appendChild(studentDiv);
    });
}

// Function to edit a student
function editStudent(index: number) {
    const student = studentList[index];
    const newName = prompt("Enter new name:", student.FullName);
    const newGrade = prompt("Enter new grade:", student.Grade.toString());

    if (newName !== null && newGrade !== null) {
        student.FullName = newName;
        student.Grade = parseInt(newGrade);
        displayStudents();
    }
}

// Function to delete a student
function deleteStudent(index: number) {
    studentList.splice(index, 1);
    displayStudents();
}

// Initial display of students
displayStudents();
