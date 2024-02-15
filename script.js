// alert("Hello there!");

async function fetchWeatherData(cityName){
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5d962754dc147dd6b0bd108acbb1df1a`;
	const response = await fetch(url)
	const data = await response.json()
	let city = document.getElementById("city")
	city.innerHTML = data.name;
	let windSpeed = document.getElementById("wind_speed")
	windSpeed.innerHTML = data.wind.speed +" KM/h";
	let humidity = document.getElementById("humidity")
	humidity.innerHTML = data.main.humidity+" g/KG"
	let temp = document.getElementById("temp")
	temp.innerHTML = Math.round((data.main.temp)-273.15)+"°C";
	temp_like.innerHTML = Math.round((data.main.feels_like)-273.15)+"°C";
	console.log(data)
}
// demo()

function fetchCity(){
	let cityName = document.getElementById("city_name");
	if (cityName.value==="") {
		alert("Enter a city name")
	}else{
		fetchWeatherData(cityName.value);
		cityName.value="";
	}
}