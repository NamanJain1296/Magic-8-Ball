$(document).ready(function(){
    var magic8ball = {};
    magic8ball.listofAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes – definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful","Fuck Off"];

    $("#answer").hide();

    magic8ball.askQuestion = function(question){
        $("#8ball").effect("shake");

        $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");

        $("#answer").fadeIn(4000);

        var randomNumber = Math.random();
        var randomNumberForListofAnswers = randomNumber * this.listofAnswers.length;
        var randomIndex = Math.floor(randomNumberForListofAnswers);
        var answer = this.listofAnswers[randomIndex];

        $("#answer").text(answer);
        console.log(question);
        console.log(answer);
    };

    var onClick = function(){
        $("#answer").hide();
        $("8ball").attr("src","after.png")

        setTimeout(function(){
            var question = prompt("ASK A YES/NO QUESTION!");
            magic8ball.askQuestion(question);
        },500);
    };
    $("#questionButton").click(onClick);
})