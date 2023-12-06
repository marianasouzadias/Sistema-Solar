import { Outlet, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import PlanetDetail from "./PlanetDetail";
const App = () => {
  const [planetList, setPlanetList] = useState(null);
  const { planetName } = useParams();

  useEffect(() => {
    const getPlanetList = async () => {
      try {
        const response = await axios.get("./planetData/planetas.json");
        console.log(response.data);
        setPlanetList(response.data.planet);
      } catch (error) {
        console.error("Erro ao carregar dados dos planetas:", error);
      }
    };
    getPlanetList();
  }, []);
  console.log(planetList);
  return (
    <div className="App">
      <div className="container">
        <Navbar planetList={planetList} />
        <Outlet />
        {Array.isArray(planetList) && (
          <PlanetDetail
            planetList={planetList.filter(
              (planet) => planet.name === planetName
            )}
          />
        )}
      </div>
    </div>
  );
};
export default App;
