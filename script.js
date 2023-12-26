function evaluateExpression() {
    // Get the display element
    var displayElement = document.getElementById("display");

    // Get the value from the display
    var expression = displayElement.value;

    // Evaluate the expression using a try-catch block to handle errors
    try {
        // Use the Function constructor to safely evaluate the expression
        var result = new Function('return ' + expression)();
        
        // Set the result back to the display
        displayElement.value = result;
    } catch (error) {
        // Handle errors (e.g., division by zero, syntax errors)
        displayElement.value = 'Error';
    }
}


function turnToNegative(){
    var displayElement = document.getElementById("display");
    var expression = displayElement.value;
    displayElement.value = -expression;
}