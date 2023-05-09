const searchbox1 = document.getElementById("text1");
const searchbox2 = document.getElementById("text2");
const searchBtn = document.querySelector(".search button");

async function checkWeather(mylat,mylon){
    let apiUrl= "https://api.open-meteo.com/v1/forecast?latitude=&longitude=&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m&daily";
    apiUrl = apiUrl.replace("latitude=","latitude="+ mylat).replace("longitude=","longitude="+ mylon)

    const response = await fetch(apiUrl);
    var data = await response.json();
    console.log(data);
    
    document.getElementById("latitude").innerHTML=data.latitude;
    document.getElementById("longitude").innerHTML=data.longitude;   
    document.getElementById("temp").innerHTML=data.current_weather.temperature + " °C";
    document.getElementById("humidity").innerHTML=data.hourly.relativehumidity_2m[0] + "%";
    document.getElementById("windspeed").innerHTML=data.current_weather.windspeed + " km/h";
    document.getElementById("winddirection").innerHTML=data.current_weather.winddirection + " °";
  
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchbox1.value,searchbox2.value);
})


// headers: { 'X-Api-Key';'LxoesebkyFCYHR4ShG83Hg==l3Ywm5kJRuh45RWV'};
// let apiUrl0="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false";
// const searchbox0 = document.getElementById("city");
// const searchBtn0 = document.getElementById("citysearch");

// //Function to covert address to Latitude and Longitude
// var getLocation =  function(address) {
//   var geocoder = new google.maps.Geocoder();
//   geocoder.geocode( { 'address': address}, function(results, status) {

//   if (status == google.maps.GeocoderStatus.OK) {
//       var latitude = results[0].geometry.location.lat();
//       var longitude = results[0].geometry.location.lng();
//       console.log(latitude, longitude);
//       document.getElementById("findlatitude").innerHTML=data.latitude;
//       document.getElementById("findlongitude").innerHTML=data.longitude;
//       } 
//   }); 
// }
// searchBtn0.addEventListener("click", ()=>{
//     getLocation(searchbox0.value);
// })


