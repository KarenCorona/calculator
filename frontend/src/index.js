function calculate(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value; //Probable error for ' instead of ""

    let result;
    result = Number(num1) + Number(num2);

    document.getElementById("result").innerText = "Result: " + result;
}

function subtract(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    let result;
    result = Number(num1) - Number(num2);

    document.getElementById("operator").innerText = "-"; // Actualizar el operador
    document.getElementById("result").innerText = "Result: " + result;
}

function multiply() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    fetch(`http://localhost:8080/api/calculator/multiply?a=${num1}&b=${num2}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("operator").innerText = "*";
            document.getElementById("result").innerText = "Result: " + data;
        })
        .catch(error => console.error('Error:', error));
}

function divide() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    fetch(`http://localhost:8080/api/calculator/divide?a=${num1}&b=${num2}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("operator").innerText = "/";
            document.getElementById("result").innerText = "Result: " + data;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById("result").innerText = "Error: " + error.message;
        });
}

function resetFields(){

    document.getElementById('num1').value = " ";
    document.getElementById('num2').value = " ";
    document.getElementById('operator').value = " ";
    document.getElementById('result').innerText = " ";
}