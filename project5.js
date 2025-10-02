// To create a guessing game ranging from 1 to 10
function getRandomInteger(min, max) { //to generate a random number
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


random_number = getRandomInteger(1, 10)
console.log(random_number)

let user_input =  prompt("Enter a number ranging from 1 to 10")
user_input = parseInt(user_input)



while(user_input != random_number){
    alert("Incorrect")

    if(user_input=="break"){
        break;
    }
    user_input = prompt("Enter the number again")
    user_input = parseInt(user_input)
}
alert("Congratulations, you won")