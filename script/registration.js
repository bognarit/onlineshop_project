'use strict';

const europeCountries = ['Albanien', 'Andorra', 'Belarus', 'Belgien', 'Bosnien und Herzegowina', 'Bulgarien', 'Dänemark', 'Deutschland', 'Estland',
                        'Finnland', 'Frankreich', 'Griechenland', 'Irland', 'Island', 'Italien', 'Kasachstan', 'Kosovo', 'Kroatien', 'Lettland',
                        'Liechtenstein', 'Litauen', 'Luxemburg', 'Malta', 'Moldau', 'Monaco', 'Montenegro', 'Niederlande', 'Nordmazedonien',
                        'Norwegen', 'Österreich', 'Polen', 'Portugal', 'Rumänien', 'Russland', 'San Marino', 'Schweden', 'Schweiz', 'Serbien',
                        'Slowakei', 'Slowenien', 'Spanien', 'Tschechien', 'Türkei', 'Ukraine', 'Ungarn', 'Vatikanstadt','Vereinigtes Königreich'];

const registCountry = document.getElementById('regist-country');
const eyeIcon = document.querySelector('.eye-icon');
const passwordEl = document.getElementById('pass-input');
const showPassBtn = document.getElementById('show-pass');
const noShowPassBtn = document.getElementById('no-show-pass');
const confirmationModal = document.querySelector('.confirmation');
const confirmationOverlay = document.querySelector('.overlay');
const closeConfirmationBtn = document.getElementById('close-confirmation');
const showConfirmationBtn = document.getElementById('show-confirmation');
const acceptCheckbox = document.getElementById('accept');
const emailAddressBox = document.getElementById('email-address');
const userEmail = document.getElementById('user-email');

europeCountries.forEach(item => {
    const option = document.createElement('option');
    option.text = item;
    option.value = item;
    registCountry.appendChild(option);
});

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

function showConfirmation (e) {
    if (emailAddressBox.value.trim() === '' || !acceptCheckbox.checked) {
        e.preventDefault();
        alert('Bitte füllen Sie das Feld aus!');
    } else {
        const email = emailAddressBox.value.trim();
        userEmail.innerText = email;
        confirmationModal.classList.add('active');
    }
}

function closeConfirmation () {
    confirmationModal.classList.remove('active');
    // emailAddressBox.value = '';
}

showConfirmationBtn.addEventListener('click', showConfirmation);
closeConfirmationBtn.addEventListener('click', closeConfirmation);
confirmationOverlay.addEventListener('click', closeConfirmation);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeConfirmation();
    }
});