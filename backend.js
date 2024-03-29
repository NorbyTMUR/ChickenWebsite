
    var blueAlliance = new Boolean(false);
    var redAlliance = new Boolean(false);
    //might want to just keep this here so that it overrides the other button.
    
    function redFunction() {
        redAlliance = true;
        blueAlliance = false;
        document.getElementById("allianceRed").innerHTML = "you clicked me";
        console.log(blueAlliance);
    }

    function blueFunction(){
        blueAlliance = true;
        redAlliance = false;
        document.getElementById("allianceBlue").innerHTML = "you clicked me";    
        //for testing
        console.log(redAlliance);
    }

    var leftZoneBool = new Boolean(false);
    function fnLeftZone() {
        //TODO: something's going on with this boolean... it prints 'on' to the console no matter what.
        leftZoneBool = document.getElementById("leftZone").value;
        console.log(leftZoneBool);
    }

    /**
     * @precondition takes a string name
     */
    let pts = 0;
    function pointCounter(name){
        pts = document.getElementById(name).value;
        console.log(pts);
    }
    
    // JavaScript to handle toggle switch state change and display text accordingly
    //TODO: Figure out how to collect the data in a json file (turns into a qrcode)
    
    const toggleInput = document.getElementById('allianceBlue');
    jsobj = {}
    jsobj['alliance'] = toggleInput
    console.log("Here I am on my own....");

    function collectData(){
        fnLeftZone();
        
        pointCounter("autoAmpPts") * 2;
        pointCounter("autoSpPts") * 5;
        pointCounter("teleAmpPts");
        pointCounter("teleSpPts") * 2;
    }