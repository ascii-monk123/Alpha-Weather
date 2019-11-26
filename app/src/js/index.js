import 'bootstrap';
import '../scss/app.scss';
import x from './test';
var $ = require('jquery');
console.log(`Imported ${x} from another module and made some changes asuzi`);

$(document).ready(function() {
  $('.pidgey').fadeOut(2000);
});

document.querySelector('.poom').addEventListener('click', e => {
  setTimeout(() => {
    e.target.style.display = 'none';
  }, 2000);
});
