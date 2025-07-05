function getWeather() {
    const city = document.getElementById('city').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerHTML = 
                `Temperature in ${city}: ${data.main.temp}°C`;
        })
        .catch(() => alert("City not found"));
}