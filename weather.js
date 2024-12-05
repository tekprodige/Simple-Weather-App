
let state = reactive({ selectedCity: "London",
    weather: {
        temperature: "N/A",
        humidity: "N/A",
        description: "N/A"
    }
 });

 const mockWeatherData = {
    "New York": {
      temperature: '15°C',
      humidity: '55%',
      description: 'Cloudy'
    },
    "London": {
      temperature: '10°C',
      humidity: '75%',
      description: 'Rainy'
    },
    "Tokyo": {
      temperature: '22°C',
      humidity: '65%',
      description: 'Sunny'
    },
    "Miami": {
      temperature: '25°C',
      humidity: '60%',
      description: 'Sunny'
    }
  };

  function fetchWeather(city)
  {
    setTimeout(() =>{
        const weather = mockWeatherData[city]

        state.weather = weather
    }, 500)
  }


function RenderApp() {
  render(
    "#container",
    `<select onchange=updateSelectedCity(this.value)>
        <option value="Tokyo"> Tokyo</option>
        <option value="London"> London</option>
        <option value="New York"> New York</option>
        <option value="Miami"> Miami</option>
    </select>
    <div>
        <p>Temperature: ${state.weather.temperature}</p>
        <p>Humidity: ${state.weather.humidity}</p>
        <p>Description: ${state.weather.description}</p>
    </div>`
  );
}

function updateSelectedCity(city)
{
    state.selectedCity = city
    fetchWeather(city)
}

RenderApp();
