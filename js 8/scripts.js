const game = document.getElementById('game');
const item = document.querySelectorAll ('.item')
const pin = [document.getElementById('p1Score'), document.getElementById('p2Score')]
const button = document.getElementById(`clear`);
const button2 = document.getElementById(`restart`);
const player = document.getElementById('player')

const players = ['X', '0'];
const Winners = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];

let schetchick = true;
let data = item

function checkWinner(){
    let playerResults = [];
    for (i = 0; i < data.length; i++){
        playerResults.push(data[i].innerText = players);
    }
    for (let items of Winners){
        let Switch = true;
        for (let i = 0; i < items.length; i++){
            if (!playerResults[items[i] - 1]){
                console.log('err')
                Switch = false;
                break;
            }
        }
        if (Switch){
            player.innerText = ' '
            console.log('vvvvvviiiinnnnnnnnn')
            player.innerText = players[schetchick ? 0 : 1]
            if(schetchick = true){
                pin[0].innerText = +1;
            }
            else{
                pin[1].innerText = +1; 
            }
            
            return items;
        }
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

