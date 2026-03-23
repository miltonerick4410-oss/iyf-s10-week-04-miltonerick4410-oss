function calculate() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operator = document.getElementById("operator").value;
  let result;

  if (operator === "+") result = num1 + num2;
  else if (operator === "-") result = num1 - num2;
  else if (operator === "*") result = num1 * num2;
  else if (operator === "/") result = num1 / num2;

  document.getElementById("result").innerText = "Result: " + result;
}
}


const students = [
  { name: "John", score: 85 },
  { name: "Mary", score: 60 },
  { name: "Alex", score: 72 }
];

function showGrades() {
  let output = "";

  students.forEach(student => {
    let grade;

    if (student.score >= 80) grade = "A";
    else if (student.score >= 70) grade = "B";
    else if (student.score >= 60) grade = "C";
    else grade = "D";

    output += student.name + ": " + grade + "<br>";
  });

  document.getElementById("grades").innerHTML = output;
}
}