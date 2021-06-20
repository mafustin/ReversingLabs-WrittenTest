const fetch = require("node-fetch");
function getTemperature () {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Zagreb&appid=361a26434899ac82d3afdd691b3f702f")
    .then(response => response.json())
    .then(data => {
      var tempValue = (data['main']['temp'] - 273).toFixed(1);

      return tempValue;
  
    
    })}

    function getTemperatureInKelvin(){
      fetch("https://api.openweathermap.org/data/2.5/weather?q=Zagreb&appid=361a26434899ac82d3afdd691b3f702f")
      .then(response => response.json())
      .then(data => {
        var tempValue = data['main']['temp'].toFixed(1);

        return tempValue;
      })}
module.exports = getTemperature