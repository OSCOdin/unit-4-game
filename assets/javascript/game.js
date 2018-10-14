$(document).ready(function () {

    var targetNumber = 0;

    var gemRed = 0;

    var gemBlue = 0;

    var gemGrey = 0;

    var gemGreen = 0;

    var wins = 0;

    var losses = 0;

    var totalScore = 0;

    var redNum = false

    var blueNum = false

    var greenNum = false

    var greyNum = false


    function genTarNum() {
        targetNumber = Math.floor(Math.random() * 100) + 20;
    }

    genTarNum()

    // setting onclick events for every gem and added a conditional for if a number is already set or if not

    $("#redG").click(function (event) {
        if (redNum === false) {
            gemRed = Math.floor(Math.random() * 12) + 1;
            redNum = true;
        }
        totalScore = totalScore + gemRed;
        $("#totalScore").text("Total Score: " + totalScore);
        if (totalScore === targetNumber) {
            alert("you win");
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();

        } else if (totalScore > targetNumber) {
            alert("you lose");
            losses++;
            $("#losses").text("Losses: " + losses);
            reset();
        }
    })
    $("#blueG").click(function (event) {
        if (blueNum === false) {
            gemBlue = Math.floor(Math.random() * 12) + 1;
            blueNum = true;
        }
        totalScore = totalScore + gemBlue;
        $("#totalScore").text("Total Score: " + totalScore);
        if (totalScore === targetNumber) {
            alert("you win");
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();
        } else if (totalScore > targetNumber) {
            alert("you lose");
            losses++;
            $("#losses").text("Losses: " + losses);
            reset();
        }
    })
    $("#greyG").click(function (event) {
        if (greyNum === false) {
            gemGrey = Math.floor(Math.random() * 12) + 1;
            greyNum = true;
        }
        totalScore = totalScore + gemGrey;
        $("#totalScore").text("Total Score: " + totalScore);
        if (totalScore === targetNumber) {
            alert("you win");
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();
        } else if (totalScore > targetNumber) {
            alert("you lose");
            losses++;
            $("#losses").text("Losses: " + losses);
            reset();
        }
    })
    $("#greenG").click(function (event) {
        if (greenNum === false) {
            gemGreen = Math.floor(Math.random() * 12) + 1;
            greenNum = true;
        }
        totalScore = totalScore + gemGreen;
        $("#totalScore").text("Total Score: " + totalScore);
        if (totalScore === targetNumber) {
            alert("you win");
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();
        } else if (totalScore > targetNumber) {
            alert("you lose");
            losses++;
            $("#losses").text("Losses: " + losses);
            reset();
        }
    })

    function reset() {
        genTarNum()
        greenNum = false;
        redNum = false; 
        greyNum = false;
        blueNum = false;
        totalScore = 0
        $("#targetScore").text("Target Number: " + targetNumber);
        $("#totalScore").text("Total Score: " + totalScore);
    }

    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    $("#targetScore").text("Target Number: " + targetNumber);
    $("#totalScore").text("Total Score: " + totalScore)
})