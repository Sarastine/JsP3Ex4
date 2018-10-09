function verify() {
	if (document.getElementById('password').value === document.getElementById('confirmPassword').value) {
		document.getElementById('password').className = 'green';
		document.getElementById('confirmPassword').className = 'green';
	} else {
		document.getElementById('password').className = 'red';
		document.getElementById('confirmPassword').className = 'red';
	}
}