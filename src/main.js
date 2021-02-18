// BUSINESS LOGIC ------------------

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConversion from './xchange-service.js';

function clearFields() {
  $('#dollars').val('');
  $('.showErrors').text('');
  $('.showConversion').text('');
}


function showConversion(response, USD, currency) {
  if (response.result != 'success') {
    $('.showErrors').text(`There was an error: ${response.message}`);
  } else if (USD === '') {
    $('.showErrors').text(`Please enter a numerical amount in USD.`);
  } else if (!currency) {
    $('.showErrors').text(`Please select a currency to exchange to.`);
  } else if(response.result === 'success') {
    $('.showConversion').text(`${USD} Dollars is equal to ${response.conversion_rates[currency]*USD} ${currency}`);
  } else {
    $('.showError').text(`Unknown error!`);
  }
}

// UI LOGIC ------------------------

$(document).ready(function() {
  $('#convertDollar').click(function(event) {
    event.preventDefault();
    
    let USD = $('#dollars').val();
    let currency = $('#currencies option:selected').val();
    clearFields();
    CurrencyConversion.getConversion()
      .then(function(response) {
        showConversion(response, USD, currency);
      });
  });
});