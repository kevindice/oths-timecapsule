<?
date_default_timezone_set('EST');
$file = fopen("output/contact.html", 'a');

$head = "Timestamp:  " . date("F nS, Y, G:i:s") . "  IP:  " . $_SERVER['REMOTE_ADDR'];
$vars = '';
foreach ($_POST as $key => $value) {
	$vars .= $key . " => " . $value . "<br>";
}


fwrite($file, "<h3>" . $head . "</h3>" . "<hr><br>" . $vars . "<br><br><br>");
fclose($file);
print "done";
?>