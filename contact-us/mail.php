<?php
	$name = mysqli_real_escape_string($connect, $_POST['name']);
    $email = mysqli_real_escape_string($connect, $_POST['email']);
    $message = mysqli_real_escape_string($connect, $_POST['message']);

    $subject = "New message from ".$name;
	$txt = "Start of message\r\n\r\n".$message."\r\n\r\nEnd of message";
	$headers = "From: tedxthemsuniversitybaroda.com\r\nReply-To: ".$email;
	mail("tedxthemsuniversitybaroda@gmail.com", $subject, $txt, $headers);
?>