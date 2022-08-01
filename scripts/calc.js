function addition(num1, num2) {
    if (!num1 && !num2) {
        console.log("Missing both parameter")
    } else if (num1 == " " || num2 == " ") {
        console.log("Error: Paramter cannot be a string")
    } else {
        return num1 + num2;
    }
}

function subtraction(num1, num2) {
    return num1 - num2;
}


module.exports = addition;