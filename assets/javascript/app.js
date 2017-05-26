//timer 30sec start on click

//when timer =00.00 alert results

// results
var myArr = [
    $("[name='one']"),
    $("[name='two']"),
    $("[name='three']"),
    $("[name='four']"),
    $("[name='five']"),
    $("[name='six']"),
    $("[name='seven']"),
    $("[name='eight']"),
    $("[name='nine']"),
    $("[name='ten']")
];

function checkScore() {
    for (var i = 0; i < myArr.length; i++) {
        for (var j = 0; j < myArr[i].length; j++) {

            var option = myArr[i][j];

            if (option.value == "true" && option.checked) {
                right++;
                noAnswer--;

            } else if (option.value == "false" && option.checked) {
                wrong++;
                noAnswer--;
            } else {
                console.log(option);
            }
        }
    };
}

var right = 0;
var wrong = 0;
var noAnswer = 10;
var counter = {
    time: 3000,
    start: function() {
        intervalId = setInterval(counter.count, 10);

    },
    count: function() {

        counter.time--;


        var converted = counter.timeConverter(counter.time);


        $("#timer").html(converted);
        if (counter.time == 0) {

            //update the UI& let the user know 
            //that the game is over and give them their scores

            alert("Game over! " + " Questions answered = " + noAnswer + " Questions right = " + right + " Questions wrong = " + wrong);
            $("form").css("display", "none");
            clearInterval(intervalId);
        }

    },
    timeConverter: function(t) {

        var seconds = Math.floor(t / 100);
        var milliSeconds = t - (seconds * 100);

        if (milliSeconds < 10) {
            milliSeconds = "0" + milliSeconds;
        }

        if (seconds === 0) {
            seconds = "00";
        } else if (seconds < 10) {
            seconds = "0" + seconds;
        }

        return seconds + "." + milliSeconds;
    }

}



//questions 
$("#start").on("click", function(ev) {
    $("form").css("display", "block");
    $("#start").css("display", "none")
        //start timer
    $("#timer").html("<h4>30.00</h4>")
    counter.start();
    //checkScore();
})

$("#done").on("click", function(event) {
    checkScore();
    clearInterval(intervalId);
    event.preventDefault();
    alert("Game over! " + " Questions answered = " + noAnswer + " Questions right = " + right + " Questions wrong = " + wrong);


})

//you will need to listen to the done button's click event and alert the user.
