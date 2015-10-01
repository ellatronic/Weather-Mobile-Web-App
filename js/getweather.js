$(document).ready(function(){
	var searchZip = '';

	//get today's day of the week
	function getDay() {
		var days = ["Su","M","Tu","W","Th","F","Sa"];
		var d = new Date();
		console.log(d);
		var dayNum = d.getDay();
		console.log(dayNum);
		$("#date").text(days[dayNum]);
		console.log(days[dayNum]);

		//get weather data
		function getWeather(zipCode) {
				//get current weather condiditons
				$.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zipCode + ',us&units=imperial&APPID=ded17c04cecada392fc437e96cea4205')
					.done(function(data) {
						var name = data.name;
						$('#cityName').text(name);
						var main = data.weather[0].main;
						$('#forecast').text(main);
						var temp = data.main.temp;
						$('#temp').text(temp);
				})
				//get 7 day forecast
				$.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + zipCode + ',us&cnt=7&units=imperial&APPID=ded17c04cecada392fc437e96cea4205')
					.done(function(forecastData) {
						for (i = 0; i < 7; i++) {
							var dayTemp = forecastData.list[i].temp.day;
							console.log("Forecast Data for Day " + i + " " + dayTemp);
							var dayCond = forecastData.list[i].weather[0].main;
							console.log("Weather conditions for Day " + i + " " + dayCond);
							//populate days of the week
							$("#days").append(
							"<div>" + days[dayNum] + "</div>" +
							"<div>" + dayCond + "</div>" +
							"<div>" + dayTemp + " &#8457</div>");
						}
						var day0Temp = forecastData.list[0].temp.day;
						console.log(day0Temp);
						console.log(forecastData);
						console.log(dayNum);
					})
		}

		getWeather(searchZip);
	}

	//call function using zip code
	function search() {
		searchZip = $('#zipcode').val();
		getDay();
	}
	$('#button').click(search);	
})