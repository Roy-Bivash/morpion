let lesCases = document.querySelectorAll(".bloc");
let pPlayer = document.getElementById("player");
let marquage = ["", "", "", "", "", "", "", "", ""];
let tour = "X";
let possibiliteWin = [];

//Le jeux commence par le joueur 1 :
pPlayer.innerHTML = "Tour : Joueur 1";


let combinaisonVictoire = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function caseClick(nb){
    
    if(lesCases[nb].innerHTML == ""){
        if(tour=="X"){
            marquage[nb] = "X";
        }else{
            marquage[nb] = "O";
        }
        updateTour();
        updateGame();
        verifWin();
    }
}

function updateGame(){
    for(let i=0; i < marquage.length; i++){
        if(marquage[i] == "X"){
            lesCases[i].innerHTML = `<img src="x.png" id="img">`;
        }
        if(marquage[i] == "O"){
            lesCases[i].innerHTML = `<img src="o.png" id="img">`;
        }
    }
}

function updateTour(){
    if(tour=="X"){
        tour = "O";
        pPlayer.innerHTML = "Tour : Joueur 2";
    }else{
        tour = "X";
        pPlayer.innerHTML = "Tour : Joueur 1";
    }
}

function verifWin(){
    let listX = findAllPosition(marquage, "X");
    let listO = findAllPosition(marquage, "O");
    
    for(let i = 0; i < combinaisonVictoire.length; i++){
        let repX = verifExist(combinaisonVictoire[i], listX);
        let repO = verifExist(combinaisonVictoire[i], listO);
        if(repX[0]){
            colorisationCases(repX[1]);
            // alert("Player 1 won !!!");
        }
        if(repO[0]){
            colorisationCases(repX[1]);
            // alert("Player 2 won !!!");
        }
    }
}

function findAllPosition(liste, element){
    let res = [];
    for(let i = 0; i < liste.length; i++){
        if(liste[i] == element){
            res.push(i);
        }
    }
    return res;
}


function verifExist(lstComVic, lstJoueur){
    let verif = 3;
    let winList = [];
    for(let i=0; i < lstJoueur.length; i++){
        for(let j = 0; j < lstComVic.length; j++){

            if(lstJoueur[i] == lstComVic[j]){
                winList.push(lstJoueur[i]);
                verif = verif - 1;
            }
        }
    }

    return [(verif == 0), winList]; //Return true si :
}


function colorisationCases(cases){
    for(let i = 0; i < cases.length; i++){
        lesCases[cases[i]].style.backgroundColor = "#ABEBC6";
    }
}