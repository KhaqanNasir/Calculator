let buttons = document.querySelectorAll(".btn");
let display = document.querySelector(".answer");
let currentInput = "";
let operator = "";
let firstOperand = null;

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let val = button.innerText;

        if (!isNaN(val)) {
            // If the button pressed is a number
            currentInput += val;
            display.textContent = currentInput;
        } else if (val === "AC") {
            currentInput = "";
            operator = "";
            firstOperand = null;
            display.textContent = "0";
        } else if (val === "=") {
            if (firstOperand !== null && currentInput !== "" && operator !== "") {
                let secondOperand = parseFloat(currentInput);
                switch (operator) {
                    case "+":
                        display.textContent = firstOperand + secondOperand;
                        break;
                    case "-":
                        display.textContent = firstOperand - secondOperand;
                        break;
                    case "*":
                        display.textContent = firstOperand * secondOperand;
                        break;
                    case "/":
                        display.textContent = firstOperand / secondOperand;
                        break;
                    case "%":
                        display.textContent = firstOperand % secondOperand;
                        break; 
                    case "+/-":
                        display.textContent = firstOperand * (-1);
                        break;   
                }
                firstOperand = null;
                currentInput = "";
                operator = "";
            }
        } else {
            if (currentInput !== "") {
                firstOperand = parseFloat(currentInput);
                currentInput = "";
                operator = val;
                display.textContent = "0";
            }
        }
    });
});
