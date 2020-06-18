console.log('init')

let score = {player:0, cpu:0};
let cpu_choice;
let player_choice;

function play_cpu() {
    cpu_choice = Math.floor(Math.random() * 3) + 1;
    console.log(`CPU: ${cpu_choice}`)
}

function draw() {
    document.querySelector('.result').textContent = "It's a Draw"
}

function win() {
    score.player++;
    document.querySelector('.result').textContent = "You Win"
}

function lose() {
    score.cpu++;
    document.querySelector('.result').textContent = "You Lose"
}

function update_score() {
    console.log(`score: ${score.player}, ${score.cpu}`)
    document.querySelector('.score').textContent = `You:${score.player}    CPU:${score.cpu}`
}

function play() {

    document.addEventListener('DOMContentLoaded', function() {

        document.querySelector('#Rock').onclick = function() {
            play_cpu();
            player_choice = 1;
            switch (cpu_choice) {
                case 1:
                    draw();
                    break;
                case 2:
                    lose();
                    break;
                case 3:
                    win();
                    break;
            }
            update_score();
        };

        document.querySelector('#Paper').onclick = function() {
            play_cpu();
            player_choice = 2;
            switch (cpu_choice) {
                case 2:
                    draw();
                    break;
                case 3:
                    lose();
                    break;
                case 1:
                    win();
                    break;
            }
            update_score();
        };

        document.querySelector('#Scissors').onclick = function() {
            play_cpu();
            player_choice = 3;
            switch (cpu_choice) {
                case 3:
                    draw();
                    break;
                case 1:
                    lose();
                    break;
                case 2:
                    win();
                    break;
            }
            update_score();
        };
    });
}

play()