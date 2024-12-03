const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');

// Event untuk berpindah dari Login ke Register
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

// Event untuk berpindah dari Register ke Login
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

// Event untuk menampilkan popup login/register
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});
