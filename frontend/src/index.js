const API_BASE_URL = 'http://localhost:8080';

async function performOperation(operation, symbol) {
    const num1Input = document.getElementById("num1").value.trim();
    const num2Input = document.getElementById("num2").value.trim();
    
    // Clear previous result
    document.getElementById("result").innerText = "Calculating...";
    document.getElementById("operator").innerText = symbol;
    
    // Input validation
    if (num1Input === "" || num2Input === "") {
        document.getElementById("result").innerText = "Error: Please enter both numbers";
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/api/calculator/${operation}?a=${num1Input}&b=${num2Input}`);
        
        if (!response.ok) {
            const errorData = await response.text();
            throw new Error(errorData);
        }
        
        const result = await response.json();
        document.getElementById("result").innerText = `Result: ${result}`;
    } catch (error) {
        console.error('Calculation error:', error);
        // Extract clean error message from the response
        const errorMsg = error.message.startsWith("Error:") ? error.message : `Error: ${error.message}`;
        document.getElementById("result").innerText = errorMsg;
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