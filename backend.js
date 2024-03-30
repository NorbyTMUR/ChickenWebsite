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
    
    function getTextbox(name){
        let input = document.getElementById(name).value;
        if(input == undefined){
            input = ""; 
        }
        return input;
       
    }
   
    // JavaScript to handle toggle switch state change and display text accordingly

    
    function collectData(){
        let jsobj = {}

        jsobj["teamnumber"] = getTextbox("teamnumber");
        if(getTextbox("teamnumber") == ""){
            alert("please fill out all fields");
        }
        jsobj["matchnumber"] = getTextbox("matchnumber");
        if(getTextbox("matchnumber") == ""){
            alert("please fill out all fields");
        }

        jsobj["scoutname"] = getTextbox("scoutname");
        if(getTextbox("scoutname") == ""){
            alert("please fill out all fields");
        }

        if(blueAlliance ==true && redAlliance == false){
            jsobj["alliance"] = "blue";
        }
        else if (redAlliance == true && blueAlliance == false){
            jsobj["alliance"] = "red";
        }
        else{
            jsobj["alliance"] = "not selected";
        }

        jsobj['autoleftzone'] = fnChecked("autoleftzone") *2;
        jsobj["autoamppoints"] = pointCounter("autoamppoints") * 2;
        jsobj["autospeakerpoints"] = pointCounter("autospeakerpoints") * 5;
        jsobj["teleamppoints"] = pointCounter("teleamppoints");
        jsobj["telespeakerpoints"] = pointCounter("telespeakerpoints") * 2;
        jsobj["telespeakeramplifiedpoints"] = pointCounter("telespeakeramplifiedpoints") * 5;

        jsobj["passes"] = pointCounter("passes");
        jsobj["drops"] = pointCounter("drops");

        jsobj["climbed"] = fnChecked("climbed") * 3;
        jsobj["parked"] = fnChecked("parked");
        jsobj["traps"] = fnChecked("traps");
        //!!add bool harmony
        //add trap bool
        //add extranotes String!!
        jsobj["numtraps"] = pointCounter("numtraps") * 5;

        jsobj["offeredcoop"] = fnChecked("offeredcoop");
        jsobj["didcoop"] = fnChecked("didcoop");
        
        jsobj["ampmike"] = fnChecked("ampmike");
        jsobj["sourcemike"] = fnChecked("sourcemike");
        jsobj["centermike"] = fnChecked("centermike");

        jsobj["extranotes"] = getTextbox("extranotes");

        console.log(JSON.stringify(jsobj))
        
        var qr = new QRCode("QRCode", JSON.stringify(jsobj));
        
        qr;
        
        console.log("Here I am on my own....");
    }

   
