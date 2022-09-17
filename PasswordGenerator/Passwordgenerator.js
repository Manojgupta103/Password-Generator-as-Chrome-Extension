const blockAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nonBlockAlpha = "abcdefghijklmnopqrstuvwxyz";
const specialChar = "!@#$%^&*_=+-/.?<>)(";
const numbers = "1234567890";
const customPassword = (hasBlockAlpha, hasNonBlockAlpha, hasSpecialChar, hasNumbers, pwdLength) => {
    let generatedPassword = "";
    let allowedValues = "";
    let st = 0;
    if (hasBlockAlpha) {
        allowedValues += blockAlpha;
        generatedPassword = blockAlpha.charAt(Math.floor(Math.random() * (blockAlpha.length)));
	st++;
    }
    if (hasNonBlockAlpha) {
        allowedValues += nonBlockAlpha;
        generatedPassword = nonBlockAlpha.charAt(Math.floor(Math.random() * (nonBlockAlpha.length)));
	st++;
    }
    if (hasSpecialChar) {
        allowedValues += specialChar;
        generatedPassword = specialChar.charAt(Math.floor(Math.random() * (specialChar.length)));
	st++;
    }
    if (hasNumbers) {
        allowedValues += numbers;
        generatedPassword = numbers.charAt(Math.floor(Math.random() * (numbers.length)));
	st++;
    }
    for (let i = st; i < pwdLength; i++){
        generatedPassword += allowedValues.charAt(Math.floor(Math.random() * (allowedValues.length)));
    }

    return generatedPassword;
}

const defaultPassword = pwdlength => {
    let generatedPassword = "";
    let allowedValues = blockAlpha + nonBlockAlpha + specialChar + numbers;
    for(let i = 0; i<  pwdlength; i++)
        generatedPassword += allowedValues.charAt(Math.floor(Math.random() * (allowedValues.length)));

    return generatedPassword;
}