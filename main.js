// TODO: HandleClick method
// TODO: Create grid with blocks as seperate div

const game = {
    // INTIALIZE GAME
    init: function() {
        let num = Math.floor(Math.random() * 7) + 4;
        if (num % 2 != 0) {num -= 1};
        this.generateColor();
        for (let i = 0; i < num; i++) {
            var div = document.createElement('div');
                for (let j = 0; j < 4; j++) {
                    div.appendChild(this.generateBlock());
                }
            document.getElementById('game').appendChild(div);
            }
        this.setAlternateColor();
        this.setListeners();
    },

    // VARIABLES
    color: "",
    altColor: "",
    counter: 0,

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
        if (varColors[num] < 100) {
            varColors[num] += 100;
        } else {
            varColors[num] -= 100;
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
        block.classList.add('colorblock');

        return block;
    },

    // SET BLOCK LISTENERS
    setListeners: function() {
        var blocks = document.querySelectorAll('.colorblock');
        blocks.forEach(function(e) {e.addEventListener('click', game.handleBlockClick)})
    },

    // SET ALTERNATE COLOR
    setAlternateColor: function() {
        var altBlock = document.querySelectorAll('.colorblock');
        var randNum = Math.floor(Math.random() * altBlock.length + 1);
        altBlock[randNum].style.backgroundColor  = this.altColor;
    },

    // HANDLE BLOCK CLICKS
    handleBlockClick: function() {
        if (this.style.backgroundColor === game.altColor) {
            
        }
    },
}

game.init();