$(document).ready(function(){

var playerselection=""
var computerselection=""

$("#rockbutton").click(function(){
    playerselection="ROCK"
$("#player").text(playerselection)
    computerselect()
    wincheck()
})
$("#paperbutton").click(function(){
    playerselection="PAPER"
$("#player").text(playerselection)
    computerselect()
    wincheck()
})
$("#scissorsbutton").click(function(){
    playerselection="SCISSORS"
$("#player").text(playerselection)
    computerselect()
    wincheck()
})

function computerselect(){
    var randomnumber=null
    randomnumber=Math.floor(Math.random()*(4-1))+1
    if (randomnumber===1) {
        computerselection="ROCK"
    }
    if (randomnumber===2) {
        computerselection="PAPER"
    }
    if (randomnumber===3) {
        computerselection="SCISSORS"
    }
    $("#computer").text(computerselection)
}

    function wincheck(){
        if(playerselection==="ROCK" && computerselection==="PAPER"){
            $("#winner").text("Computer Wins")
        }
         if(playerselection==="ROCK" && computerselection==="SCISSORS"){
            $("#winner").text("Player Wins")
        }
         if(playerselection==="PAPER" && computerselection==="ROCK"){
            $("#winner").text("Player Wins")
        }
         if(playerselection==="PAPER" && computerselection==="SCISSORS"){
            $("#winner").text("Computer Wins")
        }
         if(playerselection==="SCISSORS" && computerselection==="PAPER"){
            $("#winner").text("Player Wins")
        }
         if(playerselection==="SCISSORS" && computerselection==="ROCK"){
            $("#winner").text("Computer Wins")
        }
         if(playerselection===computerselection){
            $("#winner").text("TIE")
        }


    }
})