//STEP 1
function halfNumber(num) {
    "use strict";

    if (isNaN(num)) {
        const errorMessage = "Please enter valid number";
        window.console.log(errorMessage);
        throw new Error(errorMessage);
    } else {
        var result = num / 2;
        window.console.log("Half of " + String(num) + " is " + String(result) + ".");
        return result;
    }
}

halfNumber(5);


//STEP 2
function squareNumber(num) {
    "use strict";

    if (isNaN(num)) {
        const errorMessage = "Please enter valid number";
        window.console.log(errorMessage);
        throw new Error(errorMessage);
    } else {
        var result = num * num;
        window.console.log("The result of squaring the number " + String(num) + " is " + String(result) + ".");
        return result;
    }
}

squareNumber(3);

//STEP 3
function percentOf(num1, num2) {
    "use strict";

    if (isNaN(num1) && isNaN(num2)) {
        const errorMessage = "Please enter valid number";
        window.console.log(errorMessage);
        throw new Error(errorMessage);
    } else {
        var result = Math.round(num1 / num2 * 100);
        window.console.log(String(num1) + " is " + String(result) + "% of " + String(num2) + ".");
        return result;
    }
}

percentOf(2, 4);

//STEP 4
function findModulus(num1, num2) {
    "use strict";

    if (isNaN(num1) && isNaN(num2)) {
        const errorMessage = "Please enter valid number";
        window.console.log(errorMessage);
        throw new Error(errorMessage);
    } else {
        var result = num2 % num1;
        window.console.log(String(result) + " is the modulus of " + String(num1) + " and " + String(num2) + ".");
        return result;
    }
}

findModulus(4, 10);

//STEP 5
function sumNumbers() {
    "use strict";
    var sum = 0;
    var numberCollection = window.prompt("Enter numbers delimited by commas");
    numberCollection = numberCollection.split(",");
    for (var i=0; i < numberCollection.length; i++) {
        sum += parseInt(numberCollection[i]);
    }
    window.console.log("Sum of the numbers in "+numberCollection + " is: " +String(sum));
    return sum;
}

sumNumbers();