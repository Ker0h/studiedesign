var points = 0;

function makeActiveA1(number){
    var awnser1 = document.getElementById('q1a1');
    var awnser2 = document.getElementById('q1a2');
    if(number === 1){
        if(awnser2.className === "list-group-item active") {
            awnser2.className = "list-group-item list-group-item-action";
            awnser1.className = "list-group-item active";
            points++;
        }if(awnser1.className === "list-group-item active"){

        } else {
            awnser1.className = "list-group-item active";
            points++;
        }
    }
    if(number === 2){
        if(awnser1.className === "list-group-item active"){
            awnser1.className = "list-group-item list-group-item-action";
            awnser2.className = "list-group-item active";
            points--;
        }if(awnser2.className === "list-group-item active"){

        }else{
            awnser2.className = "list-group-item active";
            points--;
        }
    }
    console.log(points);
}

//Initializing fullPage.js
$(document).ready(function() {
    $('#fullpage').fullpage({
        //loopTop: true,
        loopBottom: true,
        anchors:['home', 'education', 'schema', 'professions', 'admission', 'points']
    });
});