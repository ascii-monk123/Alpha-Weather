export const DomEle = {
  fetchBtn: document.querySelector('.query__fetch__btn'),
  weatherSection: document.querySelector('.weather__cards__section'),
  inputSec: document.getElementById('search__query__field'),
  form: document.querySelector('.main__form')
};
export const RenderData = (max, min, type, day, city, color, font) => {
  if (max.toString().includes('.')) {
    if (max.toString().split('.')[1].length > 3) {
      max = max.toFixed(3);
    }
  }
  if (min.toString().includes('.')) {
    if (min.toString().split('.')[1].length > 3) {
      min = min.toFixed(3);
    }
  }
  type = type.split('');
  type[0] = type[0].toUpperCase();
  type = type.join('');
  const markUp = `
  <div class="card" style="width: 18rem;">
  <div class="card__header">
    <i class="fas fa-${font}" style="font-size:100px;color:${color}"></i>
  </div>
  <div class="card-body">
    <h1 class="card-title">${city}</h1>
    <ul class="list-group list-group-flush ">
      <li class="list-group-item"><i class="fas fa-thermometer-three-quarters" style="margin-right:10px;"></i>Max : ${max} &#8451;</li>
      <li class="list-group-item"><i class="fas fa-thermometer-empty" style="margin-right:10px;"></i>Min : ${min} &#8451;</li>
      <li class="list-group-item"><i class="fas fa-meteor"style="margin-right:6px;"></i> Weather : ${type}</li>
      <li class="list-group-item"><i class="fas fa-calendar-day"style="margin-right:10px;"></i> Day : ${day}</li>
    </ul>
   
  </div>
</div>
  `;
  DomEle.weatherSection.insertAdjacentHTML('afterbegin', markUp);
};
