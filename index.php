<?php
session_start();


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Login";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    
    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);

    if (empty($username) || empty($password)) {
        echo "<script>alert('Both fields are required.'); window.location.href = 'login.html';</script>";
        exit;
    }

    $query = "SELECT * FROM users WHERE (email = ? OR username = ?) LIMIT 1";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("ss", $username, $username); 
    $stmt->execute();
    $result = $stmt->get_result();

    
    if ($result->num_rows == 1) {
        $user = $result->fetch_assoc();
        $stored_password = $user['password'];

    
        if (password_verify($password, $stored_password)) {
            $_SESSION['logged_in'] = true;
            $_SESSION['user_id'] = $user['id']; 
            $_SESSION['username'] = $user['username']; 
            header("Location: home.html"); 
            exit;
        } else {
            echo "<script>alert('Invalid password. Please try again.'); window.location.href = 'login.html';</script>";
        }
    } else {
        echo "<script>alert('No account found with that username or email.'); window.location.href = 'login.html';</script>";
    }
}
?>
