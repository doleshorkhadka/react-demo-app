import Card from "./components/Card";
import Cities from "./constants/data";

import "./styles/App.css";

function App() {
  return (
    <>
      <h1>CITIES TO VISIT IN EUROPE</h1>
      <div class="cities-box">
        {Cities.map((city, index) => (
          <Card key={index} data={city} />
        ))}
      </div>
    </>
  );
}

export default App;
