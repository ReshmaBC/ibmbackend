function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const lat = document.getElementById("lat").value;
    const lon = document.getElementById("lon").value;
    const apiKey = '9f2702ab2632453722b62b860d8d381a'; // Replace 'YOUR_API_KEY' with your actual API key

let apiUrl;
    
if (city) {
    // If city is provided, use the city-based API URL
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
} else if (lat && lon) {
    // If latitude and longitude are provided, use the lat/lon-based API URL
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
} else {
    // Handle the case where neither city nor lat/lon is provided
    console.error('Please provide either city name or latitude/longitude.');
    return;
}

fetch(apiUrl)
.then(response => response.json() )
.then(data => {
    console.log(data);
    const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                              <p>Temperature: ${data.main.temp} &#8451;</p>
                              <p>Weather: ${data.weather[0].description}</p>
                              <p>Co-ordinates are ${data.coord.lat} and ${data.coord.lon}`;
})
.catch(error => {
    console.error('Error fetching weather:', error);
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
  });
}
document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );
document.getElementById('weatherFormBylatlon').addEventListener('submit',showweatherDetails );