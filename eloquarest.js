// Include the request library for Node.js  
    var request = require('request');  
      
    //  Basic Authentication credentials  
    var username = "XXX\\XXX";  
    var password = "XXXXXXXX";  
    var authenticationHeader = "Basic " + new Buffer(username + ":" + password).toString("base64");  
    var result;
    var statementName;
    var statementStatus;
    // Search for Custom Data Objects Affiliate Falculty form 
    request(  
        {  
            url : "https://secure.p03.eloqua.com/API/REST/1.0/data/customObject/27?depth=complete",  
            headers : { "Authorization" : authenticationHeader }  
        },  
        function (error, response, body) {  
            var parsedData = JSON.parse(body);//convert text from Eloqua API to JSON file
            var missionStatement = [];
            var missionStatementName = [];
            var missionStatementStatus = [];            
            for (var i = 0; i < parsedData.elements.length ; i++) {                
                var individualStatement = "";//I was put on this earth to text
                var individualName = "";//first and last name of contact
                var individualStatus = "";//faculty, student, or prospect
                //Get text submission from form and push into array
                if (parsedData.elements[i].fieldValues[0].value === 'Approved') {
                    individualStatement += (parsedData.elements[i].fieldValues[4].value );
                    missionStatement.push(individualStatement);
                    //individualName += (parsedData.elements[i].fieldValues[3].value + " " + parsedData.elements[i].fieldValues[4].value);
                    individualName += (parsedData.elements[i].fieldValues[3].value);
                    missionStatementName.push(individualName);
                    individualStatus += (parsedData.elements[i].fieldValues[1].value);
                    missionStatementStatus.push(individualStatus);
                };
             };
            result = missionStatement.reverse();
            statementName = missionStatementName.reverse();
            statementStatus = missionStatementStatus.reverse();
            displayResult();
        }

    );

    function displayResult() {
       //console.log(result);
       totalMission = result;
       totalNames = statementName;
       totalStatus = statementStatus; 
    }

