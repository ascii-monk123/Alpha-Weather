import 'bootstrap';
import '../scss/app.scss';
import axios from 'axios';

var $ = require('jquery');
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

$('.hero__img__box').fadeOut(0);
$('.hero__img__box').fadeIn(2000);

/*
//How to fetch the data from the open weather source map api
const checkData = async query => {
  try {
    const data = await axios(
      'https:\\api.openweathermap.org/data/2.5/weather?q=London&&APPID=600409249d829db023a38425bd27549b'
    );
    console.log(data.data.main.temp_max);
  } catch (err) {
    console.log(error);
  }
};
document
  .querySelector('.query__fetch__btn')
  .addEventListener('click', checkData);


  */
