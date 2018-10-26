let fields = document.querySelector('#game').children;
let template = document.querySelector('#template');
let winnerX = template.content.querySelector('#winner-x').cloneNode(true);
let winnerO = template.content.querySelector('#winner-y').cloneNode(true);
let x = template.content.querySelector('#x');
let o = template.content.querySelector('#o');
let containerForGame = document.querySelector('#container-for-game');
let foreground = template.content.querySelector('#foreground').cloneNode(true);

let Player1 = {
  name: 'Player 1',
  currentSymbol: 'x',
  winCount: document.querySelector('#score-player_1')
};

let Player2 = {
  name:'Player 2',
  currentSymbol: 'o',
  winCount: document.querySelector('#score-player_2')
};

let currentWinner = '';
let currentWinSymbol = '';
let count = 1;
let draw = false;
let gameEnd = false;
let matr = [
  [,,],
  [,,],
  [,,]
];

for (let i = 0; i < fields.length; i++) {
  fields[i].addEventListener('click', FieldClick); 
}

foreground.addEventListener('click', Start);

document.addEventListener("DOMContentLoaded", PauseMenu);

function PauseMenu(){
  if(gameEnd == false){
    containerForGame.insertBefore(foreground,containerForGame.children[0]);
  }
  if(gameEnd == true) {
    gameEnd == false;
    foreground.children[0].textContent = currentWinner + ' WIN';
    currentWinner = '';
    containerForGame.insertBefore(foreground,containerForGame.children[0]);
  }
}

function StartNewGame() {
  CleanMatrix();
  CleanField();
  count = 1;
}
  
function Start() {
  foreground.remove();
  StartNewGame();
}

 function FieldClick() {
  if((count % 2) != 0) {
    this.appendChild(x.cloneNode(true));
    this.style.pointerEvents = 'none';
  } else {
    this.appendChild(o.cloneNode(true));
    this.style.pointerEvents = 'none';
  }
  AddToMatrix(this);
  DefineWinner();
  
 }

function WinnerIsX() {
  /* document.querySelector('#information').appendChild(winnerX); */
  currentWinSymbol = 'x';
  Player1.winCount.textContent = parseInt(Player1.winCount.textContent) + 1;
  currentWinner = Player1.name;
  gameEnd = true;
  PauseMenu();
}

function WinnerIsO() {
  currentWinSymbol = 'o';
  Player2.winCount.textContent = parseInt(Player2.winCount.textContent) + 1;
  currentWinner = Player2.name;
  gameEnd = true;
  PauseMenu();
}

function AddToMatrix(field) {
  if (field == fields[0]) {
    matr[0][0] = fields[0].children[0].textContent;
  }
  if (field == fields[1]) {
    matr[0][1] = fields[1].children[0].textContent;
  }
  if (field == fields[2]) {
    matr[0][2] = fields[2].children[0].textContent;
  }
  if (field == fields[3]) {
    matr[1][0] = fields[3].children[0].textContent;
  }
  if (field == fields[4]) {
    matr[1][1] = fields[4].children[0].textContent;
  }
  if (field == fields[5]) {
    matr[1][2] = fields[5].children[0].textContent;
  }
  if (field == fields[6]) {
    matr[2][0] = fields[6].children[0].textContent;
  }
  if (field == fields[7]) {
    matr[2][1] = fields[7].children[0].textContent;
  }
  if (field == fields[8]) {
    matr[2][2] = fields[8].children[0].textContent;
  }
}

function DefineWinner() {
  if(matr[0][0] != undefined && matr[0][0]== matr[0][1] && matr[0][0] == matr[0][2]) {
    if(matr[0][0] == 'x') {
    WinnerIsX();
  } else if(matr[0][0] == 'o')
    WinnerIsO();
  }
  if(matr[1][0] != undefined && matr[1][0]== matr[1][1] && matr[1][0] == matr[1][2]){
    if(matr[1][0] == 'x') {
      WinnerIsX()
    } else if(matr[1][0] == 'o')
      WinnerIsO()
  } 
  
  if(matr[2][0] != undefined && matr[2][0]== matr[2][1] && matr[2][0] == matr[2][2]){
    if(matr[2][0] == 'x') {
      WinnerIsX()
    } else if(matr[2][0] == 'o')
        WinnerIsO()
  }
  if(matr[0][0] != undefined && matr[0][0]== matr[1][0] && matr[0][0] == matr[2][0]){
    if(matr[0][0] == 'x') {
      WinnerIsX()
    } else if(matr[0][0] == 'o')
        WinnerIsO()
  }
  if(matr[0][1] != undefined && matr[0][1]== matr[1][1] && matr[0][1] == matr[2][1]){
    if(matr[0][1] == 'x') {
      WinnerIsX()
    } else if(matr[0][1] == 'o')
        WinnerIsO()
  }
  if(matr[0][2] != undefined && matr[0][2]== matr[1][2] && matr[0][2] == matr[2][2]){
    if(matr[0][2] == 'x') {
      WinnerIsX()
    } else if(matr[0][2] == 'o')
        WinnerIsO()
  }
  if(matr[0][0] != undefined && matr[0][0]== matr[1][1] && matr[0][0] == matr[2][2]){
    if(matr[0][0] == 'x') {
      WinnerIsX()
    } else if(matr[0][0] == 'o')
        WinnerIsO()
  }
  if(matr[0][2] != undefined && matr[0][2]== matr[1][1] && matr[0][2] == matr[2][0]){
    if(matr[0][2] == 'x') {
      WinnerIsX()
    } else if(matr[0][2] == 'o')
        WinnerIsO()
  }
  if (count == 9) {
    gameEnd = true;
    PauseMenu();
  }
  else {
    count++;
    return;
  } 
}

function CleanField(){
  for (let i = 0; i < fields.length; i++) {
    fields[i].style.pointerEvents = 'auto';
    if(fields[i].children.length > 0) {
      fields[i].removeChild(fields[i].children[0])
    }
  }
}

function CleanMatrix(){
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      matr[i][j] = undefined;      
    }   
  }
}