// Variables
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const attempt = document.querySelector('#attempt')

let randomNumber = Math.round(Math.random() * 10)
let xAttempt = 1

// Events

btnTry.addEventListener('click', clickTry)
btnReset.addEventListener('click', clickReset)
document.addEventListener('keydown', enterReset)


// Functions

function toggleScreen () {
  screen1.classList.toggle('hiden')
  screen2.classList.toggle('hiden')
}

function reset () {
  xAttempt = 1
  randomNumber = Math.round(Math.random() * 10)
}

function clickTry (event) {
  event.preventDefault();

  if(Number(attempt.value) == randomNumber) {
    toggleScreen();
    
    if(xAttempt == 1) {
      screen2.querySelector('h2').innerText = `Acertou em ${xAttempt} tentativa!`
    } else {
      screen2.querySelector('h2').innerText = `Acertou em ${xAttempt} tentativas!`
    }
  }
  xAttempt++
  attempt.value = ""
}

function clickReset () {
  toggleScreen()
  reset()
}

function enterReset (e) {
  if(e.key == 'Enter' && screen1.classList.contains('hiden')) {
    toggleScreen()
    reset()
  }
}