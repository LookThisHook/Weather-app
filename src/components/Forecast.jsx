
import Card from 'react-bootstrap/Card';


function Forecast({ forecast }) {
  if (!forecast || forecast.length === 0) return null;

  return (
    <div className="container ">
      <h2 className="text-center mb-3">Le previsioni nei prossimi 5 giorni</h2>
      <div className="row justify-content-center">
        {forecast.map((day, index) => {
          
          const date = new Date(day.date);
          date.setDate(date.getDate() + 1);

          return (
            <div key={index} className="col-12 col-md-6 col-lg-2 mb-3 d-flex justify-content-center">
              <Card border="danger" className="card text-center shadow ">
                <div  className="card-body">
                  <h5 className="card-title">{date.toLocaleDateString()}</h5>
                  <img
                    src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                    alt="Weather icon"
                    className="img-fluid"
                  />
                  <p className="card-text">Temperatura: {day.temp}°C</p>
                  <p className="card-text">Vento: {day.wind} m/s</p>
                  <p className="card-text">Umidità: {day.humidity}%</p>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forecast;

