var p1_score = 0;
var p2_score = 0;
var computer = false;
var p1_symbol = 'X';
var p2_symbol = 'O';
var current_player = 'X';
var human_player = 'X';
var computer_player = 'O';
var cross = false;
var easy = true;
var tie = 0;
var initboard;
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const boxes = document.querySelectorAll('.box')

ChoosePlayer = (player) =>{
    if(!player){
        computer = true;
        document.getElementById("choose-opponent").style.display = 'none';
        document.getElementById("choose-starting-player-computer").style.display =  'block';
    }else{
        computer = false;
        document.getElementById("choose-opponent").style.display = 'none';
        document.getElementById("choose-starting-player").style.display = 'block';
    }
}

ChooseStartingPlayer = (player1) =>{
    if(!computer){
        if(!player1){
            p1_symbol = 'O';
            p2_symbol = 'X';
        }else{
            p1_symbol = 'X';
            p2_symbol = 'O';
        }
        document.getElementById("choose-starting-player").style.display = 'none';
        document.getElementById("start-button").style.display = 'block';
    }
    else{
        p1_symbol = 'X';  // assuming computer
        p2_symbol = 'O';
        if(!player1){
            current_player = 'X';
        }
        else{
            current_player = 'O';
        }
        document.getElementById("choose-starting-player-computer").style.display = 'none';
        document.getElementById("choose-symbol").style.display = 'block';
    }
}

ChooseSymbol = (symbol) =>{
    if(current_player == 'X'){ 
        if(!symbol){
            p1_symbol = 'X';
            p2_symbol = 'O';
        }   
        else{
            p1_symbol = 'O';
            p2_symbol = 'X';
        }
        human_player = p2_symbol;
        computer = p1_symbol;
    }
    else{
        if(!symbol){
            p1_symbol = 'O';
            p2_symbol = 'X';
        }
        human_player = p1_symbol;
        computer_player = p2_symbol;
    }
    current_player = p1_symbol;
    document.getElementById("choose-symbol").style.display = 'none';
    document.getElementById("choose-level").style.display = 'block';
}

ChooseLevel = (level) =>{
    if(!level){
        easy = false;
    }   
    else{   
        easy = true;
    }
    document.getElementById("choose-level").style.display = 'none';
    document.getElementById("start-button").style.display = 'block';
}

StartGame = () =>{
    document.getElementById("start-button").style.display = 'none';
    document.getElementById("welcome").style.display = 'none';
    document.getElementsByClassName("start-menu")[0].style.display = 'none';
    document.getElementsByClassName("start-playing")[0].style.display = 'block';
    Play();
}

ChangeScoreBoard = () =>{
    if(computer){
        document.getElementById("player1").innerText = 'Player';
        document.getElementById("player2").innerText = 'Computer';
    }
    else{
        document.getElementById("player1").innerText = 'Player 1';
        document.getElementById("player2").innerText = 'Player 2';
    }
}

// Driver Code
Play = () => {
    initboard = Array.from(Array(9).keys());
    ChangeScoreBoard();
    current_player = p1_symbol;
    
}

