// ===== Calculator =====
function calculate(operator) {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let result;

  if (operator === "+") result = num1 + num2;
  else if (operator === "-") result = num1 - num2;
  else if (operator === "*") result = num1 * num2;
  else if (operator === "/") result = num1 / num2;

  document.getElementById("result").innerText = "Result: " + result;
}


// ===== Grade Tracker =====
function addStudent() {
  let name = document.getElementById("studentName").value;
  let marks = Number(document.getElementById("marks").value);

  let grade;

  if (marks >= 80) grade = "A";
  else if (marks >= 70) grade = "B";
  else if (marks >= 60) grade = "C";
  else if (marks >= 50) grade = "D";
  else grade = "F";

  let list = document.getElementById("studentList");

  let li = document.createElement("li");
  li.innerText = name + " - " + marks + " (" + grade + ")";

  list.appendChild(li);
}