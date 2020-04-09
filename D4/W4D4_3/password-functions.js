const functions = {
    isNotBlank: (pw) => {
        // return boolean
        if(pw === "" || pw === null){
            return false;
        }
        else {
            return true;
        }
    },
    isLessThan8Chars: (pw) => {
        return pw.length <= 8;
    },
    hasUppercase: (pw) => {
        // return boolean
        return /[A-Z]+/.test(pw);
    },
    hasLowercase: (pw) => {
        // return boolean
        return /[a-z]+/.test(pw);
    },
    hasDigit: (pw) => {
        // return boolean
        return /\d/.test(pw);
    }
}
module.exports = functions;