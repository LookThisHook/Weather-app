


function CurrentWeather({ weather }) {
  if (!weather) return null; 

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 ">
      <div className="col-12 card text-center shadow-lg p-1" >
        <div className="card-body">
          <h2 className="card-title">{weather.city}</h2>
          <h5 className="card-subtitle mb-3 text-muted">
            {new Date(weather.date).toLocaleDateString()}
          </h5>
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
            alt="Weather icon"
            className="img-fluid mb-3"
          />
          <h4 className="card-text">{weather.description}</h4>
          <ul className="list-unstyled">
            <li>
              <strong>Temperatura:</strong> {weather.temp}°C
            </li>
            <li>
              <strong>Vento:</strong> {weather.wind} m/s
            </li>
            <li>
              <strong>Umidità:</strong> {weather.humidity}%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
