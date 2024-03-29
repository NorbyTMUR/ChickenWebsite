// variables for all stats needed
var selectedAlliance = null
var leftZoneBool = false;
var autoSpeakerCount = 0
var autoAmpCount = 0


// click listener for all buttons
document.getElementById("allianceBlue").addEventListener("click", selectRedAllinace);
document.getElementById("allianceRed").addEventListener("click", selectBlueAlliance);            
document.getElementById("leftZone").addEventListener("click", fnLeftZone);
document.getElementById("addAutoSpeaker").addEventListener("click", addAutoSpeaker);
document.getElementById("subAutoSpeaker").addEventListener("click", subAutoSpeaker);
document.getElementById("addAutoAmp").addEventListener("click", addAutoAmp);
document.getElementById("subAutoAmp").addEventListener("click", subAutoAmp);

            
// functions to modify values
function selectRedAllinace() {
    document.getElementById("allianceBlue").innerHTML = "you clicked me";
    document.getElementById('allianceRed').textContent = 'Red'
    blueAlliance = document.getElementById("allianceBlue");
    selectedAlliance = "Blue"
    //this will not print the actual value anyway because it hasn't gotten the value. Worry about this a bit later.
    //for testing
    console.log(blueAlliance);
}
function selectBlueAlliance() {
    redAlliance = document.getElementById("allianceRed");
    document.getElementById("allianceRed").textContent = 'you clicked me';
    document.getElementById('allianceBlue').textContent = 'Blue'
    selectedAlliance = "Red"
    //for testing
    console.log(redAlliance);
}

function fnLeftZone() {
    leftZoneBool = !leftZoneBool;
    //for testing
    console.log(leftZoneBool);
}

function addAutoSpeaker() {
    autoSpeakerCount++;
    if(autoSpeakerCount > 9) autoSpeakerCount = 9;
    document.getElementById("speakerAutoScores").textContent = "Speaker Scores: " + autoSpeakerCount;
    //this will not print the actual value anyway because it hasn't gotten the value. Worry about this a bit later.
    //for testing
    console.log('good one');
}

function subAutoSpeaker() {
    autoSpeakerCount--;
    if(autoSpeakerCount < 0) autoSpeakerCount = 0;
    document.getElementById("speakerAutoScores").textContent = "Speaker Scores: " + autoSpeakerCount;
    //for testing
    console.log('second good one');
}

//TODO get it to override the boolean with whichever was clicked more recently - a team cant be both red& blue.
function addAutoAmp() {
    autoAmpCount++;
    if(autoAmpCount > 9) autoAmpCount = 9;
    document.getElementById("autoAmpScores").textContent = "Amp Scores: " + autoAmpCount;
    //this will not print the actual value anyway because it hasn't gotten the value. Worry about this a bit later.
    //for testing
    console.log('good one');
}
function subAutoAmp() {
    autoAmpCount--;
    if(autoAmpCount < 0) autoAmpCount = 0;
    document.getElementById("autoAmpScores").textContent = "Amp Scores: " + autoAmpCount;
    //for testing
    console.log('second good one');
}




// --------------- qr code and submitting response --------------- 

document.getElementById('submit').addEventListener("click", submitButton)
// const outputText = document.getElementById('outputText');
// console.log("Here I am on my own....")

function submitButton() {
    console.log("Auto amps: " + autoAmpCount);
    console.log("Auto speakers: " + autoSpeakerCount);
    console.log("Alliance: " + selectedAlliance);
    console.log("Here I am on my own....");
    console.log("My name is " + document.getElementById("scoutname"));
    console.log("I scouted team " + document.getElementById("teamnum"));
    generateqr();
    // console.log("Auto amps: " + autoAmpCount)
    // console.log("Auto amps: " + autoAmpCount)
}

function generateqr() {
    jsobj = {
        "scoutname": document.getElementById('scoutname').value,
        "teamnumber": Number(document.getElementById("teamnum").value),
        "matchnumber": Number(document.getElementById("matchNum").value),
        "alliance": selectedAlliance,
        "autoamppoints": autoAmpCount * 2,
        "autospeakerpoints": autoSpeakerCount * 5,
        "autoleftzone": leftZoneBool,
    }
    
    var qr = new QRCode("QRCode", JSON.stringify(jsobj));
}
