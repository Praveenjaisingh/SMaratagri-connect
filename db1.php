<?php

$host = 'localhost';        
$username = 'root';         
$password = '';             
$dbname = 'Contact'; 

$conn = new mysqli($host, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Successfully connected to the database!";
?>
