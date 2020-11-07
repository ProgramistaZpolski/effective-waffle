'use strict';
function $(h) {
    return document.querySelector(h);
}
let avalibleGeofenceData = [
    // downloaded data will be inserted here
];

let avalibleWeatherData = [
    // downloaded data will be inserted here
];

var apikey = 'insert your api key there!';
let placename = 'Warsaw, Poland';
fetch(`https://api.opencagedata.com/geocode/v1/json?q=${placename}&key=${"insert your api key there!"}`)
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        processData(data);
    })
    .catch(function () {
    });
function processData(rData) {
    avalibleGeofenceData = rData;
    let cage = avalibleGeofenceData.results[0].geometry;
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${cage.lat}&lon=${cage.lng}&appid=${"insert your api key there!"}`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            processAllData(data);
        })
        .catch(function () {
        });
}
function processAllData(rData) {
    avalibleWeatherData = rData;
    $("#symbol").innerText = "℃";
    let nowtemp = avalibleWeatherData.hourly[0].temp;
    nowtemp -= 273.15;
    nowtemp = Math.round(nowtemp);
    nowtemp.toString();
    let tempLetters = [
        `${nowtemp}`.slice(0, -1),
        `${nowtemp}`.slice(-1)
    ]
    console.log(tempLetters);
    $("#temp1").innerText = tempLetters[0];
    $("#temp2").innerText = tempLetters[1];
    $("#desc").innerText = avalibleWeatherData.hourly[0].weather[0].description;
    $("#whereonearth").innerText = avalibleGeofenceData.results[0].formatted;
    //avalibleWeatherData.hourly[0].weather[0].id
    $("#loadimg").style.display = "none";
    $(".finalimg").style.display = "block";
    $(".finalimg").innerHTML = `
        <img src = "http://openweathermap.org/img/wn/${avalibleWeatherData.hourly[0].weather[0].icon}@4x.png">
    `;

    for (let index = 0; index < 5; index++) {
        const element = avalibleWeatherData.daily[index];
        $(`#max${index}`).innerText = `${Math.round(element.temp.max -= 273.15)}℃`;
        $(`#min${index}`).innerText = `${Math.round(element.temp.min -= 273.15)}℃`;
        $(`#img${index}`).src = `http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`;
    }

    $("#windspeed").innerText = avalibleWeatherData.current.wind_speed + " km/h";
    $("#winddeg").innerText = avalibleWeatherData.current.wind_deg + " degrees"
    $("#humidity").innerText = avalibleWeatherData.current.humidity + "%";
    $("#visibility").innerText = avalibleWeatherData.current.visibility + " meters";
    $("#pressure").innerText = avalibleWeatherData.current.pressure + " hPa";
}

function fahren() {
    let nowtemp = avalibleWeatherData.hourly[0].temp;
    nowtemp = ((nowtemp - 273.15) * 1.8) + 32;
    nowtemp = Math.round(nowtemp);
    nowtemp.toString();
    let tempLetters = [
        `${nowtemp}`.slice(0, -1),
        `${nowtemp}`.slice(-1)
    ]
    console.log(tempLetters);
    $("#symbol").innerText = "℉";
    $("#temp1").innerText = tempLetters[0];
    $("#temp2").innerText = tempLetters[1];
}

function search() {
    let location = prompt('What place do you want to search for?', 'Helsinki, Finland');
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${location}&key=a56b3667b4fe43c8b76bd2caf55178e0`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            processData(data);
        })
        .catch(function () {
        });
}