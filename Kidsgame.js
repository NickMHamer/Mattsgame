(function () {
  const selectorGameType = document.querySelector("select");
  const startButton = document.querySelector("#startButton");
  const stopButton = document.querySelector("#stopButton");
  const gameDisplay = document.querySelector("#gameDisplay");
  const correctAnswers = document.querySelector("#correctAnswers");
  let refreshIntervalId 
  

  function getRandomNumber (max) {
    return Math.floor((Math.random() * max )+ 1);
  
  }

  function colorsGame () {

    let randomNumber = getRandomNumber(6)
    let lastRandomNumber = 0

    

    if (randomNumber !== lastRandomNumber) {

        

      if (randomNumber === 1){ 
        lastRandomNumber = randomNumber
        gameDisplay.style.backgroundColor = 'red';
        setTimeout(()=>{correctAnswers.innerText = 'red'},5000)
      }
      else if (randomNumber === 2){
        lastRandomNumber = randomNumber
        gameDisplay.style.backgroundColor = 'blue';
        setTimeout(()=>{correctAnswers.innerText = 'blue'},5000)
      }
      else if (randomNumber === 3){
        lastRandomNumber = randomNumber
        gameDisplay.style.backgroundColor = 'green';
        setTimeout(()=>{correctAnswers.innerText = 'green'},5000)
      }
      else if (randomNumber === 4){
        lastRandomNumber = randomNumber
        gameDisplay.style.backgroundColor = 'orange';
        setTimeout(()=>{correctAnswers.innerText = 'orange'},5000)
      }
      else if (randomNumber === 5){
        lastRandomNumber = randomNumber
        gameDisplay.style.backgroundColor = 'pink';
        setTimeout(()=>{correctAnswers.innerText = 'pink'},5000)
      }
      else if (randomNumber === 6){
        lastRandomNumber = randomNumber
        gameDisplay.style.backgroundColor = 'purple';
        setTimeout(()=>{correctAnswers.innerText = 'purple'},5000)
      }
    } else {
      randomNumber = getRandomNumber(6)
    } 
  }


  function shapesGame() {

    let randomNumber = getRandomNumber(5)
    let lastRandomNumber = 0

    if(randomNumber === 1){
      lastRandomNumber = randomNumber
      gameDisplay.classList.remove(0)
      gameDisplay.classList.add('triangle')
    }
    else if (randomNumber === 2){
      lastRandomNumber = randomNumber
      gameDisplay.classList.remove(0)
      gameDisplay.classList.add('square')
    }
    else if (randomNumber === 3){
      lastRandomNumber = randomNumber
      gameDisplay.classList.remove(0)
      gameDisplay.classList.add('rectangle')
    }
    else if (randomNumber === 4){
      lastRandomNumber = randomNumber
      gameDisplay.classList.remove(0)
      gameDisplay.classList.add('circle')
    }
    else if (randomNumber === 5){
      lastRandomNumber = randomNumber
      gameDisplay.classList.remove(0)
      gameDisplay.classList.add('star')
    }

    
  }

  startButton.addEventListener('click', event =>{
    if (selectorGameType.value === 'colors'){
       refreshIntervalId = setInterval(() => {
        colorsGame()
        correctAnswers.innerText = ''
        },10000)
        
    }
    // else if (selectorGameType.value === 'numbers'){
    //   refreshIntervalId = setInterval(() => {
    //     colorsGame()
    //     correctAnswers.innerText = ''
    //     },10000)

    //}
    else if (selectorGameType.value === 'shapes'){
      refreshIntervalId = setInterval(() => {
        shapesGame()
        correctAnswers.innerText = ''
        },1000)

    }

    
    
});

stopButton.addEventListener('click', event =>{
  clearInterval(refreshIntervalId)
});



})();

