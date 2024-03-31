    //imported a qrcode library.
    src= "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"
    
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

    function pluMinus(id, inputField){
        //let increment = document.getElementById(id);
        let increment = id.includes("plus");
        
        //let currentVal = document.getElementById().value;
        console.log("increment = " + increment )
        if(increment == true){
            id = id.replace("plus","");
            let currentId = id + "points";
            currentVal = document.getElementById(currentId).value;
            currentVal++;
            document.getElementById(currentId).value =  currentVal;
            console.log("plus " +currentVal);
            return
        }
        else{
            id = id.replace("minus","");
            let currentId = id + "points";
            currentVal = document.getElementById(currentId).value;
            if(currentVal > 0){
                currentVal--;
            }
            else{
                currentVal = 0;
            }
            document.getElementById(currentId).value =  currentVal;
            console.log("minus " +currentVal);
            return
        }
        console.log("wth " + currentVal);
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
    let jsobj = {}
    
    function stepperCollect(id){
        jsobj["autoamppoints"] = pluMinus(id, "autoamppoints");
        /**jsobj["autoamppoints"] = pluMinus(id, "autoamppoints");
        jsobj["autospeakerpoints"] = pluMinus(id, "autospeakerpoints");
        jsobj["telespeakerpoints"] = pluMinus(id, "telespeakerpoints")/6;
        jsobj["telespeakeramplifiedpoints"] = pluMinus(id, "telespeakeramplifiedpoints");
        jsobj["passes"] = pluMinus(id, "passespoints");
        jsobj["drops"] = pluMinus(id, "dropspoints");*/
    }
    let hasBeenSubmitted = false;
    function collectData(){
        
        jsobj["teamnumber"] = getTextbox("teamnumber");
        if(getTextbox("teamnumber") == "" || getTextbox("matchnumber") == "" || getTextbox("scoutname") == ""){
            alert("please fill out team name, team number, and scout name");
            //breaks the function so that it 
            //doesn't generate a no-name, no-team or no-match qr code.
            return;
        }

        jsobj["matchnumber"] = getTextbox("matchnumber");
        jsobj["scoutname"] = getTextbox("scoutname");
        

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

        jsobj["passes"] = pointCounter("passespoints");
        jsobj["drops"] = pointCounter("dropspoints");

        jsobj["climbed"] = fnChecked("climbed") * 3;
        jsobj["parked"] = fnChecked("parked");
        jsobj["traps"] = fnChecked("traps");
        
        jsobj["numtraps"] = pointCounter("numtrapspoints") * 5;

        jsobj["offeredcoop"] = fnChecked("offeredcoop");
        jsobj["didcoop"] = fnChecked("didcoop");
        
        jsobj["ampmike"] = fnChecked("ampmike");
        jsobj["sourcemike"] = fnChecked("sourcemike");
        jsobj["centermike"] = fnChecked("centermike");

        jsobj["extranotes"] = getTextbox("extranotes");

        console.log(JSON.stringify(jsobj))
        
        var qr;

        if(qr instanceof QRCode) {
            qr.clear();
            qr.makeCode(JSON.stringify(jsobj));
        }else {
            qr = new QRCode("QRCode", JSON.stringify(jsobj));
        }

        qr;
        
        console.log("Here I am on my own....");

        hasBeenSubmitted = true;
        
    }

   
