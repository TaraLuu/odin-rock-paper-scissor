const btn = document.querySelectorAll('button');
const compS = document.getElementById('compScore');
const playS = document.getElementById('playerScore');
const gameResult = document.getElementById('gameResult');
let cScore = 0;
let pScore = 0;

function playRound(player) {
    let comp = Math.floor(Math.random()*3); //0=rock, 1=paper, 2=scissor
    let score = player - comp;
    if (cScore > 4 || pScore > 4) {
        gameEnd(cScore)
    } else if (player == comp) {
        compS.textContent = ++cScore
        playS.textContent = ++pScore
        return gameResult.textContent = 'Tie';
    } else if (score == (-1) || score == 2) {
        compS.textContent = ++cScore
        return gameResult.textContent = `You lose.`;
    } else {
        playS.textContent = ++pScore
        return gameResult.textContent = `You win.`;
    };
};

function gameEnd(cS) {
    if (cS == 5) {
        alert('You lose. Let.\'s try again!') 
        location.reload()
    } else {
        alert('You win. Let.\'s play again!')
        location.reload()
    }
};

btn.forEach(button => button.addEventListener('click',()=> playRound(button.value)));