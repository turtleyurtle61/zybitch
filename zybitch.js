// ==UserScript==
// @name         zybitch
// @version      0.2
// @description  Does most of the stuff
// @author       Someone who hates zybooks lmao
// @match        https://learn.zybooks.com/zybook/*
// @namespace    *will post repo soon
// @run-at document-idle


// ==/UserScript==
// USAGE: Click Autocomplete! on a zyBooks page <-----

// SETTINGS ---------
var autoRun = false;
// ------------------



//EDIT ANY BUGS YOU SEE
(function() {
    console.log(timeString() + " Autocomplete go brrrrrrrr");
    if (autoRun) {
        run();
    } else {
        document.getElementsByClassName('right-buttons')[0].innerHTML = '<button id="zbaButton" type="button" style="background:#ff9547;border:1px solid #ffffff;color:#ffffff;padding:8px;border-radius:5px;cursor:pointer">Autocomplete</button>' + document.getElementsByClassName('right-buttons')[0].innerHTML;
        document.getElementById("zbaButton").addEventListener ("click", zBAStartButton, false);
    }
})();


function zBAStartButton (zEvent) {
    console.log(timeString() + " [zBA] Running...");
    //click_answers();
    click_options();
    fill_short_answers();
    start_activity();
    run();
}

function run() {
    //click_speeds();
    click_plays();
    click_starts();
    setTimeout(function(){ run(); }, 1000);
}

function click_speeds() { // Checks speed boxes. Doesn't work but isn't a necessary feature.
    var speed = document.getElementsByClassName("speed-control");
    for (var i = 0; i < speed.length; i++) {
        if ((speed[i].innerHTML).includes("false")) {
            //speed[i].click();
            speed[i].getElementsByClassName("zb-checkbox")[0].innerHTML = "\n<input type=\"checkbox\" value=\"true\" aria-label=\"2x speed\">\n<label aria-hidden=\"true\">2x speed</label>\n"
            console.log(timeString() + " Checked a speed box.");
        }
    }
}

function click_plays() { // Clicks all Play buttons
    var plays = document.getElementsByClassName("play-button");
    for (var i = 0; i < plays.length; i++) {
        if (!(plays[i].classList).contains("rotate-180")){
            plays[i].click();
            console.log(timeString() + " Clicked a play button.");
        }
    }
}



//IN PROGRESS
function click_answers(){ //clicks check answer
    var answers = document.getElementsByClassName("show-answer-button");
    for(var i=0; i<answers.length; i++){
        answers[i].click();
        answers[i].click();
        console.log("clicked answer button twice.");
    }
}


function click_options(){ //click all MC options
    var options = document.querySelectorAll('input[type=radio]');
    for(var i=0; i<options.length; i++){
        options[i].click();
        console.log("clicked options button.");
    }
}


function fill_short_answers(){ //fills in short answer
    var answer_div = document.getElementsByClassName("short-answer-question");
    var answer;
    var input;
    var check;
    click_answers();

    for(var i=0; i<answer_div.length; i++){
        answer = answer_div[i].getElementsByClassName("forfeit")[0].getElementsByClassName("forfeit-answer")[0].innerText;
        input = answer_div[i].getElementsByTagName("textarea")[0];
        input.value = answer;
        console.log(input);
    }
}


function start_activity(){ //Starts those multiple part look at code and fill in expected answer questions
    var start_button = document.getElementsByClassName("zyante-progression-start-button");
    if(start_button != undefined){
        for(var i=0; i<start_button.length; i++){
            start_button[i].click();
        }
    } else {
        console.log("No activities to start!");
    }
}
//^^IN PROGRESS



function click_starts() { // Clicks all Start buttons
    var starts = document.getElementsByClassName("start-button");
    for (var i = 0; i < starts.length; i++) {
        starts[i].click();
        console.log(timeString() + " Clicked a start button.");
    }
}

function timeString() {
    let d = new Date();
    let h = (d.getHours()<10?'0':'') + d.getHours();
    let m = (d.getMinutes()<10?'0':'') + d.getMinutes();
    let s = (d.getSeconds()<10?'0':'') + d.getSeconds();
    let dstr = h + ':' + m + ":" + s;
    return dstr;
}
