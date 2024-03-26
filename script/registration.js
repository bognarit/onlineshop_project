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