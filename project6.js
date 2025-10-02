//To find the factorial

let input = prompt("Enter a number")
input = parseInt(input)

const factorial = (num) =>{
    let fact = 1
    while(num != 0){
        fact = fact * num
        num --
    }
    return fact
}

let output = factorial(input)

alert("The factorial of " + input + " is " + output )