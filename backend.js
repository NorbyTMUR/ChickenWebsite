    //imported a qrcode library.
    src= "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"
    //also should input these booleans into the json
    var blueAlliance = new Boolean(false);
    var redAlliance = new Boolean(false);
    
    function redFunction() {
        redAlliance = true;
        blueAlliance = false;
        document.getElementById("allianceRed").innerHTML = "you clicked me";
        document.getElementById("allianceBlue").innerHTML = "Blue";
        console.log(redAlliance);
    }

    function blueFunction(){
        blueAlliance = true;
        redAlliance = false;
        document.getElementById("allianceBlue").innerHTML = "you clicked me";  
        document.getElementById("allianceRed").innerHTML = "Red";  
        //for testing
        console.log(redAlliance);
    }

    //use for checkbox class only
    function fnChecked(elementName) {
        let isChecked = document.getElementById(elementName).checked;
        console.log(isChecked);
        return isChecked == true ? 1:0
    }

    /**
     * @precondition takes a string name
     */
    
    function pointCounter(name){
        let pts = document.getElementById(name).value;
        if(pts == null){
            pts=0;
        }
        console.log(pts);
        return pts;
    }
    
    let alertNeeded = false;
    function getTextbox(name){
        let input = document.getElementById(name).value;
        if(input == null){
            input = "";
            alertNeeded = true;
        }
        return input;
       
    }
   
    // JavaScript to handle toggle switch state change and display text accordingly

    
    function collectData(){
        let jsobj = {}

        jsobj["teamNum"] = getTextbox("teamNum");
        jsobj["matchNum"] = getTextbox("matchNum");

        if(blueAlliance ==true && redAlliance == false){
            jsobj["alliance"] = "blue";
        }
        else if (redAlliance == true && blueAlliance == false){
            jsobj["alliance"] = "red";
        }
        else{
            jsobj["alliance"] = "not selected";
        }

        jsobj['leftZone'] = fnChecked("leftZone") *2;
        jsobj["autoAmpPts"] = pointCounter("autoAmpPts") * 2;
        jsobj["autoSpPts"] = pointCounter("autoSpPts") * 5;
        jsobj["teleAmpPts"] = pointCounter("teleAmpPts");
        jsobj["teleSpPts"] = pointCounter("teleSpPts") * 2;
        jsobj["teleSpAmplifiedPts"] = pointCounter("teleSpAmplifiedPts") * 5;

        jsobj["passes"] = pointCounter("passes");
        jsobj["drops"] = pointCounter("drops");

        jsobj["climbed"] = fnChecked("climbed") * 3;
        jsobj["parked"] = fnChecked("parked");
        jsobj["traps"] = fnChecked("traps");

        jsobj["trapsNum"] = pointCounter("trapsNum") * 5;

        jsobj["offeredcoop"] = fnChecked("offeredcoop");
        jsobj["didcoop"] = fnChecked("didcoop");
        //maybe create a further divider for this, or have these appear if the human 
        //player made their throw.
        jsobj["ampmike"] = fnChecked("ampmike");
        jsobj["sourcemike"] = fnChecked("sourcemike");
        jsobj["centermike"] = fnChecked("centermike");
        console.log(JSON.stringify(jsobj))
        
        var qr = new QRCode("QRCode", JSON.stringify(jsobj));
        
        qr;

        if(alertNeeded == true){
         window.alert("please fill out all fields.");
        }
        
        console.log("Here I am on my own....");

        /**if(alertNeeded == true){
            return alertNeeded;
        }*/
        
    }

   
