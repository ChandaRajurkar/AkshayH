<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get data from form
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Validate email (check if it's not empty and is a valid email address)
    if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $to = "rajurkarchanda@gmail.com"; // Replace with your email address
        $subject = "Message from Contact Form";
        $txt = "Name: " . $name . "\nEmail: " . $email . "\nMessage: " . $message;
        $headers = "From: " . $email;

        // Send the email
        if (mail($to, $subject, $txt, $headers)) {
            // Email sent successfully
            header("Location: thank_you.html"); // Redirect to a thank-you page
            exit(); // Exit to prevent further execution
        } else {
            // Email sending failed
            echo "Email sending failed. Please try again later.";
        }
    } else {
        // Invalid email address
        echo "Invalid email address. Please provide a valid email.";
    }
} else {
    // Redirect users who access this page directly
    header("Location: contact_form.html");
    exit();
}
?>
