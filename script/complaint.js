'use strict';

// newsletter confirmation
const confirmationModal = document.querySelector('.confirmation');
const confirmationOverlay = document.querySelector('.overlay');
const closeConfirmationBtn = document.getElementById('close-confirmation');
const showConfirmationBtn = document.getElementById('show-confirmation');
const firstNameBox = document.getElementById('first-name');
const surnameBox = document.getElementById('surname');
const telefonBox = document.getElementById('telefon');
const emailAddressBox = document.getElementById('email-address');
const orderNrBox = document.getElementById('order-nr');
const messageBox = document.getElementById('message');
const userEmail = document.getElementById('user-email');

const reasonOfComplaint = [
    'Abgelaufene Lebensmittel',
	'Doppelte Lieferung',
	'Fehlende Produktinformationen',
	'Probleme bei der Nutzung des Produktes',
	'Qualitätsproblem',
	'Sonstiges',
	'Unvollständigkeit'
];

const reasons = document.getElementById('reason-of-comp');

reasonOfComplaint.forEach(item => {
    const option = document.createElement('option');
    option.text = item;
    option.value = item;
    reasons.appendChild(option);
});

function showConfirmation () {
	const email = emailAddressBox.value.trim();
    userEmail.innerText = email;
    confirmationOverlay.classList.remove('hidden');
    confirmationModal.classList.remove('hidden');
}

function closeConfirmation () {
    confirmationOverlay.classList.add('hidden');
    confirmationModal.classList.add('hidden');
    firstNameBox.value = surnameBox.value = telefonBox.value = '';
    emailAddressBox.value = orderNrBox.value = messageBox.value = '';
}

showConfirmationBtn.addEventListener('click', showConfirmation);
closeConfirmationBtn.addEventListener('click', closeConfirmation);
confirmationOverlay.addEventListener('click', closeConfirmation);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !confirmationModal.classList.contains('hidden')) {
        closeConfirmation();
    }
});