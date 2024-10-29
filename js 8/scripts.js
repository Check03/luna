const game = document.getElementById('game');
const item = document.querySelectorAll ('.item')
const pin = [document.getElementById('p1Score'), document.getElementById('p2Score')]
const button = document.getElementById(`clear`);
const button2 = document.getElementById(`restart`);
const player = document.getElementById('player')

const players = ['X', '0'];
const Winners = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];

let schetchick = true;
let data = ['','','','','','','','','']; 

function checkWinner(){
    for(let i = 0; i < win.length; i++){
        let che=true;
        for(let j = 0; j < win[i].length; j++){
            if(data[win[i][j]-1]!=players[hod?0:1]){
                che=false;
                break;
            }
        }
        if(che){
            return che; 
        }
        }
        if (che){
            console.log('vvvvvviiiinnnnnnnnn')
            player.innerText = players[schetchick ? 0 : 1]
            if(schetchick = true){
                pin[0].innerText = +1;
            }
            else{
                pin[1].innerText = +1; 
            }
            return che;
        }
 }


game.addEventListener('click', function(event){
    if(event.target.classList[0] == 'item' && event.target.innerText == '' ){
        event.target.innerText = players[schetchick ? 0 : 1]
        schetchick=!schetchick    
        checkWinner()
    }
})

button.addEventListener(`click`, function() {
    for(let i = 0; i < 9; i++){
        item[i].innerText = ''
    }
    pin[0].innerText = '0'
    pin[1].innerText = '0'

})

button2.addEventListener(`click`, function() {
    for(let i = 0; i < 9; i++){
        item[i].innerText = ''
    }
})

