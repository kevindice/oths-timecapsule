$(document).foundation();

$(document).ready(function() {
	$("#form1").validate({
		submitHandler: function() {
			//submit the form
			$.post("contact.php", //post
				$("#form1").serialize(), 
				function(data){
				  //if message is sent
				  if (data == 'Sent') {
				    $("#message1").fadeIn(); //show confirmation message
				    //$("#form1")[0].reset(); //reset fields
				}
				// Scroll down to next page
				document.getElementById('message1').style.display='block';
				document.getElementById('questions').style.display='block';
				document.getElementById('footer2').style.display='none';
				document.getElementById('footer3').style.display='block';
				document.getElementById('fir1').value = document.getElementById('fir0').value;
				document.getElementById('fir2').value = document.getElementById('fir0').value;
				document.getElementById('fir3').value = document.getElementById('fir0').value;
				document.getElementById('las1').value = document.getElementById('las0').value;
				document.getElementById('las2').value = document.getElementById('las0').value;
				document.getElementById('las3').value = document.getElementById('las0').value;
				document.getElementById('stu1').value = document.getElementById('stu0').value;
				document.getElementById('stu2').value = document.getElementById('stu0').value;
				document.getElementById('stu3').value = document.getElementById('stu0').value;
				$('#questions').ScrollTo({duration: 1000, easing: 'swing'});
			});
			return false; //don't let the page refresh on submit.
		}
	}); //validate the form

	$("#form2").validate({
		submitHandler: function() {
			//submit the form
			$.post("questions.php", //post
				$("#form2").serialize(), 
				function(data){
				  //if message is sent
				  if (data == 'Sent') {
				    $("#message2").fadeIn(); //show confirmation message
				    $("#form2")[0].reset(); //reset fields
				}
				// Scroll down to next page
				document.getElementById('footer3').style.display="none";
				document.getElementById('footer4').style.display="block"
				document.getElementById('message2').style.display='block';
				document.getElementById('favorite').style.display='block'; $('#favorite').ScrollTo({duration: 1000, easing: 'swing'});
			});
			return false; //don't let the page refresh on submit.
		}
	}); //validate the form


	$("#form3").validate({
		submitHandler: function() {
			//submit the form
			$.post("favorite.php", //post
				$("#form3").serialize(), 
				function(data){
				  //if message is sent
				  if (data == 'Sent') {
				    $("#message3").fadeIn(); //show confirmation message
				    $("#form3")[0].reset(); //reset fields
				}
				// Scroll down to next page
				document.getElementById('footer4').style.display="none";
				document.getElementById('footer5').style.display="block"
				document.getElementById('message3').style.display='block';
				document.getElementById('pictures-section').style.display='block'; $('#pictures-section').ScrollTo({duration: 1000, easing: 'swing'});
			});
			return false; //don't let the page refresh on submit.
		}
	}); //validate the form



});