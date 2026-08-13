function getweather() {
    let input1 = document.getElementById("input");

    let city = input1.value;
    let output1 = document.getElementById("output");

    if (city == "") {
        output1.textContent = "Please enter a city"
    }

    let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(url)

        .then(response => {

            if (!response.ok) {
                throw new Error("Weather info not found.")
            }
            return response.json();
        })

        .then(data => {
            const locationName = data.location.name;
            const temp = data.current.temp_c;
            const condition = data.current.condition.text;
            const windSpeed = data.current.wind_kph;
            const visibility = data.current.vis_km;

            output1.innerHTML =
                `<strong>📍Location: ${locationName} </strong><br>
                 <strong>🌡️Temperature: ${temp} ℃</strong><br>
                 <strong>☁️ Weather Condition: ${condition} </strong><br>
                 <strong>🌪️ Wind Speed: ${windSpeed} km/h </strong><br>
                 <strong>👁 Visibility: ${visibility} km</strong><br>`

        })

        .catch(error => {
            output1.innerHTML = "Could not fetch weather 😔 please try again later.";
        })


}