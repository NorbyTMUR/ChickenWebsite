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
    
    // JavaScript to handle toggle switch state change and display text accordingly
    //TODO: Figure out how to collect the data in a json file (turns into a qrcode)
    
    function generateQr(input) { 
        let qrcode = new QRCode(document.querySelector(".qrcode")); 

        qrcode.makeCode( 
            document.querySelector( 
                input
            ).value); 
    }
    
    function collectData(){
        let jsobj = {}
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
        generateQr(JSON.stringify(jsobj));
        
        console.log("Here I am on my own....");
        
    }

   
