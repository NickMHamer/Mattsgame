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

  //function countingGame() {}

  function colorsGame() {
    let randomNumber = getRandomNumber(7);
    displayArea.replaceChildren();

    while (randomNumber === lastRandomNumber) {
      randomNumber = getRandomNumber(7);
    }

    if (randomNumber === 1) {
      lastRandomNumber = randomNumber;
      createNewColor("square", "Red", "#cf142b", "audioassets/Colors/Red.mp3");
    } else if (randomNumber === 2) {
      lastRandomNumber = randomNumber;
      createNewColor("square", "Blue", "blue", "audioassets/Colors/blue.mp3");
    } else if (randomNumber === 3) {
      lastRandomNumber = randomNumber;
      createNewColor(
        "square",
        "Green",
        "#00ab66",
        "audioassets/Colors/Green.mp3"
      );
    } else if (randomNumber === 4) {
      lastRandomNumber = randomNumber;
      createNewColor(
        "square",
        "Orange",
        "#FF7518",
        "audioassets/Colors/orange.mp3"
      );
    } else if (randomNumber === 5) {
      lastRandomNumber = randomNumber;
      createNewColor(
        "square",
        "Pink",
        "#FF69B4",
        "audioassets/Colors/pink.mp3"
      );
    } else if (randomNumber === 6) {
      lastRandomNumber = randomNumber;
      createNewColor(
        "square",
        "Purple",
        "purple",
        "audioassets/Colors/purple.mp3"
      );
    } else if (randomNumber === 7) {
      lastRandomNumber = randomNumber;
      createNewColor(
        "square",
        "Yellow",
        "#FBEC5D",
        "audioassets/Colors/yellow.mp3"
      );
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
      createNewShape(
        "triangle",
        "Triangle",
        "#FBEC5D",
        "audioassets/Shapes/triangle.mp3"
      );
    } else if (randomNumber === 2) {
      lastRandomNumber = randomNumber;
      createNewShape(
        "square",
        "Square",
        "#FBEC5D",
        "audioassets/Shapes/square.mp3"
      );
    } else if (randomNumber === 3) {
      lastRandomNumber = randomNumber;
      createNewShape(
        "rectangle",
        "Rectangle",
        "#FBEC5D",
        "audioassets/Shapes/rectangle.mp3"
      );
    } else if (randomNumber === 4) {
      lastRandomNumber = randomNumber;
      createNewShape("star", "Star", "#FBEC5D", "audioassets/Shapes/star.mp3");
    } else if (randomNumber === 5) {
      lastRandomNumber = randomNumber;
      createNewShape(
        "circle",
        "Circle",
        "#FBEC5D",
        "audioassets/Shapes/circle.mp3"
      );
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
      createNewNumber("1", "One", "audioassets/Numbers/One.mp3");
    } else if (randomNumber === 2) {
      lastRandomNumber = randomNumber;
      createNewNumber("2", "Two", "audioassets/Numbers/two.mp3");
    } else if (randomNumber === 3) {
      lastRandomNumber = randomNumber;
      createNewNumber("3", "Three", "audioassets/Numbers/three.mp3");
    } else if (randomNumber === 4) {
      lastRandomNumber = randomNumber;
      createNewNumber("4", "Four", "audioassets/Numbers/four.mp3");
    } else if (randomNumber === 5) {
      lastRandomNumber = randomNumber;
      createNewNumber("5", "Five", "audioassets/Numbers/five.mp3");
    } else if (randomNumber === 6) {
      lastRandomNumber = randomNumber;
      createNewNumber("6", "Six", "audioassets/Numbers/six.mp3");
    } else if (randomNumber === 7) {
      lastRandomNumber = randomNumber;
      createNewNumber("7", "Seven", "audioassets/Numbers/seven.mp3");
    } else if (randomNumber === 8) {
      lastRandomNumber = randomNumber;
      createNewNumber("8", "Eight", "audioassets/Numbers/eight.mp3");
    } else if (randomNumber === 9) {
      lastRandomNumber = randomNumber;
      createNewNumber("9", "Nine", "audioassets/Numbers/nine.mp3");
    } else if (randomNumber === 10) {
      lastRandomNumber = randomNumber;
      createNewNumber("10", "Ten", "audioassets/Numbers/ten.mp3");
    } else if (randomNumber === 11) {
      lastRandomNumber = randomNumber;
      createNewNumber("11", "Eleven", "audioassets/Numbers/eleven.mp3");
    } else if (randomNumber === 12) {
      lastRandomNumber = randomNumber;
      createNewNumber("12", "Twelve", "audioassets/Numbers/twelve.mp3");
    } else if (randomNumber === 13) {
      lastRandomNumber = randomNumber;
      createNewNumber("13", "Thirteen", "audioassets/Numbers/thirteen.mp3");
    } else if (randomNumber === 14) {
      lastRandomNumber = randomNumber;
      createNewNumber("14", "Fourteen", "audioassets/Numbers/fourteen.mp3");
    } else if (randomNumber === 15) {
      lastRandomNumber = randomNumber;
      createNewNumber("15", "Fifteen", "audioassets/Numbers/fifteen.mp3");
    } else if (randomNumber === 16) {
      lastRandomNumber = randomNumber;
      createNewNumber("16", "Sixteen", "audioassets/Numbers/sixteen.mp3");
    } else if (randomNumber === 17) {
      lastRandomNumber = randomNumber;
      createNewNumber("17", "Seventeen", "audioassets/Numbers/seventeen.mp3");
    } else if (randomNumber === 18) {
      lastRandomNumber = randomNumber;
      createNewNumber("18", "Eighteen", "audioassets/Numbers/eighteen.mp3");
    } else if (randomNumber === 19) {
      lastRandomNumber = randomNumber;
      createNewNumber("19", "Nineteen", "audioassets/Numbers/nineteen.mp3");
    } else if (randomNumber === 20) {
      lastRandomNumber = randomNumber;
      createNewNumber("20", "Twenty", "audioassets/Numbers/twenty.mp3");
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
      }, 10000);
    } else if (selectorGameType.value === "numbers") {
      backgroundImg.style.backgroundImage =
        "url(assets/kidsbackgroundnumbers.jpg)";
      numbersGame();
      refreshIntervalId = setInterval(() => {
        numbersGame();
      }, 10000);
    } else if (selectorGameType.value === "shapes") {
      backgroundImg.style.backgroundImage =
        "url(assets/kidsbackgroundshapes.jpg)";
      shapesGame();
      refreshIntervalId = setInterval(() => {
        shapesGame();
      }, 10000);
    }
  });

  stopButton.addEventListener("click", (event) => {
    clearInterval(refreshIntervalId);
    clearTimeout(answerTimer);
    displayArea.replaceChildren();
  });

  function createNewShape(shape, answer, color, audioFile) {
    const newDisplay = document.createElement("div");
    const newH1 = document.createElement("h1");
    const audio = new Audio(audioFile);
    newH1.classList.add("answer");
    newDisplay.classList.add(shape);
    displayArea.append(newDisplay);
    displayArea.append(newH1);
    answerTimer = setTimeout(() => {
      newH1.innerText = answer;
      newH1.style.color = color;
      audio.play();
    }, 5000);
  }
  function createNewColor(shape, answer, color, audioFile) {
    const newDisplay = document.createElement("div");
    const newH1 = document.createElement("h1");
    const audio = new Audio(audioFile);
    newH1.classList.add("answer");
    newDisplay.classList.add(shape);
    newDisplay.style.backgroundColor = color;
    newDisplay.style.border = "1px solid black";
    displayArea.append(newDisplay);
    displayArea.append(newH1);
    answerTimer = setTimeout(() => {
      newH1.innerText = answer;
      newH1.style.color = color;
      audio.play();
    }, 5000);
  }

  function createNewNumber(number, answer, audioFile) {
    const newDisplay = document.createElement("div");
    const newH1 = document.createElement("h1");
    const audio = new Audio(audioFile);
    newDisplay.classList.add("largeDisplayNumber");
    newH1.classList.add("answer");
    newDisplay.innerText = number;
    displayArea.append(newDisplay);
    displayArea.append(newH1);
    answerTimer = setTimeout(() => {
      newH1.innerText = answer;
      newH1.style.color = "#d3d3d5";
      audio.play();
    }, 5000);
  }
})();
