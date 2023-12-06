import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

const PlanetDetail = ({ planetList }) => {
  const { id } = useParams();
  const planet = planetList.find((planet) => planet.id === id);

  if (!planet) {
    return <div>Planeta não encontrado</div>;
  }

  return (
    <div>
      <h2>{planet.nome}</h2>
      <p>Tamanho: {planet.tamanho?.diametro_km} km</p>
      <p>Atmosfera: {planet.atmosfera?.composicao}</p>
      {/* Adicione outros detalhes conforme necessário */}
    </div>
  );
};

PlanetDetail.propTypes = {
  planetList: PropTypes.array.isRequired,
};

export default PlanetDetail;
