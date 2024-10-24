const game = document.getElementById('game');
const item = document.querySelectorAll ('.item')
const pin = [document.getElementById('p1Score'), document.getElementById('p2Score')]
const players = ['X', '0'];
const Winners = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
let schetchick = true;
let p1 = 0;
let p2 = 0;


function checkWinner (){
    let playerResults = [];
    for (i=0; i<data.length; i++){
        playerResults.push(data[i].innerText == player);
    }
    for (item of Winners){
        let Switch  = true;
        for (let i=0; i<item.length; i++){
            if (!playerRusults[item[i]-1]){
                Switch = false;
                break;
            }
        }
        if (Switch){
            return item;
        }
    }
}

function clear(){
    pin = ''
}

game.addEventListener('click', function(event){
        if(event.target.classList[0] == 'item' && event.target.innerText == '' ){
            event.target.innerText = players[schetchick ? 0 : 1]
            if (schetchick == 'X'){
                p1 = p1 +1
                console.log('p1= ', p1)
            }
            else if (schetchick == '0'){
                console.log('p2= ', p2)
                p2 = p2+1
            }
            schetchick=!schetchick
            checkWinner(data, players)
        }
        if(event.target.clear){
            clear(pin)
        }
})
