import React from "react";

const Card = ({item}) => {
  const estilosCard = {
    width: "300px",
  };

  return (
    <div className="col mb-4 justify-content-center d-flex">
      <div className="card" style={estilosCard}>
        <img className="card-img" src={item.image} alt={item.name} />
        <div className="card-body">
          <h5 className="card-title text-primary">{item.name}</h5>
          <hr />
          <p>
            <span className="fw-bold">Especies:</span>
            {item.species}
          </p>
          <p>
            <span className="fw-bold">Localización:</span>
            {item.location.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
