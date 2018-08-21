// TODO: HandleClick method
// TODO: Make slightly variant color
// TODO: Create grid with blocks as seperate div

const game = {
    // INTIALIZE GAME
    init: function() {
        let num = Math.floor(Math.random() * 12 + 6);
        this.generateColor();
        for (let i = 0; i < num; i++) {
            document.getElementById('game').appendChild(this.generateBlock());
        }
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

        game.altColor = `rba(${varColors[0]}, ${varColors[1]}, ${varColors[2]})`;

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

    // HANDLE BLOCK CLICKS
    handleBlockClick: function() {
        
    },
}

game.init();