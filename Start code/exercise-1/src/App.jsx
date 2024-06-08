import React, {useState} from "react";
function App() {
  /* You will need to use a boolean state to manage the weather */
  const [isRaining, setWeather ]= useState(true) ;
  const [weatherTitle, setWeatherTitle] = useState("Rain Time");
  const [backgroundColor, setBackgroundColor] = useState ("rainy")
  function onSunClick() {
    getTitle();
    getBackgroundColor();
    setWeather(false);
  }

  function onRainClick() {
    getTitle();
    getBackgroundColor();
    setWeather(true)
  }

  function getTitle() {
    setWeatherTitle('Sun Time');
  }

  function getBackgroundColor() {
    if(isRaining){
      setBackgroundColor('rainy');
    }
    if(!isRaining){
      setBackgroundColor("sunny");
      getTitle();
    }
  }

  return (
    <main className={backgroundColor}>
      <h1>{weatherTitle}</h1>
      <button onClick={onSunClick} >Sunny Time</button>
      <button onClick={onRainClick} >Rain Time</button>
    </main>
  );
}

export default App;
