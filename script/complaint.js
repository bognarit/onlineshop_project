'use strict';

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