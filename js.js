var input = document.querySelector('.input_text');
var input1 = document.querySelector('.input_desc');

var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var pressure = document.querySelector('.pressure')
var longitude = document.querySelector(".longitude");
var latitude = document.querySelector(".latitude");
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){

  getTemperature();
 })


function getTemperature () {
  let url = 'https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=361a26434899ac82d3afdd691b3f702f'
  fetch(url)
  .then(response => response.json())
  .then(data => {
    var tempValue = (data['main']['temp'] - 273).toFixed(1);
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];
    var pressureValue = data['main']['pressure'];
    var longitudeValue = data['coord']['lon'];
    var latitudeValue = data['coord']['lat'];
  
    main.innerHTML = nameValue;
    desc.innerHTML = "Desc - "+input1.value;
    temp.innerHTML = "Current temperature in " + nameValue + " is "+tempValue + "°C";
    clouds.innerHTML = "Today it is mostly "+ descValue;
    pressure.innerHTML = "Pressure: "+ pressureValue +" Hpa";
    longitude.innerHTML = "Longitude: " + longitudeValue;
    latitude.innerHTML = "Latitude: " + latitudeValue;

    input.value ="";
    input1.value="";
    return tempValue;

  
  })
  
  .catch(err => alert("Wrong city name!"));
  }


  module.exports = getTemperature