const apiKey = 'e3a7fca7fd6912b9338d442ff9ade5cd';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';


function weather() {
    const city = document.getElementById('city').value;
    const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;

    if (city.trim() === '') {
        alert('Make Sure You did Not Enter Space');
        return;
    }

    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Please Enter City Name:', error);
            alert('Please Enter City Name. Please try again.')
        });
}

function displayWeather(data) {
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const weatherDetails = document.getElementById('weather-details');

    cityName.textContent = data.name;
    temperature.textContent = `Temperature: ${data.main.temp} °C`;
    description.textContent = `Description: ${data.weather[0].description}`;
    weatherDetails.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

}

function keyEnter(event) {
    if (event.key === 'Enter') {
        weather();
    }
}
