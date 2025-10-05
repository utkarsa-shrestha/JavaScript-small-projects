const game = () =>{
    let user1 = document.getElementById("user1")
    user1_value = user1.value 
    
    let user2 = document.getElementById("user2")
    user2_value = user2.value

    gamedata = {1:"Rock", 2:"Scissor", 3:"Paper"}

    if(gamedata[user1_value] == gamedata[user2_value]){
        alert("It is a draw!")
    }
    else if(gamedata[user1_value] == "Rock"&& gamedata[user2_value] == "Scissor"){
        alert("Player 1 wins")
    }
    else if(gamedata[user1_value] == "Paper" && gamedata[user2_value] == "Rock"){
        alert("Player 1 wins")
    }
    else if(gamedata[user1_value] == "Scissor" && gamedata[user2_value] == "Paper"){
        alert("Player 1 wins")
    }
    else{
        alert("Player 2 wins")
    }
}