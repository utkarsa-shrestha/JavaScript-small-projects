//To print  numbers from 1 - 50 and print fizz for multiples of 3 and buzz for multiples of 5 and fizzbuzz for multiple of 3 and 5

for(i=1;i<=50;i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("fizzbuzz")
    }
    else if(i % 5 == 0){
        console.log("buzz")
    }
    else if(i % 3 == 0){
        console.log("fizz")
    }
    else{
        console.log(i)
    }
}