// Data pengguna yang disimpan dalam array (contoh sederhana)
const users = [
     { username: 'user', password: 'user' },
     // ...tambahkan pengguna lain jika diperlukan
];

 // Ambil referensi ke elemen tombol dan input
const loginButton = document.getElementById('loginButton');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

 // Tambahkan event listener ke tombol "Login"
loginButton.addEventListener('click', () => {
     console.log('Login button clicked');
     const enteredUsername = usernameInput.value;
     const enteredPassword = passwordInput.value;

     // Cek otentikasi
     const user = users.find(user => user.username === enteredUsername && user.password === enteredPassword);

     if (user) {
         // Arahkan pengguna ke situs Google setelah login berhasil
          window.location.href = 'https://pindosaputra123.github.io/e-commerce/';
     } else {
          alert('Password yang anda masukan salah');
     }
});
