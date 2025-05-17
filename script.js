const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '917575679amsh88c6285c131a137p15bdddjsn87767af02ad7',
        'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

getWeather = (city, rowId) => {
    // Update city name
    document.getElementById('cityName').textContent = city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            // Update temperature data
            document.getElementById('temp').textContent = response.temp;
            document.getElementById('min_temp').textContent = response.min_temp;
            document.getElementById('max_temp').textContent = response.max_temp;

            // Update humidity data
            document.getElementById('cloud_pct').textContent = response.cloud_pct;
            document.getElementById('feels_like').textContent = response.feels_like;
            document.getElementById('humidity').textContent = response.humidity;

            // Update wind data
            document.getElementById('wind_speed').textContent = response.wind_speed;
            document.getElementById('wind_degrees').textContent = response.wind_degrees;
            document.getElementById('sunrise').textContent = response.sunrise;
            document.getElementById('sunset').textContent = response.sunset;

            // Update table data if rowId is provided
            if (rowId) {
                const tableRow = document.getElementById(rowId);
                tableRow.querySelector('.city').textContent = city;
                tableRow.querySelector('.table-cloud_pct').textContent = response.cloud_pct;
                tableRow.querySelector('.table-feels_like').textContent = response.feels_like;
                tableRow.querySelector('.table-humidity').textContent = response.humidity;
                tableRow.querySelector('.table-max_temp').textContent = response.max_temp;
                tableRow.querySelector('.table-min_temp').textContent = response.min_temp;
                tableRow.querySelector('.table-sunrise').textContent = response.sunrise;
                tableRow.querySelector('.table-sunset').textContent = response.sunset;
                tableRow.querySelector('.table-temp').textContent = response.temp;
                tableRow.querySelector('.table-wind_degrees').textContent = response.wind_degrees;
                tableRow.querySelector('.table-wind_speed').textContent = response.wind_speed;
            }
        })
        .catch(err => console.error(err));
};

const submit = document.getElementById('submit');
submit.addEventListener("click", (e) => {
    e.preventDefault();
    const city = document.getElementById('city').value;
    getWeather(city);
});

// Initial weather data for Panvel

// Weather data for specific cities with their corresponding table row IDs
getWeather("Shanghai", 'weather-row-shanghai');
getWeather("New York", 'weather-row-newyork');
getWeather("London", 'weather-row-london');
getWeather("Tokyo", 'weather-row-tokyo');
getWeather("Sydney", 'weather-row-sydney');
getWeather("Panvel");
