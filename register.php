<?php

session_start();


$servername = "localhost";
$username = "root"; 
$password = "";     
$dbname = "Register"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['register'])) {
    $user = htmlspecialchars(trim($_POST['username']));
    $email = htmlspecialchars(trim($_POST['email']));
    $pass = trim($_POST['password']);
    $cpass = trim($_POST['confirm_password']);

    if ($pass !== $cpass) {
        echo "<script>alert('Passwords do not match!'); window.location.href='register.html';</script>";
        exit();
    }

    $hashed_password = password_hash($pass, PASSWORD_DEFAULT);


    $check_email = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($check_email);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        echo "<script>alert('Email already registered! Please login.'); window.location.href='login.html';</script>";
        $stmt->close();
        $conn->close();
        exit();
    }
    $stmt->close();


    $insert = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($insert);
    $stmt->bind_param("sss", $user, $email, $hashed_password);

    if ($stmt->execute()) {
        echo "<script>alert('Registration successful! You can now login.'); window.location.href='login.html';</script>";
    } else {
        echo "<script>alert('Error: Could not register. Please try again.'); window.location.href='register.html';</script>";
    }

    $stmt->close();
    $conn->close();
}
?>
