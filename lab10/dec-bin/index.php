<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Decimal to Binary Converter</title>
    <script>
        function convertToBinary() {
            var decimalNumber = document.getElementById("decimalNumber").value;
            var binaryNumber = parseInt(decimalNumber, 10).toString(2);
            document.getElementById("binaryResult").innerHTML = "Binary Equivalent: " + binaryNumber;
        }
    </script>
</head>
<body>
    <h2>Decimal to Binary Converter</h2>
    <form>
        <label for="decimalNumber">Enter Decimal Number:</label>
        <input type="text" id="decimalNumber" name="decimalNumber">
        <button type="button" onclick="convertToBinary()">Convert</button>
    </form>
    <div id="binaryResult"></div>
</body>
</html>
