import  { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function WeatherInput({ onSearch }) {
  const [city, setCity] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    
    onSearch(city, (result) => {
      
      if (result && !searchHistory.includes(city)) {
        setSearchHistory((prevHistory) => [...prevHistory.slice(-4), city]);
      }
    });
  };



  return (
<div className="container mt-4">
  <h3 className="text-center">Ricerca le previsioni meteo per città..</h3>
  <div className="input-group mb-3">
    <input
      className="form-control"
      type="text"
      placeholder="Cerca località"
      value={city}
      onChange={handleChange}
    />
    <button className="btn btn-primary" onClick={handleSearch}>
      Cerca
    </button>
  </div>
  <div className="d-flex flex-wrap justify-content-center mt-3">
    {searchHistory.map((item, index) => (
      <button
        key={index}
        className="btn btn-outline-secondary m-1"
        onClick={() => onSearch(item, () => {})}
      >
        {item}
      </button>
    ))}
  </div>
</div>

  );
}

export default WeatherInput;
