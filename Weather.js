let weather = {
    apiKey: "c4f9af221edaed85ec1b0fbab2008cdc",
    fetchWeather: function (city) {
    fetch(
       "https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apiKey
    )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: (data) => {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText =  temp + "°C";
        document.querySelector(".humidity").innerText =  "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText =  "Wind speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loadimg");
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document
    .querySelector(".search button")
    .addEventListener("click", function() {
        weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if (event.key == "Enter") {
        weather.search();
    }
});

// weather.fetchWeather("Denver");





































// document.addEventListener('DOMContentLoaded', () => {
//     const apiKey = 'YOUR_API_KEY';
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//     fetch(apiUrl)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             const city = data.name;
//             const temp = data.main.temp;
//             const description = data.weather[0].description;

//             document.getElementById('city').textContent = city;
//             document.getElementById('temp').textContent = `Temperatures: ${temp}°C`;
//             document.getElementById('description').textContent = `Description: ${description}`;
//         })
//         .catch(error => {
//             console.error('There was a problem with the fetch operation:', error);
//         });
// });
