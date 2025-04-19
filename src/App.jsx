import { useState } from "react";
import countries from "../src/data/countries";
function App() {
  const [country, setCountry] = useState([]);
  return (
    <>
      <div>
        <select value={country} onChange={(e) => {setCountry([e.target.value]);}}>
          {countries.map((item, index) => {
            return (
              <option key={index} value={index}>
                {item.name}
              </option>
            );
          })}
        </select>

        <select>
          {
            countries[country] && countries[country].cities.map((item,index)=>{
              return <option value={index}>{item}</option>
            })
          }
        </select>
      </div>
    </>
  );
}

export default App;