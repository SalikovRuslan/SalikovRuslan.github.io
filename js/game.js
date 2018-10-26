let fields = document.querySelector('#game').children;
let template = document.querySelector('#template');
let x = template.content.querySelector('#x');
let o = template.content.querySelector('#o');
let containerForGame = document.querySelector('#container-for-game');
let foreground = template.content.querySelector('#foreground').cloneNode(true);

let Player1 = {
  name: 'Player1',
  currentSymbol: 'x',
  winCount: document.querySelector('#score-player_1')
};

let Player2 = {
  name:'Player2',
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
foreground.addEventListener('click', HideForeground);

function HideForeground(){
  HideElement(this);
}

function CheckStatus(){
  switch(gameEnd) {
    case true: 
      gameEnd == false;
      foreground.children[0].textContent = currentWinner + ' WIN';
      containerForGame.insertBefore(foreground, containerForGame.children[0]);
      currentWinner = '';
      break;
    case false:
      foreground.children[0].textContent = 'No winner';
      containerForGame.insertBefore(foreground, containerForGame.children[0])
      break;
  }
}

PauseMenu();

function PauseMenu(){
  switch(gameEnd) {
    case true: 
      gameEnd == false;
      foreground.children[0].textContent = currentWinner + ' WINS';
      ShowForeground();
      currentWinner = '';
      break;
    case false:
      ShowForeground();
      break;
    case undefined:
      foreground.children[0].textContent = 'No winner';
      ShowForeground();
      gameEnd = false;
      break;
  }
}

function ShowForeground() {
  containerForGame.insertBefore(foreground, containerForGame.children[0]);
}

function HideElement(element) {
  element.children[0].textContent = '';
  element.remove();
  StartNewGame();
}

function StartNewGame() {
  CleanMatrix();
  CleanField();
  count = 1;
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

function ChangeWinnerLine(a, b, c) {
  fields[a].style.background = 'rgba(86, 91, 92, 0.616)';
  fields[a].children[0].style.color = 'white';
  fields[b].style.background = 'rgba(86, 91, 92, 0.616)';
  fields[b].children[0].style.color = 'white';
  fields[c].style.background = 'rgba(86, 91, 92, 0.616)';
  fields[c].children[0].style.color = 'white';
}

function DefineWinner() {
  if(matr[0][0] != undefined && matr[0][0]== matr[0][1] && matr[0][0] == matr[0][2]) {
    if(matr[0][0] == 'x') {
      WinnerIsX();
    } else if(matr[0][0] == 'o') {
      WinnerIsO();
    }
    ChangeWinnerLine(0, 1, 2);
    return; 
  }
  if(matr[1][0] != undefined && matr[1][0]== matr[1][1] && matr[1][0] == matr[1][2]){
    if(matr[1][0] == 'x') {
      WinnerIsX();
    } else if(matr[1][0] == 'o') {
      WinnerIsO();
    }
    ChangeWinnerLine(3, 4, 5);
    return; 
  } 
  if(matr[2][0] != undefined && matr[2][0]== matr[2][1] && matr[2][0] == matr[2][2]){
    if(matr[2][0] == 'x') {
      WinnerIsX();
    } else if(matr[2][0] == 'o') {
      WinnerIsO();
    }
    ChangeWinnerLine(6, 7, 8);
    return; 
  }
  if(matr[0][0] != undefined && matr[0][0]== matr[1][0] && matr[0][0] == matr[2][0]){
    if(matr[0][0] == 'x') {
      WinnerIsX();
    } else if(matr[0][0] == 'o') {
      WinnerIsO();
    }
    ChangeWinnerLine(0, 3, 6);
    return; 
  }
  if(matr[0][1] != undefined && matr[0][1]== matr[1][1] && matr[0][1] == matr[2][1]){
    if(matr[0][1] == 'x') {
      WinnerIsX();
    } else if(matr[0][1] == 'o') {
      WinnerIsO();
    }
    ChangeWinnerLine(1, 4, 7);
    return; 
  }
  if(matr[0][2] != undefined && matr[0][2]== matr[1][2] && matr[0][2] == matr[2][2]){
    if(matr[0][2] == 'x') {
      WinnerIsX();
    } else if(matr[0][2] == 'o') {
      WinnerIsO();
    }
    ChangeWinnerLine(2, 5, 8);
    return; 
  }
  if(matr[0][0] != undefined && matr[0][0]== matr[1][1] && matr[0][0] == matr[2][2]){
    if(matr[0][0] == 'x') {
      WinnerIsX();
    } else if(matr[0][0] == 'o') {
      WinnerIsO();
    }
    ChangeWinnerLine(0, 4, 8);
    return; 
  }
  if(matr[0][2] != undefined && matr[0][2]== matr[1][1] && matr[0][2] == matr[2][0]){
    if(matr[0][2] == 'x') {
      WinnerIsX();
    } else if(matr[0][2] == 'o') {
      WinnerIsO();
    }
    ChangeWinnerLine(2, 4, 6);
    return; 
  }
  else if(count == 9 && currentWinner == '') {
    gameEnd = undefined;
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
      fields[i].style.background = '';
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