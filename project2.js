//to check how many vowel letter are in a string

let string = prompt("Enter a letter")

const check_vowel = (value) => {
    if(value == 'a'){
        return value
    }
    else if(value == 'e'){
        return value
    }
    else if(value == 'i'){
        return value
    }
    else if(value == 'o'){
        return value
    }
    else if(value == 'u'){
        return value
    }
    else{
        return false
    }
}

array =  Array.from(string)
vowel = array.filter((element) =>{
    return (check_vowel(element))
})

console.log(vowel)
alert("The no of vowels in the given sentence is " + vowel.length)