import 'bootstrap';
import '../scss/app.scss';
import { getWeatherData, getDates } from './modals/weatherFetch';
import { DomEle } from './views/searchView';

var $ = require('jquery');
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

$('.hero__img__box').fadeOut(0);
$('.hero__img__box').fadeIn(2000);

//How to fetch the data from the open weather source map api
/*const checkData = async query => {
  try {
    const data = await axios(
      'https:\\api.openweathermap.org/data/2.5/forecast?q=London,us&APPID=600409249d829db023a38425bd27549b'
    );
    let weatherArr = data.data.list;
    //dt_txt
    // 03:00:00
    if (weatherArr) {
      let filterArr = weatherArr.filter(ele => ele.dt_txt.includes('3:00:00'));
      console.log(filterArr);
    }
  } catch (err) {
    console.log(error);
  }
};
*/

const date1 = getDates();
//Click event listener
DomEle.fetchBtn.addEventListener('click', () => {
  getQuery();
});
//Enter event listener
DomEle.form.addEventListener('submit', e => {
  e.preventDefault();
  getQuery();
});

const getQuery = () => {
  const query = DomEle.inputSec.value;
  if (query !== '' && query !== null) {
    DomEle.weatherSection.innerHTML = '';
    DomEle.inputSec.value = '';
    getWeatherData(query, date1);
  } else alert('Please Enter Data Into Text Field');
};
