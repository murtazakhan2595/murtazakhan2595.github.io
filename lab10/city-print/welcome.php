<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
</head>
<body>
    <?php
    // Check if city is submitted via POST method
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Retrieve the city entered by the user
        $city = $_POST["city"];
        // Display the welcome message
        echo "<h2>Welcome to $city!</h2>";
    } else {
        // If city is not submitted, display an error message
        echo "<p>Error: City not submitted.</p>";
    }
    ?>
</body>
</html>
