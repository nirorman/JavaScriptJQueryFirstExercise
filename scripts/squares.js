/**
 * Created by ormann on 08/11/2016.
 */
var main = function() {

    //create new 10 squares with random size, color and location:
    for (var i = 0; i < 10; i++) {
        var square = document.createElement('div');
        square.className = 'square';
        square.style.backgroundColor = randomColor();
        square.style.width = randomSize();
        square.style.height = randomSize();
        square.style.top = randomSize();
        square.style.left = randomSize();
        square.style.position = 'absolute';
        square.style.margin = '20px'
        square.style.zIndex = i;
        document.body.appendChild(square);
    }
    var highestIndex = 9;
    var squares = document.getElementsByClassName("square");

    $('.square').draggable({stop: handleDragStop });
    $('.square').click(selectSquare);
    $(document).keydown(deleteSquare);

    function handleDragStop(event){
        if (event.ctrlKey) {
        }
        var dragged = event.target;
        dragged.style.zIndex = highestIndex++;
        $(".square").removeClass("selected")
        $(event.target).toggleClass('selected');
    }

    function selectSquare(event) {
        if (event.ctrlKey) {
            $(this).toggleClass("selected");
        }
        else {
            var isSelected = $(this).hasClass("selected");
            $(".square").removeClass("selected");
            if(!isSelected){
                $(this).addClass("selected");
            }
            this.style.zIndex = highestIndex++;
        }
    }

    function deleteSquare(event) {
        if (event.keyCode == 46) {
            $( ".selected" ).remove();
        }
    }

    //return a random color
    function randomColor() {
        var randomRed = Math.floor(Math.random() * 255);
        var randomGreen = Math.floor(Math.random() * 255);
        var randomBlue = Math.floor(Math.random() * 255);
        //create the string that is the ‘random color’
        var randomColor = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
        return randomColor;
    }

    //return a random size
    function randomSize() {
        return Math.floor((Math.random() * 400)) + "px";
    }
}();