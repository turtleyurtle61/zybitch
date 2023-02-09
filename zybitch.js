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
  	function runAutocomplete(zEvent){
        console.log(timeString() + " [zBA] Running...");
        click_answers();
    //     click_options();
    //     fill_short_answers();
//         start_activity();
        run();
    }
  
    console.log(timeString() + " Autocomplete script loaded successfully");
  	let toolbar = document.querySelector(".top-toolbar ");
  	toolbar.insertAdjacentHTML("beforeend", 
                               '<button id="zbaButton" type="button" onclick="runAutocomplete()" style="background:#ff9547;border:1px solid #ffffff;color:#ffffff;padding:8px;border-radius:5px;cursor:pointer">Autocomplete</button>');
  	document.getElementById("zbaButton").addEventListener ("click", runAutocomplete, false);
})();





function run() {
    click_speeds();
    click_plays();
    click_starts();
    setInterval(() => { 
      click_plays();
    }, 2000);
}

function click_speeds() { // Checks speed boxes. Doesn't work but isn't a necessary feature.
    let speeds = document.getElementsByTagName("input");
  
//  		const timer = ms => new Promise(res => setTimeout(res, ms))
//     async function load () { // We need to wrap the loop into an async function for this to work
//       for (var i = 0; i<speeds.length; i++) {
//         if(speeds[i].type.toLowerCase() == 'checkbox'){
//           console.log(speeds[i]);
//           speeds[i].value = true;
//           speeds[i].click();
//         }
//         console.log("async working or naw??")
//         await timer(50000); // then the created Promise can be awaited
//       }
//     }

//     load();
  	var i = 0;                  //  set your counter to 1

    function myLoop() {         //  create a loop function
      setTimeout(function() {   //  call a 3s setTimeout when the loop is called
        console.log('hello');   //  your code here
        i++;                    //  increment the counter
        if (i<speeds.length){           //  if the counter < 10, call the loop function
          console.log(speeds[i]);
          speeds[i].value = true;
          speeds[i].click();
          myLoop();             //  ..  again which will trigger another 
        }                       //  ..  setTimeout()
      }, 300)
    }
  
  	myLoop();

//   	for(let i=0; i<speeds.length; i++){
//       if(speeds[i].type.toLowerCase() == 'checkbox'){
//         console.log(speeds[i]);
//         speeds[i].value = true;
//         speeds[i].click();
//       }
//     }
 		console.log(speeds);
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



// //IN PROGRESS
function click_answers(){ // clicks all mc options
    let answers = document.getElementsByTagName("input");

  	for(let i=0; i<answers.length; i++){
      if(answers[i].type.toLowerCase() == 'radio'){
        answers[i].click();
        
      }
    }
//  		console.log(answers);
}


// function click_options(){ //click all MC options
//     var options = document.querySelectorAll('input[type=radio]');
//     for(var i=0; i<options.length; i++){
//         options[i].click();
//         console.log("clicked options button.");
//     }
// }


// function fill_short_answers(){ //fills in short answer
//     var answer_div = document.getElementsByClassName("short-answer-question");
//     var answer;
//     var input;
//     var check;
//     click_answers();

//     for(var i=0; i<answer_div.length; i++){
//         answer = answer_div[i].getElementsByClassName("forfeit")[0].getElementsByClassName("forfeit-answer")[0].innerText;
//         input = answer_div[i].getElementsByTagName("textarea")[0];
//         input.value = answer;
//         console.log(input);
//     }
// }


// function start_activity(){ //Starts those multiple part look at code and fill in expected answer questions
//     var start_button = document.getElementsByClassName("zyante-progression-start-button");
//     if(start_button != undefined){
//         for(var i=0; i<start_button.length; i++){
//             start_button[i].click();
//         }
//     } else {
//         console.log("No activities to start!");
//     }
// }
// //^^IN PROGRESS



function click_starts(){ // Clicks all Start buttons
    var starts = document.getElementsByClassName("start-button");
    for (var i = 0; i < starts.length; i++) {
        starts[i].click();
      	console.log(starts[i]);
//         console.log(timeString() + " Clicked a start button.");
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
