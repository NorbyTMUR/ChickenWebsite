    //imported a qrcode library.
    src= "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"
    src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.2/jquery.min.js" 
    var blueAlliance = new Boolean(false);
    var redAlliance = new Boolean(false);
    var qr;

    //TODO: 
    //check that the options match the database exactly
    //add good comments
    
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

    function stepperCollect(id){
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
            
        }
    
    }

    function resetPluMinus(id){
        document.getElementById(id).value =  0;
    }

    function resetTextbox(id){
        document.getElementById(id).value =  '';
    }

    function resetCheckbox(id){
        if(document.getElementById(id) == null){}
        else{
            document.getElementById(id).checked = false;
        }
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
    
    function getTextInput(name){
        let input = document.getElementById(name).value;
        if(input == undefined){
            input = ""; 
        }
        return input;
       
    }

    function getNumberInput(id){
        let input = document.getElementById(id).value;
        if(input == null){
            input = 0;
        }
        return input;
    }
    
    // 
    function collectData(){
        let jsobj = {}
    
        //sets an alert if the important text fields aren't filled out.
        if(getNumberInput("teamnumber") == 0 || getNumberInput("matchnumber") == 0 || getTextInput("scoutname") == ""){
            alert("please fill out team name, team number, and scout name");
            //breaks the function so that it 
            //doesn't generate a no-name, no-team or no-match qr code.
            return;
        }        
        
        jsobj["scoutname"] = getTextInput("scoutname");
        jsobj["teamnumber"] = JSON.parse(getNumberInput("teamnumber"));
        jsobj["matchnumber"] = JSON.parse(getNumberInput("matchnumber"));
        //turns the blueAlliance/ redAlliance booleans into a string to match
        //the existing database.
        if(blueAlliance && !redAlliance){
            jsobj["alliance"] = "Blue";
        }
        else if (redAlliance && !blueAlliance){
            jsobj["alliance"] = "Red";
        }
        else{
            jsobj["alliance"] = "Select";
        }
        jsobj['password'] = "chick"
        //adds the properties to the js object, along with adding point values.
        jsobj['autoleftzone'] = fnChecked("autoleftzone") *2;
        jsobj["autoamppoints"] = pointCounter("autoamppoints") * 2;
        jsobj["autospeakerpoints"] = pointCounter("autospeakerpoints") * 5;
        jsobj["teleamppoints"] = pointCounter("teleamppoints");
        jsobj["telespeakerpoints"] = pointCounter("telespeakerpoints") * 2;
        jsobj["telespeakeramplifiedpoints"] = pointCounter("telespeakeramplifiedpoints") * 5;
        jsobj["drops"] = pointCounter("dropspoints");

        jsobj["climbed"] = fnChecked("climbed");
        jsobj["parked"] = fnChecked("parked");

        jsobj["traps"] = pointCounter("numtrapspoints") > 0;
        jsobj["numtraps"] = pointCounter("numtrapspoints");
        jsobj["offeredcoop"] = fnChecked("offeredcoop");
        jsobj["didcoop"] = fnChecked("didcoop");

        jsobj["harmony"] = fnChecked("harmony");
        jsobj["ampmike"] = fnChecked("ampmike") ? "Score" : "Miss";
        jsobj["sourcemike"] = fnChecked("sourcemike") ? "Score" : "Miss";
        jsobj["centermike"] = fnChecked("centermike") ? "Score" : "Miss";

        jsobj["extranotes"] = getTextInput("extranotes");
        
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
        
        //TODO API:
        // need password to database, need url --> find the rest API from the backend, 

        //resetting everything except the scout's names.
        resetTextbox("matchnumber");
        resetTextbox("teamnumber");
        //resetting the alliance buttons
        blueAlliance = false;
        redAlliance = false;
        document.getElementById("allianceRed").innerHTML = "Red";
        document.getElementById("allianceBlue").innerHTML = "Blue";
        //resetting everything else
        resetCheckbox("autoleftzone");
        resetPluMinus("autoamppoints");
        resetPluMinus("autospeakerpoints");
        resetPluMinus("teleamppoints");
        resetPluMinus("telespeakerpoints");
        resetPluMinus("telespeakeramplifiedpoints");
        resetPluMinus("dropspoints");

        resetCheckbox("climbed");
        resetCheckbox("parked");
        resetPluMinus("numtrapspoints");
        resetCheckbox("offeredcoop");
        resetCheckbox("didcoop");
        resetCheckbox("harmony");
        resetCheckbox("ampmike");
        resetCheckbox("sourcemike")
        resetCheckbox("centermike");
        resetTextbox("extranotes");  
    }

    
    function getDropdown(dropdownId) {
       let dropdown = document.getElementById(dropdownId);
       // get the index of the selected option
       //let selectedIndex = dropdown.selectedIndex;
       // get a selected option and text value using the text property
       return dropdown.options[dropdown.selectedIndex].text;
    }

    function collectPitData(){


        let pitjsobj = {}
        pitjsobj["scoutname"] = getTextInput("scoutname");
        pitjsobj["teamnumber"] = getNumberInput("teamnumber");
        pitjsobj["drivetype"] = getDropdown("drivetrain");
        pitjsobj["intake"] = getDropdown("intake");
        let bestAuto ="";
        for(let i=0; i<stepperCollect("bestautospeaker");i++){
            bestAuto += "Speaker ";
        }
        for(let j=0; j<stepperCollect("bestautospeaker");j++){
            bestAuto += "Amp ";
        }

        pitjsobj["bestauto"] = bestAuto;
        if(fnChecked("defense")==true){
            pitjsobj["defense"] = "yes";
        }
        else{
            pitjsobj["defense"] = "no";
        }

        pitjsobj["speaker"] = fnChecked("speaker");
        pitjsobj["amp"] = fnChecked("amp");
        pitjsobj["harmony"] = fnChecked("harmony");
        pitjsobj["understage"] = fnChecked("understage");
        pitjsobj["trap"] = fnChecked("trap");

        if(fnChecked("humanplayer")==true){
            pitjsobj["humanplayer"] = "yes";
        }
        else{
            pitjsobj["humanplayer"] = "no";
        }

        pitjsobj["extranotes"] = getTextInput("extranotes");

        pitjsonstr =JSON.stringify(pitjsobj)
        console.log(pitjsonstr);

        //testing working with jquery
        /**$.get("https://anjalijayanti-1.tiiny.site/", (data, status) => {
            console.log(data);
          });
         
        /**$.post("http://98.59.100.219/matchinput/v1/"+getNumberInput("teamnumber")+"/data/pit", pitjsonstr, (data, status) => {
            console.log(data);
        });*/
    }

     //check over the names again so I don't crash their database
            //get the backend url for posting  (RESTAPI), replace team_url  
            //
          /**$.post("https://team_url/v1/"+getNumberInput("teamnumber")+"/data/stand", jsonstr, (data, status) => {
            console.log(data);
          });*/


   
