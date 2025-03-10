function calculate(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    fetch(`http://localhost:8080/api/calculator/add?a=${num1}&b=${num2}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("operator").innerText = "+";
            document.getElementById("result").innerText = "Result: " + data;
        })
        .catch(error => console.error('Error:', error));
}

function subtract(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    fetch(`http://localhost:8080/api/calculator/subtract?a=${num1}&b=${num2}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("operator").innerText = "-";
            document.getElementById("result").innerText = "Result: " + data;
        })
        .catch(error => console.error('Error:', error));
}

function resetFields(){

    document.getElementById('num1').value = " ";
    document.getElementById('num2').value = " ";
    document.getElementById('operator').value = " ";
    document.getElementById('result').innerText = " ";
}