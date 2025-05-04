<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = filter_var(trim($_POST["email"]), FILTER_VALIDATE_EMAIL);

    if ($email) {
        $userExists = true; 

        if ($userExists) {
            $token = bin2hex(random_bytes(32));
            $resetLink = "https://yourdomain.com/reset-password.php?token=$token";

            $subject = "Smart Agri-Connect - Password Reset";
            $message = "Click the link to reset your password: $resetLink";
            $headers = "From: no-reply@smartagri.com";

            if (mail($email, $subject, $message, $headers)) {
                echo "success";
            } else {
                echo "error_sending";
            }
        } else {
            echo "not_found";
        }
    } else {
        echo "invalid_email";
    }
} else {
    echo "invalid_request";
}
?>
