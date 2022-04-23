var lowerCaseSet = 'abcdefghijklmnopqrstuvwxyz';
var upperCaseSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numberSet = '0123456789';
var symbolSet = '`~!@#$%^&*()_+-={}|[]\:";<>?,./';

var passwordLength = document.getElementById('password-length');
var includeSymbols = document.getElementById('include-symbols');
var generateButton = document.getElementById('generate-password-btn');
var passwordBox = document.getElementById('password-box');
var copyPassword = document.getElementById('copy-password');
var passwordLengthText = document.getElementById('password-length-text');

function generatePassword(){
    var length = passwordLength.value;
	var characterSet = '';
	var password = '';
    characterSet += lowerCaseSet + upperCaseSet + numberSet + (includeSymbols.checked ? symbolSet : '');

	for(var i = 0; i < length; i++){
        password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
	}
	
    passwordBox.value = password;
}

generatePassword();

generateButton.addEventListener('click', generatePassword);

copyPassword.addEventListener("click", function() {
    // copy password to clipboard
    navigator.clipboard.writeText(passwordBox.value);
})

passwordLength.addEventListener("change", function() {
    passwordLengthText.innerText = passwordLength.value;
})