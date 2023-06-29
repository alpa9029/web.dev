<html>
<head>
    <title>Ale Website</title> 
    <script>
       
       function calculateWaterDrinks(hoursCycling){
        let waterAmount = 0;
        return Math.round(hoursCycling * 0.5);
       }

       function generateYearsList(yearsOld){
        let yearList = "";
        let i = 1;
        while(i <= yearsOld){
            yearList = yearList + i + ",";
            i = i + 1;
        }
        return yearList;
       }

       function calculateCapitalObtained(amount, interest, years){
        let capitalInfo = "";
        let principal = amount;
        let i = 1;
        while(i <= years){
            if(i === years){
                principal = principal * (1 + interest/100);
                capitalInfo = capitalInfo + "Principal after " + years + " years: " + principal + "€";
                i = i + 1;
            }
            else {
                principal = principal * (1 + interest/100);
                capitalInfo = capitalInfo + "Capital after " + i + " years: " + principal + "€,";
                i = i + 1;
            }
        }
        return capitalInfo;
       }



       let ageMessage = prompt("How old are you?");
       let yearsList = generateYearsList(ageMessage);
       alert(yearsList);

       let investmentMessage = prompt("Amount of investment");
       let yearsMessage = prompt("How many years");
       let interestMessage = prompt("Interest rate in %");
       let capitalResult = calculateCapitalObtained(investmentMessage, interestMessage, yearsMessage);
       alert(capitalResult);


    </script>
</head>

<body>
    <h1>Page</h1>
    <p>Page content goes here</p>

</body>
</html>
