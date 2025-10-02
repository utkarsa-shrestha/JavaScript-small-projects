//To create a program to reverse a string 

let string = prompt("Enter a string")

const reverse = (str) => {
    let reverse_str = []
    for(i = 0; str.length - 1 >=i; str.length--){
        reverse_str.push(str[str.length -1])
    }
    return reverse_str
}

string = Array.from(string)

let reverse_array  = reverse(string)
let reverse_string = reverse_array.join("") //joined the array to return a string

console.log(reverse_string)