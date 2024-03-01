const apikey= "20d6a7b29801f0735a01495857a65bb7"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchInput = document.getElementById("search")
const searchBTN  = document.getElementById("search-btn")

const cloudImg = document.getElementById('clouds')
      
// function weatherSearch(){
//     const searchInput = document.getElementById("search").value
//     checkWeather(searchInput)
// }



async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apikey}`)
    let data = await response.json()
    const weather = document.getElementById('weather')
    const error =  document.querySelector(".error")

    response.status == 404 ? `${error.style.display ="block"} ${ weather.style.display = "none"}`  : 
    

    document.querySelector("#city").textContent = data.name
    document.querySelector("#temp").textContent = Math.round(data.main.temp)  + "°C"
    document.querySelector("#humidity").textContent = data.main.humidity + "%"
    document.querySelector("#wind").textContent = data.wind.speed + "km/h"

  if(data.weather[0].main == "Clouds"){
     cloudImg.src = "images/clouds.png" 
  }

  else if(data.weather[0].main == "Clear"){
    cloudImg.src = "images/clearsky.png" 
 }
  
 else if(data.weather[0].main == "Rain"){
    cloudImg.src = "images/rain.png" 
 }

 else if(data.weather[0].main == "Drizzle"){
    cloudImg.src = "images/drizzel.png" 
 }

 else if(data.weather[0].main == "Mist"){
    cloudImg.src = "images/mist.png" 
 }

 else if(data.weather[0].main == "Thunderstorm"){
    cloudImg.src = "images/thunderclouds.png" 
 }



 weather.style.display = "block"
 error.style.display ="none"
}


searchBTN.addEventListener("click", ()=>{
    checkWeather(searchInput.value)
 
} )
