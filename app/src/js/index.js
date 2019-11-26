import 'bootstrap';
import '../scss/app.scss';
import x from './test';
var $ = require('jquery');
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
console.log(`Imported ${x} from another module and made some changes asuzi`);

$('.hero__img__box').fadeOut(0);
$('.hero__img__box').fadeIn(2000);
