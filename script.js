const buttonOptions = document.querySelectorAll('[data-selection]');
const computerScoreSpan = document.querySelector('[data-computer-score]');
const playerScoreSpan = document.querySelector('[data-your-score]');
const CHOICES = [{
        name: 'rock',
        beats: 'scissors'
    },
    {
        name: 'paper',
        beats: 'rock'
    },
    {
        name: 'scissors',
        beats: 'paper'
    }
];

// get selection from the DOM
buttonOptions.forEach(option => {
    option.addEventListener('click', e => {
        const selectionName = option.dataset.selection;
        const selection = CHOICES.find(selection => selection.name === selectionName); // check selection.name = selection
        makeSelection(selection);
    })
});

function makeSelection(selection) {
    const computerSelection = computerPlay();
    const yourWinner = isWinner(selection, computerSelection);
    const computerWinner = isWinner(computerSelection, selection);

    if (computerWinner) {
        incrementScore(computerScoreSpan);
    }
    if (yourWinner) {
        incrementScore(playerScoreSpan);
    }

}

function getRandomNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}
// Computer chooses a selection randomly
function computerPlay() {

    return CHOICES[getRandomNumber(0, 2)];
}

// check who won the round --> returns boolean
function isWinner(playerSelection, computerSelection) {
    return playerSelection.beats === computerSelection.name;
}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}