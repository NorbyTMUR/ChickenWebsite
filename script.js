// variables for all stats needed
var selectedAlliance = null
var autoSpeakerCount = 0
var autoAmpCount = 0

const leftZone = document.getElementById("leftZone");

// click listener for all buttons
document.getElementById("allianceBlue").addEventListener("click", selectBlueAlliance);
document.getElementById("allianceRed").addEventListener("click", selectRedAlliance);
document.getElementById("addAutoSpeaker").addEventListener("click", addAutoSpeaker);
document.getElementById("subAutoSpeaker").addEventListener("click", subAutoSpeaker);
document.getElementById("addAutoAmp").addEventListener("click", addAutoAmp);
document.getElementById("subAutoAmp").addEventListener("click", subAutoAmp);

            
// functions to modify values
function selectBlueAlliance() {
    document.getElementById("allianceBlue").innerHTML = "you clicked me";
    document.getElementById('allianceRed').textContent = 'Red'
    blueAlliance = document.getElementById("allianceBlue");
    selectedAlliance = "Blue"
    //this will not print the actual value anyway because it hasn't gotten the value. Worry about this a bit later.
    //for testing
    console.log(blueAlliance);
}

function selectRedAlliance() {
    redAlliance = document.getElementById("allianceRed");
    document.getElementById("allianceRed").textContent = 'you clicked me';
    document.getElementById('allianceBlue').textContent = 'Blue'
    selectedAlliance = "Red"
    //for testing
    console.log(redAlliance);
    console.log(leftZone.checked);

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
    console.log("My name is " + document.getElementById("scoutname").value);
    console.log("I scouted team " + document.getElementById("teamnum").value);
    generateqr();
    // console.log("Auto amps: " + autoAmpCount)
    // console.log("Auto amps: " + autoAmpCount)

    console.log("data input successful!")
    reset();
}

var qr;

function generateqr() {
    
    jsobj = {
        "scoutname": document.getElementById('scoutname').value,
        "teamnumber": Number(document.getElementById("teamnum").value),
        "matchnumber": Number(document.getElementById("matchNum").value),
        "alliance": selectedAlliance,
        "autoamppoints": autoAmpCount * 2,
        "autospeakerpoints": autoSpeakerCount * 5,
        "autoleftzone": leftZone.checked,
    }
    if(qr instanceof QRCode) {
        qr.clear();
        console.log("yes it is");
        qr.makeCode(JSON.stringify(jsobj));
    }else {
        qr = new QRCode("QRCode", JSON.stringify(jsobj));
    }
    
}

function reset() {
    console.log("we are resetting")

    selectedAlliance = null
    autoSpeakerCount = 0
    autoAmpCount = 0

    document.getElementById("speakerAutoScores").textContent = "Speaker Scores: " + autoSpeakerCount;
    document.getElementById("autoAmpScores").textContent = "Amp Scores: " + autoAmpCount;
    document.getElementById("leftZone").checked = false;

    console.log("we have reset")
}