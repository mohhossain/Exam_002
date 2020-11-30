function enter() {
    let input = document.getElementById("city").value;
    console.log(input)
    fetchWeatherData(input)
}

const fetchWeatherData = async (input) => {
    try {
        const key = "4583df71a6be113c353d48cc4d720e36"
        const res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + input + "&appid=" + key);
        const data = await res.json();
        console.log(data)
        console.log(data.weather[0].description, data.main.temp)
        document.getElementById("condition").innerHTML = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
        document.getElementById("temp").innerHTML = Math.round((parseFloat(data.main.temp) - 273.15) * 1.8 + 32) + ' &#8457';
        document.getElementById("cityName").innerHTML = data.name + ', ' + data.sys.country;
    } catch (e) {
        document.getElementById("condition").innerHTML = "Invalid City";
        document.getElementById("temp").innerHTML = "";
        document.getElementById("cityName").innerHTML = "";
    }
    

}

