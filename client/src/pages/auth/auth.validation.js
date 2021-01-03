const emailValidate = (email = '') => {
    if (/\s/.test(email)) return 'Email not have space';

    return null;
};

const passwordValidate = (password = '') => {
    if (/\s/.test(password)) return 'Password not have space';
    if (password.length < 6 || password.length > 32)
        return 'Password has length from 6 to 32 character';

    return null;
};

const confirmValidate = (confirm = '', password = '') => {
    if (confirm !== password) return 'Confirm not equal password';

    return null;
};
export { emailValidate, passwordValidate, confirmValidate };
