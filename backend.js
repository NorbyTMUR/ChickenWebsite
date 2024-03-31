    //imported a qrcode library.
    src= "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"
    
    var blueAlliance = new Boolean(false);
    var redAlliance = new Boolean(false);
    var qr;

    //TODO: include harmony was achieved/not
    //unhide the trap score or hide the buttons with it
    //add a reset for everything except for the scout name after every submission
    //refactor the data options so they match the database exactly
    
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
        return document.getElementById(elementName).checked;
    }

    function pluMinus(id, inputField){
        //let increment = document.getElementById(id);
        let increment = id.includes("plus");
        
        //let currentVal = document.getElementById().value;
        console.log("increment = " + increment )
        if(increment){
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
    
    // 
    function collectData(){
        //sets an alert if the important text fields aren't filled out.
        jsobj["teamnumber"] = getTextbox("teamnumber");
        jsobj["matchnumber"] = getTextbox("matchnumber");
        jsobj["scoutname"] = getTextbox("scoutname");
        
        if(blueAlliance && !redAlliance){
            jsobj["alliance"] = "Blue";
        }
        else if (redAlliance && !blueAlliance){
            jsobj["alliance"] = "Red";
        }
        else{
            jsobj["alliance"] = null;
        }
        if(getTextbox("teamnumber") == "" || getTextbox("matchnumber") == "" || getTextbox("scoutname") == ""){
            alert("please fill out team name, team number, and scout name");
            //breaks the function so that it 
            //doesn't generate a no-name, no-team or no-match qr code.
            return;
        }        


        
        
        //turns the blueAlliance/ redAlliance booleans into a string to match
        //the existing database.
        if(blueAlliance ==true && redAlliance == false){
            jsobj["alliance"] = "blue";
        }
        else if (redAlliance == true && blueAlliance == false){
            jsobj["alliance"] = "red";
        }
        else{
            jsobj["alliance"] = "not selected";
        }

        //adds the properties to the js object, along with adding point values.
        jsobj['autoleftzone'] = fnChecked("autoleftzone") *2;
        jsobj["autoamppoints"] = pointCounter("autoamppoints") * 2;
        jsobj["autospeakerpoints"] = pointCounter("autospeakerpoints") * 5;
        jsobj['autoleftzone'] = fnChecked("autoleftzone");
        jsobj["teleamppoints"] = pointCounter("teleamppoints");
        jsobj["telespeakerpoints"] = pointCounter("telespeakerpoints") * 2;
        jsobj["telespeakeramplifiedpoints"] = pointCounter("telespeakeramplifiedpoints") * 5;

        // jsobj["passes"] = pointCounter("passespoints"); This isn't in backend right now
        jsobj["drops"] = pointCounter("dropspoints");

        jsobj["climbed"] = fnChecked("climbed");
        jsobj["parked"] = fnChecked("parked");

        jsobj["traps"] = fnChecked("traps");
        jsobj["numtraps"] = pointCounter("numtrapspoints");
        jsobj["offeredcoop"] = fnChecked("offeredcoop");
        jsobj["didcoop"] = fnChecked("didcoop");
        //add data point for harmony
        
        jsobj["ampmike"] = fnChecked("ampmike") ? "Score" : "Miss";
        jsobj["sourcemike"] = fnChecked("sourcemike") ? "Score" : "Miss";
        jsobj["centermike"] = fnChecked("centermike") ? "Score" : "Miss";

        jsobj["extranotes"] = getTextbox("extranotes");
        
        // turns json object into a string (qr codes only take strings).
        jsonstr =JSON.stringify(jsobj)
        console.log(jsonstr)
        
        //Curtis's qrcode generator - clears previous qr codes.
        if(qr instanceof QRCode) {
            qr.clear();
            qr.makeCode(jsonstr);
        } else {
            qr = new QRCode("QRCode", jsonstr);
        }        
    }

   
