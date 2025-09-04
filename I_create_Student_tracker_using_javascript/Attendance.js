let totalStudents = Number(prompt("Enter the number of students: "));
let attendanceList = [];

for (let i = 0; i < totalStudents; i++) {
    let name = prompt(`Enter the name of student ${i + 1}: `);
    let status = prompt(`Is ${name} present? (yes/no) `);

    attendanceList.push({
        name: name,
        status: status.toLowerCase() === "yes" ? "Present" : "Absent"
    });
}

console.log("----- Attendance Report -----");
for (let student of attendanceList) {
    console.log(`${student.name}: ${student.status}`);
}
