<?php

if(isset($_POST['message'])){

	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
    
	
	$to      = 'hello@jnguyen.space';
	$subject = 'Hi Vitris!';

	$headers = 'From: '. $email . "\r\n" .
    'Reply-To: '. $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	$status = mail($to, $subject, $message, $headers);

	if($status == TRUE){	
		$res['sendstatus'] = 'done';
	
		//Edit your message here
		$res['message'] = 'Form Submission Successful!';
    }
	else{
		$res['message'] = 'Failed to send mail. Please e-mail hello@vitriswireless.com through your e-mail provider directly!';
	}
	
	
	echo json_encode($res);
}

?>