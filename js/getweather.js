$(document).ready(function(){
	var searchZip = '';
	//get weather data
	function getWeather(zipCode) {
			$.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zipCode + ',us')
				.done(function(data) {
					var name = data.name;
					$('#cityName').text(name);
					console.log(name);
					var main = data.weather[0].main;
					$('#forecast').text(main);
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