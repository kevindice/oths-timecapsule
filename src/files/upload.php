<?php


include("SimpleImage.php");
// A list of permitted file extensions
$allowed = array('png', 'jpg', 'gif', 'mp4', '3gp', 'ogg', 'mp3', 'jpeg', 'wmv', 'wma', 'wav', 'amr', 'flv', 'mov');

if(isset($_SERVER['REMOTE_ADDR']) &&
	isset($_FILES['upl']) && 
	isset($_POST['first']) &&
	isset($_POST['last']) &&
	isset($_POST['student_number']) && 
	$_FILES['upl']['error'] == 0 && 
	preg_match('/^21\d{4}$/', $_POST['student_number'])){

	$extension = pathinfo($_FILES['upl']['name'], PATHINFO_EXTENSION);

	if(!in_array(strtolower($extension), $allowed)){
		echo '{"status":"error"}';
		exit;
	}

	$file_name = $_POST['student_number'].'-'.htmlspecialchars($_POST['first']).'-'.htmlspecialchars($_POST['last']).'-'.date('U').'-'.$_SERVER['REMOTE_ADDR'].'-'.$_FILES['upl']['name'];	

	if(move_uploaded_file($_FILES['upl']['tmp_name'], 'uploads/'. $file_name)){
		$image = new SimpleImage();
		$image->load('uploads/' . $file_name);
		$image->resizeToWidth(300);
		$image->save('uploads/thumb/' . $file_name);
		if($image->fail == True) $file_name = 'checkmark.png';
		echo '{"status":"success", "file":"' . 'http://othstimecapsule.us/uploads/thumb/' . $file_name . '"}';
		exit;
	}
}

echo '{"status":"error"}';
exit;
