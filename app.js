let result = 0
let hitPosition
let currentTime = 20
let timerId = null
let countDownTimerId

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
  })

  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')

  hitPosition = randomSquare.id
}

function moveMole() {
  timerId = setInterval(randomSquare, 500)
}

function countDown() {
  currentTime--
  timeLeft.textContent = currentTime

  if (currentTime == 0) {
   clearInterval(countDownTimerId)
   clearInterval(timerId)
   alert('GAME OVER! Your final score is ' + result)
  }

}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

$('#generateKeyData').click(function() {
    download("keyData.txt", keyData)
});

$('#generateMouseData').click(function() {
    download("mouseData.txt", mouseData)
});

$('#start').click(function() {
    start()
});

function start() {
  squares = document.querySelectorAll('.square')

  squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
    }
  })
  })
  
  mole = document.querySelector('.mole')
  timeLeft = document.querySelector('#time-left')
  score = document.querySelector('#score')

  result = 0
  hitPosition
  currentTime = 20
  timerId = null

  moveMole()

  countDownTimerId = setInterval(countDown, 1000)
}

