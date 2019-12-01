import axios from 'axios';
import { RenderData } from '../views/searchView';
import { keys } from './keys';
const DayData = () => {
  const d = new Date().getDay();
  console.log(d);
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  return days.splice(d, 5).reverse();
};
export const getWeatherData = async (query, curD) => {
  try {
    const data = await axios(
      `https:\\api.openweathermap.org/data/2.5/forecast?q=${query}&APPID=${keys}`
    );
    let weatherArr = data.data.list;
    //dt_txt
    // 03:00:00
    if (weatherArr) {
      //Divide the weather data
      let filterArr = weatherArr.filter(ele => ele.dt_txt.includes(curD));
      console.log(filterArr);
      const weatherTypes = [
        'Thunderstorm',
        'Drizzle',
        'Rain',
        'Snow',
        'Atmosphere',
        'Clear',
        'Clouds'
      ];
      const colors = [
        '#9b59b6',
        '#3498db',
        '#2980b9',
        '#bdc3c7',
        '#1abc9c',
        '#f1c40f',
        '#95a5a6'
      ];
      const fonts = [
        'poo-storm',
        'cloud-showers-heavy',
        'cloud-rain',
        'snowflake',
        'globe-europe',
        'sun',
        'cloud'
      ];
      query = query.split('');
      query[0] = query[0].toUpperCase();
      query = query.join('');
      let days = DayData();
      filterArr.reverse().forEach((ele, i) => {
        if (ele) {
          let ind = weatherTypes.indexOf(ele.weather[0].main);
          RenderData(
            ele.main.temp_max - 273.15,
            ele.main.temp_min - 273.15,
            ele.weather[0].description,
            days[i],
            query,
            colors[ind],
            fonts[ind]
          );
        }
      });
      //Display the weather to the UI
    }
  } catch (err) {
    alert('Sorry Your Request Cannot Be Processed Error 404!');
    console.log(err);
  }
};
export const getDates = () => {
  const d = new Date();
  let hour = d.getHours();
  if (hour % 3 === 0) {
    return hour <= 9 ? `0${hour}:00:00` : `${hour}:00:00`;
  } else {
    while (hour % 3 !== 0) {
      hour--;
    }

    return hour <= 9 ? `0${hour}:00:00` : `${hour}:00:00`;
  }
};
