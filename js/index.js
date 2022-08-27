

const myElection= document.getElementById("myElection");
const pcElection= document.getElementById("pcElection");

const bStone= document.getElementById("bStone");
const bPaper= document.getElementById("bPaper");
const bScissors= document.getElementById("bScissors");

const countdown= document.querySelector("#countdown");
const h1Countdown= document.querySelector("#countdown h1");

const pointsPlayer= document.getElementById("pointsPlayer");
const pointsPC= document.getElementById("pointsPC");


bStone.addEventListener("click", start);
bPaper.addEventListener("click", start);
bScissors.addEventListener("click", start);

let array= new Array();

array.push("stone");
array.push("paper");
array.push("scissors");

function start(e){
    e.preventDefault();

    countdown.style.zIndex="-1";
    h1Countdown.innerHTML="";

    pcElection.style.visibility="hidden";
    myElection.style.visibility="hidden";

    let buttons= document.getElementById("divButtons").getElementsByTagName("button");

    for(btn of buttons)
        btn.disabled=true;


    let idElection= this.id;
    let iam="";
    iam= idElection.substring(1).toLowerCase();

    let computer= array[Math.floor(Math.random() * (3 - 0) + 0)];

    myElection.setAttribute("src", "./img/"+iam+"Player.png");
    myElection.setAttribute("value", iam);
    pcElection.setAttribute("src", "./img/"+computer+"PC.png");
    pcElection.setAttribute("value", computer);

    let sw=3;
    h1Countdown.innerHTML=sw;
    countdown.style.zIndex="1";

    let cuentaAtras= setInterval(() => {
        sw--;
        h1Countdown.innerHTML=sw;        
    }, 1000);

    setTimeout(()=>{
        clearInterval(cuentaAtras);
        h1Countdown.innerHTML="";
        pcElection.style.visibility="initial";
        myElection.style.visibility="initial";

        for(btn of buttons)
            btn.disabled=false;
        
    h1Countdown.innerHTML="";
    iam= myElection.attributes.value.value;
    computer= pcElection.attributes.value.value;
    let puntos=0;
    
    switch(iam){
        case "stone":
                if(computer=="stone")
                    h1Countdown.innerHTML="Empate";
                else if(computer=="paper"){
                    h1Countdown.innerHTML="Gana el PC";
                    puntos= parseInt(pointsPC.textContent);
                    puntos++;
                    pointsPC.innerHTML=puntos;
                }
                else if(computer=="scissors"){
                    h1Countdown.innerHTML="Gana el Jugador";
                    puntos= parseInt(pointsPlayer.textContent);
                    puntos++;
                    pointsPlayer.innerHTML=puntos;
                }
                break;
        case "paper":
                    if(computer=="stone"){
                        h1Countdown.innerHTML="Gana el Jugador";
                        puntos= parseInt(pointsPlayer.textContent);
                        puntos++;
                        pointsPlayer.innerHTML=puntos;
                    }
                    else if(computer=="paper")
                        h1Countdown.innerHTML="Empate";
                    else if(computer=="scissors"){
                        h1Countdown.innerHTML="Gana el PC";
                        puntos= parseInt(pointsPC.textContent);
                        puntos++;
                        pointsPC.innerHTML=puntos;
                    }
                    break;        
        case "scissors":
                    if(computer=="stone"){
                        h1Countdown.innerHTML="Gana el PC";
                        puntos= parseInt(pointsPC.textContent);
                        puntos++;
                        pointsPC.innerHTML=puntos;
                    }
                    else if(computer=="paper"){
                        h1Countdown.innerHTML="Gana el Jugador";
                        puntos= parseInt(pointsPlayer.textContent);
                        puntos++;
                        pointsPlayer.innerHTML=puntos;
                    }
                    else if(computer=="scissors")
                        h1Countdown.innerHTML="Empate";
                    break;
            }


        
    }, 3000);

    
    
}


