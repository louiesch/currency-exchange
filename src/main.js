// BUSINESS LOGIC ------------------

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConversion from './xchange.js'

function clearFields() {
  $('#dollars').val('');
  $('.showErrors').text('');
  $('.showConversion').text('');
}

// UI LOGIC ------------------------

