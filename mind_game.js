const box = document.getElementsByClassName('box');
const game = document.getElementsByClassName('game');
const container = document.getElementsByClassName('container');
const btn = document.getElementById('btn');
const players = document.getElementsByClassName('h3')
let turn = 'O';
//to click in the boxes
for (let i=0;i<box.length;i++) {
box[i].addEventListener('click', () => {
   let text = box[i].innerHTML;
   console.log(text);
   box[i].innerHTML = turn;
   console.log(turn);
   if(turn === 'O') {
       turn = 'X'
    }
    else {
        turn = 'O'
    } 
})
}
//swap the player
swap();
function swap () {
    turn != turn
}
//reset button
for (let i=0;i<box.length;i++) {
    btn.addEventListener('click', () => {
       box[i].innerHTML = "";
    })
}



