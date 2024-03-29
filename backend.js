
    var blueAlliance = new Boolean(false);
    var redAlliance = new Boolean(false);
    //might want to just keep this here so that it overrides the other button.
    
    function redFunction() {
        redAlliance = true;
        blueAlliance = false;
        document.getElementById("allianceRed").innerHTML = "you clicked me";
        document.getElementById("allianceBlue").innerHTML = "Blue";
        console.log(blueAlliance);
    }

    function blueFunction(){
        blueAlliance = true;
        redAlliance = false;
        document.getElementById("allianceBlue").innerHTML = "you clicked me";  
        document.getElementById("allianceRed").innerHTML = "Red";  
        //for testing
        console.log(redAlliance);
    }


    var isChecked = new Boolean(false);
    function fnChecked(elementName) {
        isChecked = document.getElementById("elementName").checked;
        console.log(isChecked);
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
        //fnChecked("leftZone") *2;
        pointCounter("autoAmpPts") * 2;
        pointCounter("autoSpPts") * 5;
        pointCounter("teleAmpPts");
        pointCounter("teleSpPts") * 2;
        pointCounter("teleSpAmplifiedPts") * 5;

        pointCounter("passes");
        pointCounter("drops");

        //fnChecked("climbed") * 3;
    }