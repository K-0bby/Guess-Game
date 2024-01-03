// Function to generate the random numbers
let unknownNumber = Math.trunc(Math.random() * 50 + 1);
console.log(unknownNumber);

// Set initial values for score and highScore
let score = 15;
let highscore = 0;

// Select HTML elements
let message = document.querySelector('.message');
let scoreElement = document.querySelector('.score');
let checkBtn = document.querySelector('.checkBtn');
let ready = document.querySelector('.ready');


// Set initial text content for message and score
message.textContent = "Start guessing...";
scoreElement.textContent = score;

// Add event listener to checkBtn
checkBtn.addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        message.textContent = 'No Number😒';
        console.log('No number');
    }
    else if (guess === unknownNumber) {
        message.textContent = 'Correct Number!🎉';
        document.querySelector('body').style.backgroundColor = '#60b347';
        ready.textContent = guess;
        document.querySelector('.ready').style.width = '10rem';

        if (score > highscore) {
            highscore = score;  
            document.querySelector('.highscore').textContent = highscore; 
        }
    } 
    else if (guess !== unknownNumber) {
        if (score > 1) {
            message.textContent = guess > unknownNumber ? 'Too high!😑' : 'Too low!😆';
            score--;
            scoreElement.textContent = score;
        } else {
            document.querySelector('body').style.backgroundColor = '#da0731';
            message.textContent = 'You lost the game!💥';
            score = 0;
            scoreElement.textContent = score;
        }
    }
})

//Reset 
document.querySelector('.restart').addEventListener('click', () => {
    score = 15;
    unknownNumber = Math.trunc(Math.random() * 50 + 1);
    message.textContent = "Start guessing...";
    scoreElement.textContent = score;
    ready.textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.ready').style.width = '4.375rem';
    document.querySelector('body').style.backgroundColor = '#2f2e2e';
})