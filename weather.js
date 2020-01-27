window.onload=function(){

//create latitude and longitude variables
var lat;
var long;

//get userlocation with html geolocation api
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        lat=position.coords.latitude;
        long=position.coords.longitude;
        console.log(lat,long);

var request=new XMLHttpRequest();

request.onreadystatechange=function(){

//fetching data from api
   if(this.readyState==4 && this.status==200) {
       var data=JSON.parse(this.responseText);
        console.log(data);
    
        console.log("Currently Data");

         console.log(data.currently.apparentTemperature);
         console.log(data.currently.cloudCover);
         console.log(data.currently.dewPoint);
         console.log(data.currently.humidity);
         console.log(data.currently.ozone);
         console.log(data.currently.precipIntensity);
         console.log(data.currently.precipProbability);
         console.log(data.currently.precipType);
         console.log(data.currently.pressure);
         console.log(data.currently.summary);
         console.log(data.currently.temperature);
         console.log(data.currently.time);
         console.log(data.currently.uvIndex);
         console.log(data.currently.visibility);
         console.log(data.currently.windBearing);
         console.log(data.currently.windGust);
         console.log(data.currently.windSpeed);



        console.log("Daily Data");

        for(x in data.daily.data){
            console.log(data.daily.data[x].apparentTemperatureHigh);
            console.log(data.daily.data[x].apparentTemperatureHighTime);
            console.log(data.daily.data[x].apparentTemperatureLow);
            console.log(data.daily.data[x].apparentTemperatureLowTime);
            console.log(data.daily.data[x].apparentTemperatureMax);
            console.log(data.daily.data[x].apparentTemperatureMaxTime);
            console.log(data.daily.data[x].apparentTemperatureMin);
            console.log(data.daily.data[x].apparentTemperatureMinTime);
            console.log(data.daily.data[x].cloudCover);
            console.log(data.daily.data[x].dewPoint);
            console.log(data.daily.data[x].humidity);
            console.log(data.daily.data[x].moonPhase);
            console.log(data.daily.data[x].ozone);
            console.log(data.daily.data[x].precipIntensity);
            console.log(data.daily.data[x].precipIntensityMax);
            console.log(data.daily.data[x].precipIntensityMaxTime);
            console.log(data.daily.data[x].precipProbability);
            console.log(data.daily.data[x].precipType);
            console.log(data.daily.data[x].pressure);
            console.log(data.daily.data[x].summary);
            console.log(data.daily.data[x].sunriseTime);
            console.log(data.daily.data[x].sunsetTime);
            console.log(data.daily.data[x].temperatureHigh);
            console.log(data.daily.data[x].temperatureHighTime);
            console.log(data.daily.data[x].temperatureLow);
            console.log(data.daily.data[x].temperatureLowTime);
            console.log(data.daily.data[x].temperatureMax);
            console.log(data.daily.data[x].temperatureMaxTime);
            console.log(data.daily.data[x].temperatureMin);
            console.log(data.daily.data[x].temperatureMinTime);
            console.log(data.daily.data[x].time);
            console.log(data.daily.data[x].uvIndex);
            console.log(data.daily.data[x].uvIndexTime);
            console.log(data.daily.data[x].visibility);
            console.log(data.daily.data[x].windBearing);
            console.log(data.daily.data[x].windGust);
            console.log(data.daily.data[x].windGustTime);
            console.log(data.daily.data[x].windSpeed);
        }
        console.log(data.daily.summary);

        
        console.log("Hourly Data");

        for(x in data.hourly.data){
            console.log(data.hourly.data[x].apparentTemperature);
            console.log(data.hourly.data[x].cloudCover);
            console.log(data.hourly.data[x].dewPoint);
            console.log(data.hourly.data[x].humidity);
            console.log(data.hourly.data[x].icon);
            console.log(data.hourly.data[x].ozone);
            console.log(data.hourly.data[x].precipIntensity);
            console.log(data.hourly.data[x].precipProbability);
            console.log(data.hourly.data[x].precipType);
            console.log(data.hourly.data[x].pressure);
            console.log(data.hourly.data[x].summary);
            console.log(data.hourly.data[x].temperature);
            console.log(data.hourly.data[x].time);
            console.log(data.hourly.data[x].uvIndex);
            console.log(data.hourly.data[x].visibility);
            console.log(data.hourly.data[x].windBearing);
            console.log(data.hourly.data[x].windGust);
            console.log(data.hourly.data[x].windSpeed);
        }
        console.log(data.hourly.summary);
    }
};
const proxy='https://cors-anywhere.herokuapp.com/';

request.open("GET",proxy+"https://api.darksky.net/forecast/12d35bab36e12c759d22693ee96d31b4/"+lat+","+long+"?units=si",true);
request.send();

})
}

}
