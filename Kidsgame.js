(function () {
  const selectorGameType = document.querySelector("select");
  const startButton = document.querySelector("#startButton");
  const stopButton = document.querySelector("#stopButton");
  const backgroundImg = document.querySelector("body");
  const displayArea = document.querySelector("#displayArea");
  let refreshIntervalId;
  let answerTimer;
  let lastRandomNumber = 0;

  function getRandomNumber(max) {
    return Math.floor(Math.random() * max + 1);
  }

  function colorsGame() {
    let randomNumber = getRandomNumber(6);
    displayArea.replaceChildren();

    while (randomNumber === lastRandomNumber) {
      randomNumber = getRandomNumber(6);
    }

    if (randomNumber === 1) {
      lastRandomNumber = randomNumber;
      createNewColor("square", "Red", "red");
    } else if (randomNumber === 2) {
      lastRandomNumber = randomNumber;
      createNewColor("square", "Blue", "blue");
    } else if (randomNumber === 3) {
      lastRandomNumber = randomNumber;
      createNewColor("square", "Green", "green");
    } else if (randomNumber === 4) {
      lastRandomNumber = randomNumber;
      createNewColor("square", "Orange", "#FF7518");
    } else if (randomNumber === 5) {
      lastRandomNumber = randomNumber;
      createNewColor("square", "Pink", "#FF69B4");
    } else if (randomNumber === 6) {
      lastRandomNumber = randomNumber;
      createNewColor("square", "Purple", "purple");
    }
  }

  function shapesGame() {
    let randomNumber = getRandomNumber(5);
    displayArea.replaceChildren();

    while (randomNumber === lastRandomNumber) {
      randomNumber = getRandomNumber(5);
    }

    if (randomNumber === 1) {
      lastRandomNumber = randomNumber;
      createNewShape("triangle", "Triangle", "#FBEC5D");
    } else if (randomNumber === 2) {
      lastRandomNumber = randomNumber;
      createNewShape("square", "Square", "#FBEC5D");
    } else if (randomNumber === 3) {
      lastRandomNumber = randomNumber;
      createNewShape("rectangle", "Rectangle", "#FBEC5D");
    } else if (randomNumber === 4) {
      lastRandomNumber = randomNumber;
      createNewShape("star", "Star", "#FBEC5D");
    } else if (randomNumber === 5) {
      lastRandomNumber = randomNumber;
      createNewShape("circle", "Circle", "#FBEC5D");
    }
  }

  function numbersGame() {
    let randomNumber = getRandomNumber(20);
    displayArea.replaceChildren();

    while (randomNumber === lastRandomNumber) {
      randomNumber = getRandomNumber(5);
    }

    if (randomNumber === 1) {
      lastRandomNumber = randomNumber;
      createNewNumber("1", "One");
    } else if (randomNumber === 2) {
      lastRandomNumber = randomNumber;
      createNewNumber("2", "Two");
    } else if (randomNumber === 3) {
      lastRandomNumber = randomNumber;
      createNewNumber("3", "Three");
    } else if (randomNumber === 4) {
      lastRandomNumber = randomNumber;
      createNewNumber("4", "Four");
    } else if (randomNumber === 5) {
      lastRandomNumber = randomNumber;
      createNewNumber("5", "Five");
    } else if (randomNumber === 6) {
      lastRandomNumber = randomNumber;
      createNewNumber("6", "Six");
    } else if (randomNumber === 7) {
      lastRandomNumber = randomNumber;
      createNewNumber("7", "Seven");
    } else if (randomNumber === 8) {
      lastRandomNumber = randomNumber;
      createNewNumber("8", "Eight");
    } else if (randomNumber === 9) {
      lastRandomNumber = randomNumber;
      createNewNumber("9", "Nine");
    } else if (randomNumber === 10) {
      lastRandomNumber = randomNumber;
      createNewNumber("10", "Ten");
    } else if (randomNumber === 11) {
      lastRandomNumber = randomNumber;
      createNewNumber("11", "Eleven");
    } else if (randomNumber === 12) {
      lastRandomNumber = randomNumber;
      createNewNumber("12", "Twelve");
    } else if (randomNumber === 13) {
      lastRandomNumber = randomNumber;
      createNewNumber("13", "Thirteen");
    } else if (randomNumber === 14) {
      lastRandomNumber = randomNumber;
      createNewNumber("14", "Fourteen");
    } else if (randomNumber === 15) {
      lastRandomNumber = randomNumber;
      createNewNumber("15", "Fifteen");
    } else if (randomNumber === 16) {
      lastRandomNumber = randomNumber;
      createNewNumber("16", "Sixteen");
    } else if (randomNumber === 17) {
      lastRandomNumber = randomNumber;
      createNewNumber("17", "Seventeen");
    } else if (randomNumber === 18) {
      lastRandomNumber = randomNumber;
      createNewNumber("18", "Eighteen");
    } else if (randomNumber === 19) {
      lastRandomNumber = randomNumber;
      createNewNumber("19", "Nineteen");
    } else if (randomNumber === 20) {
      lastRandomNumber = randomNumber;
      createNewNumber("20", "Twenty");
    }
  }

  startButton.addEventListener("click", (event) => {
    clearInterval(refreshIntervalId);
    clearTimeout(answerTimer);
    displayArea.replaceChildren();
    if (selectorGameType.value === "colors") {
      backgroundImg.style.backgroundImage =
        "url(assets/kidsbackgroundcolors.jpg)";
      colorsGame();
      refreshIntervalId = setInterval(() => {
        colorsGame();
      }, 2000);
    } else if (selectorGameType.value === "numbers") {
      backgroundImg.style.backgroundImage =
        "url(assets/kidsbackgroundnumbers.jpg)";
      numbersGame();
      refreshIntervalId = setInterval(() => {
        numbersGame();
      }, 2000);
    } else if (selectorGameType.value === "shapes") {
      backgroundImg.style.backgroundImage =
        "url(assets/kidsbackgroundshapes.jpg)";
      shapesGame();
      refreshIntervalId = setInterval(() => {
        shapesGame();
      }, 2000);
    }
  });

  stopButton.addEventListener("click", (event) => {
    clearInterval(refreshIntervalId);
    clearTimeout(answerTimer);
    displayArea.replaceChildren();
  });

  function createNewShape(shape, answer, color) {
    const newDisplay = document.createElement("div");
    const newH1 = document.createElement("h1");
    newH1.classList.add("answer");
    newDisplay.classList.add(shape);
    displayArea.append(newDisplay);
    displayArea.append(newH1);
    answerTimer = setTimeout(() => {
      newH1.innerText = answer;
      newH1.style.color = color;
    }, 1000);
  }
  function createNewColor(shape, answer, color) {
    const newDisplay = document.createElement("div");
    const newH1 = document.createElement("h1");
    newH1.classList.add("answer");
    newDisplay.classList.add(shape);
    newDisplay.style.backgroundColor = color;
    newDisplay.style.border = "1px solid black";
    displayArea.append(newDisplay);
    displayArea.append(newH1);
    answerTimer = setTimeout(() => {
      newH1.innerText = answer;
      newH1.style.color = color;
    }, 1000);
  }

  function createNewNumber(number, answer) {
    const newDisplay = document.createElement("div");
    const newH1 = document.createElement("h1");
    newDisplay.classList.add("largeDisplayNumber");
    newH1.classList.add("answer");
    newDisplay.innerText = number;
    displayArea.append(newDisplay);
    displayArea.append(newH1);
    answerTimer = setTimeout(() => {
      newH1.innerText = answer;
      newH1.style.color = "#d3d3d5";
    }, 1000);
  }
})();
