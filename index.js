let loss= 0
let wins = 0
let draws= 0
document.getElementById('wins').innerHTML = wins
document.getElementById('draws').innerHTML = draws
document.getElementById('losses').innerHTML = loss


function game(choice) {
  let compChoice = Math.floor(Math.random() * 3)
  if (compChoice === 0) {
    compChoice = "rock"
  } else if (compChoice === 1) {
    compChoice = 'paper'
  } else {
    compChoice = 'scissors'
  }

  if (compChoice === choice) {
    alert('Draw! You both picked ' + choice + ".")
    document.getElementById('draws').innerHTML = Number(document.getElementById('draws').innerHTML) + 1
  } else {
    switch (choice){
      case 'rock':
        if (compChoice === 'scissors') {
          alert('You win! You chose ' + choice + ' and the computer chose ' + compChoice)
          document.getElementById('wins').innerHTML = Number(document.getElementById('wins').innerHTML) + 1
        } else {
          alert('You Lose! You chose ' + choice + ' and the computer chose ' + compChoice)
          document.getElementById('losses').innerHTML = Number(document.getElementById('losses').innerHTML) + 1
        }
        break;
        
      case 'paper':
        if (compChoice === 'rock') {
          alert('You win! You chose ' + choice + ' and the computer chose ' + compChoice)
          document.getElementById('wins').innerHTML = Number(document.getElementById('wins').innerHTML) + 1
        } else {
          alert('You Lose! You chose ' + choice + ' and the computer chose ' + compChoice)
          document.getElementById('losses').innerHTML = Number(document.getElementById('losses').innerHTML) + 1
        }
        break;
      
      case 'scissors':
        if (compChoice === 'paper') {
          alert('You win! You chose ' + choice + ' and the computer chose ' + compChoice)
          document.getElementById('wins').innerHTML = Number(document.getElementById('wins').innerHTML) + 1
        } else {
          alert('You Lose! You chose ' + choice + ' and the computer chose ' + compChoice)
          document.getElementById('losses').innerHTML = Number(document.getElementById('losses').innerHTML) + 1
        }
        break;
    }
  }
}