<html>
<head>
    <title>Website</title> 
    <script>
     
    // Calculation 1

        function sumPositiveNumbers(numbers){

        let totalSum = 0;

        numbers.forEach(num => {
             if(num > 0){

                totalSum = totalSum + num;
                console.log(num);
            }        
    
        });
        let result = totalSum;
        return result;
}
    console.log(sumPositiveNumbers([2, 3, 4, 5]));


    // Calculation 2
    function calculateAverage(numbers) {
        let sum = 0;
        numbers.forEach(num => {
            sum = sum + num;

        })
        const average = Math.floor(sum / numbers.length);
        return average;
        }
        
    console.log(calculateAverage([5, 4, 6, 7]));

    // Calculation 3

    function checkIfArrayContainsValue(arr, value) {
        return arr.includes(value);
        }
    
    console.log(checkIfArrayContainsValue([2, 3, 4, 5, 6], 3));


    </script>
</head>

<body>
    <h1>Welcome </h1>
    <p>Page content goes here</p>

</body>
</html>