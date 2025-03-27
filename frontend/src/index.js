async function performOperation(operation, symbol) {
    const num1Input = document.getElementById("num1").value.trim();
    const num2Input = document.getElementById("num2").value.trim();
    
    // Input validation
    if (num1Input === "" || num2Input === "") {
        document.getElementById("result").innerText = "Error: Please enter both numbers";
        return;
    }

    document.getElementById("operator").innerText = symbol;
    document.getElementById("result").innerText = "Calculating...";
    
    try {
        const response = await fetch(`http://localhost:8080/api/calculator/${operation}?a=${num1Input}&b=${num2Input}`);
        
        if (!response.ok) {
            const errorData = await response.text();
            throw new Error(errorData);
        }
        
        const result = await response.json();
        document.getElementById("result").innerText = `Result: ${result}`;
    } catch (error) {
        console.error('Calculation error:', error);
        document.getElementById("result").innerText = `Error: ${error.message}`;
    }
}

function calculate() {
    performOperation("add", "+");
}

function subtract() {
    performOperation("subtract", "-");
}

function multiply() {
    performOperation("multiply", "*");
}

function divide() {
    performOperation("divide", "/");
}

function resetFields() {
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('operator').innerText = "+";
    document.getElementById('result').innerText = "Result:";
}