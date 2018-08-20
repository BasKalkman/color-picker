// TODO: HandleClick method
// TODO: Make slightly variant color
// TODO: Create grid with blocks as seperate div

const game = {
    // INTIALIZE GAME
    init: function() {
        let num = Math.floor(Math.random() * 12 + 6);
        let color = this.generateColor();
        for (let i = 0; i < num; i++) {
            document.getElementById('game').appendChild(this.generateBlock(color[0], color[1], color[2]));
        }
        this.setListeners();
    },

    // GENERATE COLORS
    generateColor: function() {
        let color = [];
        
        for (let i = 0; i < 3; i++) {
            color.push(this.generateNumber());
        }

        return color;
    },

    // GENERATE COLOR VARIANT
    generateVariantColor: function(colorArray) {
        let varColor = [];

    },

    // GENERATE NUMBERS
    generateNumber: function() {
        let num = Math.floor(Math.random() * 256);
        return num;
    },

    // GENERATE BLOCK
    generateBlock: function(r, g, b) {
        let block = document.createElement("div");
        block.style.backgroundColor = `rgb(${r}, ${g}, ${b}`;
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