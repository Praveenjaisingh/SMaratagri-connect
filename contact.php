<?php
include 'db1.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));


    $to = "youremail@example.com";  
    $subject = "New message from Smart Agri-Connect contact form";

    $email_content = "
    <html>
    <head>
        <title>New Message from Smart Agri-Connect</title>
    </head>
    <body>
        <h2>New message from Smart Agri-Connect Contact Form</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Message:</strong></p>
        <p>$message</p>
    </body>
    </html>
    ";

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
    $headers .= "From: $email" . "\r\n";  

    if (mail($to, $subject, $email_content, $headers)) {
        echo "<script>alert('Thank you for contacting us! We will get back to you soon.'); window.location.href = 'contact.html';</script>";
    } else {
        echo "<script>alert('Sorry, something went wrong. Please try again later.'); window.location.href = 'contact.html';</script>";
    }
}
?>
