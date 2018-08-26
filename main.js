const game = {
  // INTIALIZE GAME
  init: function() {
    document.getElementById("counter").textContent = game.counter;
    let num = Math.floor(Math.random() * 7) + 4;
    if (num % 2 != 0) {
      num -= 1;
    }
    this.generateColor();
    for (let i = 0; i < num; i++) {
      var div = document.createElement("div");
      for (let j = 0; j < 4; j++) {
        div.appendChild(this.generateBlock());
      }
      document.getElementById("game").appendChild(div);
    }
    this.setAlternateColor();
    this.setListeners();
  },

  // RESET GAME
  reset: function() {
    document.getElementById("game").innerHTML = "";
    document.getElementById("restart").textContent = "Restart";
    game.closeModal();
    game.color = "";
    game.altColor = "";
    game.counter = 0;
    game.difficulty = 120;
    game.solution = 0;
    game.init();
  },

  // VARIABLES
  color: "",
  altColor: "",
  counter: 0,
  difficulty: 120, // Lower means harder, smaller difference from rest of color values
  solution: 0,
  currentTheme: "light",

  // CHANGE LIGHT OR DARK THEME
  changeTheme: function() {
    if (game.currentTheme === "light") {
      document.querySelector("body").style.backgroundColor = "#232323";
      var blocks = document.querySelectorAll(".colorblock");
      blocks.forEach(e => {
        e.style.border = "2px solid #232323";
      });
      game.currentTheme = "dark";
    } else {
      document.querySelector("body").style.backgroundColor = "white";
      var blocks = document.querySelectorAll(".colorblock");
      blocks.forEach(e => {
        e.style.border = "2px solid white";
      });
      game.currentTheme = "light";
    }
  },

  // GENERATE COLORS
  generateColor: function() {
    let r = this.generateNumber();
    let g = this.generateNumber();
    let b = this.generateNumber();

    game.color = `rgb(${r}, ${g}, ${b})`;

    this.generateVariantColor(r, g, b);
  },

  // GENERATE COLOR VARIANT
  generateVariantColor: function(r, g, b) {
    let varColors = [r, g, b];
    let num = Math.floor(Math.random() * 3);
    if (varColors[num] < 120) {
      varColors[num] += game.difficulty;
    } else {
      varColors[num] -= game.difficulty;
    }

    game.altColor = `rgb(${varColors[0]}, ${varColors[1]}, ${varColors[2]})`;
  },

  // GENERATE NUMBERS
  generateNumber: function() {
    let num = Math.floor(Math.random() * 256);
    return num;
  },

  // GENERATE BLOCK
  generateBlock: function() {
    let block = document.createElement("div");
    block.style.backgroundColor = this.color;
    block.classList.add("colorblock");
    game.currentTheme === "light"
      ? (block.style.border = "2px solid white")
      : (block.style.border = "2px solid #232323");

    return block;
  },

  // SET ALTERNATE COLOR ON BLOCK
  setAlternateColor: function() {
    var altBlock = document.querySelectorAll(".colorblock");
    var randNum = Math.floor(Math.random() * altBlock.length);
    game.solution = randNum;
    altBlock[randNum].style.backgroundColor = game.altColor;
  },

  // HANDLE BLOCK CLICKS
  handleBlockClick: function() {
    if (this.style.backgroundColor === game.altColor) {
      game.success();
    } else {
      game.failure();
    }
  },

  // HANDLE SUCCESS
  success: function() {
    game.counter += 1;
    game.checkDifficulty();
    document.getElementById("game").innerHTML = "";
    game.init();
  },

  // CHECK AND CHANGE DIFFICULTY
  checkDifficulty: function() {
    if (game.counter % 5 === 0 && game.difficulty > 20) {
      game.difficulty -= 10;
    }
  },

  // HANDLE FAIL
  failure: function() {
    document.getElementById("restart").textContent = "Play again";
    var blocks = document.querySelectorAll(".colorblock");
    var borderColor =
      game.currentTheme === "light" ? "2px solid black" : "2px solid white";
    blocks[game.solution].style.border = borderColor;
    blocks.forEach(e => {
      e.removeEventListener("click", this.handleBlockClick);
    });
    game.createModal();
  },

  // SET  LISTENERS
  setListeners: function() {
    var blocks = document.querySelectorAll(".colorblock");
    blocks.forEach(function(e) {
      e.addEventListener("click", game.handleBlockClick);
    });
    var resetButton = document.querySelector("#restart");
    resetButton.addEventListener("click", game.reset);
    var themeButton = document.querySelector("#changeTheme");
    themeButton.addEventListener("click", game.changeTheme);
  },

  // MODAL FUNCTION
  createModal: function() {
    var modal = document.getElementById("failModal");
    var modalText = document.getElementById("modalMsg");
    var modalRestart = document.getElementById("modalRestart");
    var modalClose = document.getElementById("modalClose");

    modalText.innerHTML = `Wrong choice!<br>You got ${
      game.counter
    } right<br>Play again?`;
    modalRestart.addEventListener("click", game.reset);
    modalClose.addEventListener("click", game.closeModal);

    modal.style.display = "block";
  },

  closeModal: function() {
    var modal = document.getElementById("failModal");
    var modalText = document.getElementById("modalMsg");
    var modalRestart = document.getElementById("modalRestart");
    var modalClose = document.getElementById("modalClose");

    modal.style.display = "none";
    modalText.innerHTML = "";
    modalRestart.removeEventListener("click", game.reset);
    modalClose.removeEventListener("click", game.closeModal);
  }
};

game.init();
