const inputUser = document.querySelector("#user-input");
const resultDiv = document.querySelector("#results-div");
const checkButton = document.querySelector("#check-btn");
const clearButton = document.querySelector("#clear-btn");

function phoneNumberValidator () {
    let input = inputUser.value;

    const pTag = document.createElement("p");

    // Remove white space
    let inputClean = input.replace(/\s/g, "");
    let inputCleanLength = inputClean.length;

    // Validate Input
    const validateInputRegex = /^[0-9()-]+$/;
    let validateInputResult = validateInputRegex.test(inputClean);
    
    if (input === "") {
        alert("Please provide a phone number");
    } else {
        if (validateInputResult) {
            switch (inputCleanLength) {
                case 10:
                    pTag.textContent = `Valid US number: ${input}`;
                    break;
                case 11:
                    if (inputClean.charAt(0) === "1") {
                        pTag.textContent = `Valid US number: ${input}`;
                    } else {
                        pTag.textContent = `Invalid US number: ${input}`;
                    }
                    break;
                case 12:
                    if (inputClean.charAt(3) === "-" && inputClean.charAt(7) === "-") {
                        pTag.textContent = `Valid US number: ${input}`;
                    } else {
                        pTag.textContent = `Invalid US number: ${input}`;
                    }
                    break;
                case 13:
                    if ((inputClean.charAt(0) === "1" && inputClean.charAt(4) === "-" && inputClean.charAt(8) === "-") ||
                        (inputClean.charAt(0) === "(" && inputClean.charAt(4) === ")" && inputClean.charAt(8) === "-")) {
                        pTag.textContent = `Valid US number: ${input}`;
                    } else {
                        pTag.textContent = `Invalid US number: ${input}`;
                    }
                    break;
                case 14:
                    if (inputClean.charAt(0) === "1" && inputClean.charAt(1) === "(" && inputClean.charAt(5) === ")" && inputClean.charAt(9) === "-") {
                        pTag.textContent = `Valid US number: ${input}`;
                    } else {
                        pTag.textContent = `Invalid US number: ${input}`;
                    }
                    break;
                default:
                    pTag.textContent = `Invalid US number: ${input}`;
                    break;
            }
        } else {
            pTag.textContent = `Invalid US number: ${input}`;
        }
        resultDiv.appendChild(pTag);
        resultDiv.style.display = "block";
        inputUser.value = "";
    }
    
}

function clearResult() {
    resultDiv.innerHTML = "";
    resultDiv.style.display = "none";
}

checkButton.addEventListener('click', phoneNumberValidator);

inputUser.addEventListener('keypress', function(e) {
    if (e.key === "Enter") {
        checkButton.click();
    }
});

clearButton.addEventListener('click', clearResult);