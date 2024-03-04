'use strict';

let countries = ['Deutschland', 'England', 'Frankreich', 'Italien','Österreich', 'Schweiz', 'Spanien', 'Ungarn'];
let registCountry = document.getElementById('regist_country');

countries.forEach(item => {
    let option = document.createElement('option');
    option.text = item;
    option.value = item;
    registCountry.appendChild(option);
});
