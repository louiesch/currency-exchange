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


function showExchange(response, USD, currency) {
  if (response.main) {
    $('.showConversion').text(`${response.main}%`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

// UI LOGIC ------------------------

$(document).ready(function() {
  $('#convertDollar').click(function(event) {
    event.preventDefault();
    
    let USD = $('#dollars').val();
    let currency = $('input:radio:checked').val();
    CurrencyConversion.showConversion()
      .then(function(response) {
        showExchange(response, USD, currency);
      });
  });
});