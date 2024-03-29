
    var blueAlliance = new Boolean(false);
    var redAlliance = new Boolean(false);
    //might want to just keep this here so that it overrides the other button.
    //document.getElementById("allianceBlue").addEventListener("click", blueFunction);
    //document.getElementById("allianceRed").addEventListener("click", redFunction);
    
    function blueFunction() {
        document.getElementById("allianceBlue").innerHTML = "you clicked me";
        blueAlliance = document.getElementById("allianceBlue");
        blueAlliance = true;
        //overrides previous alliance setting with the button clicked most recently.
        redAlliance = false;
        //this will not print the actual value anyway because it hasn't gotten the value. Worry about this a bit later.
        //for testing
        console.log(blueAlliance);
    }
    function redFunction() {
        redAlliance = document.getElementById("allianceRed");
        blueAlliance = false;
        //for testing
        console.log(redAlliance);
    }

    var leftZoneBool = new Boolean([0]);
    //document.getElementById("leftZone").addEventListener("click", fnLeftZone);
    function fnLeftZone() {
        leftZoneBool = document.getElementById("leftZone");
        //for testing
        console.log(leftZoneBool);
    }

    //have one submit button at the end. Don't worry about the individual stepper (which is onclick anyway)
    //
    let autoAmpPtsInt = 0;
    document.getElementById("autoAmpPts").addEventListener("click", fnAutoAmpPts);
    function fnAutoAmpPts() {
        autoAmpPtsInt = document.getElementById("autoAmpPts").value;
        //for testing
        console.log(autoAmpPtsInt);
    }

    // JavaScript to handle toggle switch state change and display text accordingly
    //TODO: Figure out how to collect the data in a json file (hosted maybe on postgre sql), work from there.
    //TODO: finish adding the fields
    const toggleInput = document.getElementById('allianceBlue');
    jsobj = {}
    jsobj['alliance'] = toggleInput
    // const outputText = document.getElementById('outputText');
    console.log("Here I am on my own....")