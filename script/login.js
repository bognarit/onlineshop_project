'use strict';

const eyeIcon = document.querySelector('.eye-icon');
const passwordEl = document.getElementById('pass-input');
const showPassBtn = document.getElementById('show-pass');
const noShowPassBtn = document.getElementById('no-show-pass');

eyeIcon.addEventListener('click', function (e) {
    e.preventDefault();
    if (passwordEl.type === 'password') {
        passwordEl.type = 'text';
        showPassBtn.style.display = 'block';
        noShowPassBtn.style.display = 'none';
    } else {
        passwordEl.type = 'password';
        showPassBtn.style.display = 'none';
        noShowPassBtn.style.display = 'block';
    }
});