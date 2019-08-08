window.addEventListener('load',()=>{
//create latitude and longitude variables
let lat;
let long;
let temperature=document.querySelector(".temperature");
let summary=document.querySelector(".summary");
let humidity=document.querySelector(".humidity");
let pressure=document.querySelector(".pressure");
let windspeed=document.querySelector(".windspeed");
let visibility=document.querySelector(".visibility");
let uvindex=document.querySelector(".uvindex");
let timezone=document.querySelector(".timezone");
let apparenttemp=document.querySelector(".apparenttemp");
//let icon=document.querySelector(".icon");
//get userlocation with html geolocation api
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        lat=position.coords.latitude;
        long=position.coords.longitude;
        //console.log(lat,long);
//get heroku proxy
const proxy='https://cors-anywhere.herokuapp.com/';        
//set the api
const api=`${proxy}https://api.darksky.net/forecast/12d35bab36e12c759d22693ee96d31b4/${lat},${long}?units=si`;
//fetching data from api
    fetch(api)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        temperature.textContent=data.currently.temperature;
        summary.textContent=data.currently.summary;
        humidity_=(data.currently.humidity*100);
        humidity.textContent=humidity_;
        pressure.textContent=data.currently.pressure;
        windspeed.textContent=data.currently.windSpeed;
        visibility.textContent=data.currently.visibility;
        uvindex.textContent=data.currently.uvIndex;
        timezone.textContent=data.timezone;
        apparenttemp.textContent=data.currently.apparentTemperature;
        //icon.textContent=data.currently.icon;
    })
});
}else{
    console.log("something went wrong");
}
})