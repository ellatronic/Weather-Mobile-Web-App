$(document).ready(function(){
	var searchZip = '';
	//get weather data
	function getWeather(zipCode) {
			$.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zipCode + ',us&APPID=ded17c04cecada392fc437e96cea4205')
				.done(function(data) {
					var name = data.name;
					$('#cityName').text(name);
					console.log(name);
					var main = data.weather[0].main;
					$('#forecast').text(main);
					var description = data.weather[0].description;
					$('#condition-description').text(description);
					console.log(description);
					console.log(main);
					console.log(data);
			})
	}

	//call function using zip code
	function search() {
		searchZip = $('#zipcode').val();
		getWeather(searchZip);
	}
	$('#button').click(search);

	
})