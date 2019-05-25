
var usernameOut = document.getElementById('usernameOut');
var emailOut = document.getElementById('emailOut');
var nicOut = document.getElementById('nicOut');
var mobileOut = document.getElementById('mobileOut');
var passwordOut = document.getElementById('passwordOut');
var passwordConfirmOut = document.getElementById('passwordConfirmOut');

var username = document.myForm1.username;
var email = document.myForm1.email;
var nic = document.myForm1.nic;
var mobile = document.myForm1.mobile;
var password = document.myForm1.password;
var passwordConfirm = document.myForm1.passwordConfirm;

function checkUsername() {

	if (username.value == null || username.value == "" || username.value == " ") {
		usernameOut.innerHTML = "Username must not be Empty!";
		username.style.backgroundColor = "orange";
		return false;
	}

	else {
		if (username.value.length < 5) {
			usernameOut.innerHTML = "Username must have at least 5 characters";
			username.style.backgroundColor = "orange";
			return false;
		}

		else {
			usernameOut.innerHTML = "";
			username.style.backgroundColor = "lightgreen";
			return true;
		}
	}

}

function checkEmail() {
	if (email.value == null || email.value == "" || email.value == " ") {
		emailOut.innerHTML = "Email must not be Empty!";
		email.style.backgroundColor = "orange";
		return false;
	}

	else {

		var regExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

		if (email.value.match(regExpression)) {
			email.style.backgroundColor = "lightgreen";
			emailOut.innerHTML = "";
			return true;
		} else {
			emailOut.innerHTML = "Invalid Email";
			email.style.backgroundColor = "orange";
			return false;
		}

	}
}

function checkNIC() {
	if (nic.value == null || nic.value == "" || nic.value == " ") {
		nicOut.innerHTML = "NIC must not be Empty!";
		nic.style.backgroundColor = "orange";
		return false;
	}

	else {
		var regExpression = /^[0-9]{9}[vVxX]$/;
		if (nic.value.match(regExpression)) {
			nic.style.backgroundColor = "lightgreen";
			nicOut.innerHTML = "";
			return true;
		}

		else {
			nicOut.innerHTML = "Invalid NIC";
			nic.style.backgroundColor = "orange";
			return false;
		}
	}

}

function checkMobile() {
	if (mobile.value == null || mobile.value == "" || mobile.value == " ") {
		mobileOut.innerHTML = "Phone Number must not be Empty!";
		mobile.style.backgroundColor = "orange";
		return false;
	}

	else {

		var regExpression = /^\d{10}$/;
		if (mobile.value.match(regExpression)) {
			mobile.style.backgroundColor = "lightgreen";
			mobileOut.innerHTML = "";
			return true;
		}

		else {
			mobileOut.innerHTML = "Invalid Phone Number";
			mobile.style.backgroundColor = "orange";
			return false;
		}

	}

}

function checkPassword() {

	if (password.value == null || password.value == "" || password.value == " ") {
		passwordOut.innerHTML = "Password must not be Empty!";
		password.style.backgroundColor = "orange";
		return false;
	}

	else {

		if (password.value.length < 8) {
			passwordOut.innerHTML = "There should be at least 8 characters for Password!";
			password.style.backgroundColor = "orange";
			return false;
		}

		else {
			password.style.backgroundColor = "lightgreen";
			passwordOut.innerHTML = "";
			return true;
		}

	}

}

function checkPassMatch() {
	if (password.value == "" || password.value == null || password.value == " ") {
		passwordConfirmOut.innerHTML = "Passwords cannot be empty";
		passwordConfirm.style.backgroundColor = "orange";
		return false;
	}

	else {
		if (password.value == passwordConfirm.value) {
			passwordConfirm.style.backgroundColor = "lightgreen";
			passwordConfirmOut.innerHTML = "";
			return true;
		}

		else {
			passwordConfirmOut.innerHTML = "Passwords doesn't match";
			passwordConfirm.style.backgroundColor = "orange";
			return false;
		}
	}

}

function testValid() {
	if (checkUsername() == true && checkEmail() == true && checkNIC() == true
			&& checkMobile() == true && checkPassword() == true
			&& checkPassMatch() == true) {
		document.myForm1.submit();
		return true;
	}

	else {
		alert("One or more fields empty");
		return false;
	}
}

function testValidLogin(){
	if(checkEmail() == true){
		document.myform2.submit();
		return true;
	}
	
	else{
		return false;
	}
}
