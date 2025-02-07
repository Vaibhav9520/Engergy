import React from 'react';
import './weather.css'; // Optional: for styling

const Weather = () => {
  // Static weather data for multiple Indian cities
  const weatherData = [
    {
      city: 'Mumbai',
      temperature: 30,
      humidity: 75,
      windSpeed: 18,
      condition: 'Partly Cloudy',
      icon: '⛅',
    },
    {
      city: 'Delhi',
      temperature: 32,
      humidity: 50,
      windSpeed: 20,
      condition: 'Sunny',
      icon: '☀️',
    },
    {
      city: 'Bangalore',
      temperature: 24,
      humidity: 65,
      windSpeed: 15,
      condition: 'Clear Sky',
      icon: '🌤️',
    },
    {
      city: 'Kolkata',
      temperature: 33,
      humidity: 85,
      windSpeed: 12,
      condition: 'Thunderstorms',
      icon: '🌩️',
    },
    {
      city: 'Chennai',
      temperature: 34,
      humidity: 78,
      windSpeed: 17,
      condition: 'Sunny',
      icon: '☀️',
    },
    {
      city: 'Hyderabad',
      temperature: 29,
      humidity: 60,
      windSpeed: 16,
      condition: 'Cloudy',
      icon: '☁️',
    },
    {
      city: 'Pune',
      temperature: 27,
      humidity: 55,
      windSpeed: 10,
      condition: 'Clear Sky',
      icon: '🌤️',
    },
    {
      city: 'Jaipur',
      temperature: 35,
      humidity: 40,
      windSpeed: 25,
      condition: 'Sunny',
      icon: '☀️',
    },
    {
      city: 'Ahmedabad',
      temperature: 36,
      humidity: 35,
      windSpeed: 22,
      condition: 'Hot and Sunny',
      icon: '☀️',
    },
    {
      city: 'Lucknow',
      temperature: 30,
      humidity: 65,
      windSpeed: 14,
      condition: 'Cloudy',
      icon: '☁️',
    },
  ];

  return (
    <div className="weather-container">
      <h3 className="text-center mb-4">Weather Overview</h3>
      <div className="row">
        {weatherData.map((data, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card weather-card shadow-sm rounded">
              <div className="card-body text-center">
                <h5 className="card-title">{data.city}</h5>
                <div className="weather-icon fs-1">{data.icon}</div>
                <h6 className="card-subtitle mb-2 text-muted">{data.temperature}°C</h6>
                <p className="card-text">Humidity: {data.humidity}%</p>
                <p className="card-text">Wind Speed: {data.windSpeed} km/h</p>
                <p className="card-text">Condition: {data.condition}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;
