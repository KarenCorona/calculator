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

function resetFields(){

    document.getElementById('num1').value = " ";
    document.getElementById('num2').value = " ";
    document.getElementById('operator').value = " ";
    document.getElementById('result').innerText = " ";
}