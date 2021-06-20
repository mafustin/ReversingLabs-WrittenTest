const fetch = require("node-fetch");
const getTemperature = require('./getTemperature')
const getTemperatureInKelvin = require('./getTemperature')

test('temperature value is valid in celcius', () => {
    expect(getTemperature()).not.toBeNaN(); 
});

test('temperature invalid value', () => {
    expect(getTemperature()).toBeNaN(); 
});

test('temperatureInKelvin is valid', () => {
    expect(getTemperatureInKelvin()).not.toBeNaN();
});