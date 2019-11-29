import axios from 'axios';
export const getWeatherData = async (query, curD) => {
  try {
    const data = await axios(
      'https:\\api.openweathermap.org/data/2.5/forecast?q=London,us&APPID=600409249d829db023a38425bd27549b'
    );
    let weatherArr = data.data.list;
    //dt_txt
    // 03:00:00
    if (weatherArr) {
      let filterArr = weatherArr.filter(ele => ele.dt_txt.includes(curD));
      console.log(filterArr);
    }
  } catch (err) {
    console.log(err);
  }
};
export const getDates = () => {
  const d = new Date();
  let hour = d.getHours();
  if (hour % 3 === 0) return `${hour}:00:00`;
  else return `03:00:00`;
};
