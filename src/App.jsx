import { useState } from "react";
import countries from "../src/data/countries";
function App() {
  const [country, setCountry] = useState([]);
  return (
    <>
        <select onChange={(e) => {setCountry(e.target.value);}}>
          {countries.map((item, index) => {
            return (
              <option key={index} value={index}>
                {item.name}
              </option>
            );
          })}
        </select>
      {
        countries[country] !== "" &&
        (<select>
          {
            countries[Number(country)].cities.map((item,index)=>{
              return <option key={item} value={index}>{item}</option>
            })
          }
        </select>
      )}
    </>
  );
}

export default App;