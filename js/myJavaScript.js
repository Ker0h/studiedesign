var points = 0;
var questionsAnswered = [];

function makeActive(questionNumber, answerNumber){
    var answer1 = document.getElementById("q" + questionNumber + "a1");
    var answer2 = document.getElementById("q" + questionNumber + "a2");

    if (answerNumber === 1){
        if(answer2.className === "list-group-item active") {
            answer2.className = "list-group-item list-group-item-action";
            answer1.className = "list-group-item active";
        }if(answer1.className !== "list-group-item active"){
            answer1.className = "list-group-item active";
        }
        checkIfAlreadyCounted(questionNumber, 1);
    }

    if (answerNumber === 2){
        if(answer1.className === "list-group-item active"){
            answer1.className = "list-group-item list-group-item-action";
            answer2.className = "list-group-item active";
        }if(answer2.className !== "list-group-item active"){
            answer2.className = "list-group-item active";
        }
        checkIfAlreadyCounted(questionNumber, 2);
    }

    if (questionsAnswered.length === 10){
        var quizElement = document.getElementById('quizQuestions');
        while ( quizElement.firstChild ) {
            quizElement.removeChild( quizElement.firstChild );
        }
        window.scrollTo(0,0);
        var finalscoreElement = document.getElementById('finalScores');
        finalscoreElement.style.visibility = "visible";
        if (points >= 8){
            finalscoreElement.innerHTML = '<div id="finalScore810" class="finalScore"><h1>Resultaat 8-10</h1><p>Wauw! wat een score! Zo te zien zit hier wel je interesse. Met zo\'n score kunnen wij zeker aanraden om te beginnen met de opleiding Informatica op avans!</p><a href="index.html"><button type="button" class="btn btn-primary">Terug naar de Homepage</button></a></div>'
        }
        if (points >= 5 && points <= 7){
            finalscoreElement.innerHTML = '<div id="finalScore57" class="finalScore"><h1>Resultaat 5-7</h1><p>Je interesse is zeker terug te zien uit de score van deze quiz. De opleiding Informatica zou je zeker in je opleidingskeuze moeten meenemen!</p><a href="index.html"><button type="button" class="btn btn-primary">Terug naar de Homepage</button></a></div>'
        }
        if (points < 5){
            finalscoreElement.innerHTML = '<div id="finalScore15" class="finalScore"><h1>Resultaat 1-5</h1><p>hmmm, misschien is Informatica niet helemaal de opleiding die je zoekt. Gelukkig biedt avans nog vele andere\nopleidingen waar je interesses misschien beter aansluiten!</p><a href="index.html"><button type="button" class="btn btn-primary">Terug naar de Homepage</button></a></div>'
        }
    }
}

function checkIfAlreadyCounted(questionNumber, answer){
    for (var i = 0; i < questionsAnswered.length; i++){
        if(questionsAnswered[i] === questionNumber){
            return;
        }
    }
    questionsAnswered.push(questionNumber);
    if (answer === 1){
        points++;
    }
}

//Initializing fullPage.js
$(document).ready(function() {
    $('#fullpage').fullpage({
        paddingTop: 150,
        paddingBottom: 50,
        scrollOverflow: true,
        anchors: ['home', 'IT', 'education', 'structure', 'subjects', 'professions', 'admission', 'points', 'footer'],
        afterResponsive: function(){
            $('#fullpage').destroy();
        }
    });
});