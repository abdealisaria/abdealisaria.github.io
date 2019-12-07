let userscore = 0;
let compscore = 0;
const resdiv = document.getElementById("pls");
const userscorespan = document.getElementById("userscore");
const compscorespan = document.getElementById("compscore");
const scoreboardiv = document.getElementsByClassName("scoreboard");
const resultdiv = document.querySelector(".result");
const rockdiv = document.getElementById("r");
const paperdiv = document.getElementById("p");
const scissorsdiv = document.getElementById("s");



function win(user,comp){
userscore++;
userscorespan.innerHTML = userscore;
resdiv.innerHTML= "Result : "+ user + "  beats "  +comp + ".  You Win !";

}
function lose(user,comp){
compscore++;
compscorespan.innerHTML=compscore;
resdiv.innerHTML= "Result : " +comp + "  beats "  +user + ".  You Lose !";
}
function draw(){
resdiv.innerHTML="Result : Draw !";
}

function getcompchoice(){
    const choices = ["Rock","Paper","Scissors"];
    const randonnumber=(Math.floor(Math.random()*3));
    return choices[randonnumber];
}

function game(userchoice){
const compchoice= getcompchoice();
switch(userchoice+compchoice)
{
case "RockScissors":
case "PaperRock":
case "ScissorsPaper":
    win(userchoice,compchoice);
    break;
case "RockPaper":
case "PaperScissors":
case "ScissorsRock":
    lose(userchoice,compchoice);
    break;
case "RockRock":
case "PaperPaper":
case "ScissorsScissors":
    draw();   
break;
}
}
function main()
{
rockdiv.addEventListener('click',function(){
game("Rock"); 
    
})
paperdiv.addEventListener('click',function(){
    game("Paper");
})
scissorsdiv.addEventListener('click',function(){
    game("Scissors");
})
}

main();