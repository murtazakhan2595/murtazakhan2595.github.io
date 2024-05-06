<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if username and password are provided
    if (!empty($_POST["username"]) && !empty($_POST["password"])) {
        // Check if username and password match
        if ($_POST["username"] === "Galgotias" && $_POST["password"] === "university") {
            // Redirect to welcome page
            header("Location: welcome.html");
            exit;
        } else {
            // Redirect to sorry page
            header("Location: sorry.html");
            exit;
        }
    } else {
        // Redirect back to login page if username or password is empty
        header("Location: index.php");
        exit;
    }
}
?>
