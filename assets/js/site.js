/*  Opgave:

modal windows opgave

Du skal her skrive JavaScript kode der kan vise og gemme et modal vindue, menu eller andet.

Fremgangsmåde:
CSS:
skriv style der positionerer dit vindue

JavaScript
Add event listener til set element der skal trigge dit vindue
Add event event listener til element der skal lukke vinduet
Toggle class name til og fra for at skjule og vise vinduet

*/

/* References: 
interaction-events-codelab 
challenges-start/text-formats
... */
 
/* The following does not open/close window yet 
From model found at: Source: https://www.sitepoint.com/community/t/how-do-i-make-this-modal-hidden/358592/8 */

const openBtn = document.getElementById('openButton');
console.log(openBtn);

const modalWindow = document.getElementById('currencyConverterDialog');
console.log(modalWindow);

const closeBtn = document.getElementById('closeButton');
console.log(closeBtn);

function openBtnClickHandler(e) {
    /* preventDefault() virker kun knappen, ikke på dialogen */
    e.preventDefault();
    /* The console.log is necessary to troubleshoot and know if the function is triggered at all/that there is a connection. */
    console.log('Open button was clicked.');
    console.log(modalWindow.classList);
    modalWindow.classList.remove('hidden');
};

function closeBtnClickHandler(e) {
    e.preventDefault();
    console.log('Close button was clicked.');
    console.log(modalWindow.classList);
    modalWindow.classList.add('hidden');
};

openBtn.addEventListener('click', openBtnClickHandler);

closeBtn.addEventListener('click', closeBtnClickHandler);

/* Til valutaomregneren selv */

const startingAmountDkk = document.getElementById('startingAmountDkkInput');
const endCurrencyIso = document.getElementById('endCurrencyIsoSelect');
const conversionButton = document.getElementById('convertButton');
const conversionResult = document.getElementById('endAmountP');

conversionButton.addEventListener('click', multiplyValue);

/* If... else if... else does not work. Instead of a series of "ifs", it is also possible to use a switch statement. */
function multiplyValue() {
    console.log(startingAmountDkk.value);
    /* What needs to be multiplied is the value inside of the element, not the element itself! */
    if (endCurrencyIso.value === "CAD") {
        startingAmountDkk.value = startingAmountDkk.value * 0.20922;
    }; 
    if (endCurrencyIso.value === "EUR") {
        startingAmountDkk.value = startingAmountDkk.value * 0.13402;
    };
    if (endCurrencyIso.value === "USD") {
        startingAmountDkk.value = startingAmountDkk.value * 0.14609;
    };
    
    showResult('Ifølge Toldstyrelsens Toldtarif (1. april 2025), er beløbet så meget værd i slutvalutaen: ' + startingAmountDkk.value, conversionResult);

    /* The following is necessary to stop the result of the equation from being displayed both in the startingAmountDkkInput field and the endAmountP field. */    
    startingAmountDkk.value = '';
}

/* The folowing function is the one that actually displays the text/result in the field to the right (below on a mobile), not the above function!
conversionResult is the place where the result conversionData is going to be displayed */
function showResult(conversionData, conversionResult) {
    conversionResult.innerHTML = conversionData;
}

