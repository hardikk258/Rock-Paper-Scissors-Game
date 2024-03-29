const choices = document.querySelectorAll(".choice")
const msg = document.getElementById("msg");
const displayuser = document.getElementById("user-score");
const displaycomp = document.getElementById("comp-score");
let userscore = 0;
let compscore = 0;


const getcompchoice =()=>{
    const optn = ["rock", "paper", "scissors"];
    let ind = Math.floor(Math.random()*3);
    return optn[ind];
};

const gamedraw = () =>{
    msg.innerText = "Game was Draw !";
    msg.style.backgroundColor = "#081b31";
};

const showwinner = (userwin, userchoice, compchoice)=>{
    if( userwin ){
        userscore++;
        displayuser.innerText = userscore;
        msg.innerText = `You win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";

    }
    else{
        compscore++;
        displaycomp.innerText = compscore;
        msg.innerText = `You lost! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userchoice) => {
    const compchoice = getcompchoice();
    if( userchoice === compchoice ){
        gamedraw();
    }
    else{
        let userwin = true;
        if( userchoice === "rock" ){
            userwin = compchoice === "paper" ? false: true;
        }
        if( userchoice === "paper" ){
            userwin = compchoice === "scissors" ? false: true;
        }
        else {
            userwin = compchoice === "rock" ? false: true;
        }
        showwinner( userwin, userchoice, compchoice );
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    })
})
