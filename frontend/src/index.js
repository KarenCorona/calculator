const API_BASE_URL = 'http://localhost:8080';

async function performOperation(operation, symbol) {
    const num1Input = document.getElementById("num1").value;
    const num2Input = document.getElementById("num2").value;
    
    // Clear previous messages
    document.getElementById("operator").innerText = symbol;
    document.getElementById("result").innerText = "Calculating...";
    
    try {
        const response = await fetch(`${API_BASE_URL}/api/calculator/${operation}?a=${num1Input}&b=${num2Input}`);
        
        if (!response.ok) {
            const errorData = await response.text();
            throw new Error(errorData);
        }
        
        const result = await response.json();
        document.getElementById("result").innerText = `Result: ${result}`;
    } catch (error) {
        console.error('API Error:', error);
        // Display clean error message to user
        const errorMessage = error.message.startsWith("Error:") ? 
            error.message : `Error: ${error.message}`;
        document.getElementById("result").innerText = errorMessage;
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

// Add event listeners for better error handling
document.addEventListener('DOMContentLoaded', () => {
    // Add any initialization code if needed
});