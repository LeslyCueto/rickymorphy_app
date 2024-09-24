import React from "react";

const Pagination = ({ onAnterior, onSiguiente }) => {
  return (
    <>
      <nav>
        <ul className="pagination justify-content-center mt-4">
          <button className="btn btn-warning" onClick={onAnterior}>
            Anterior
          </button>
          <button className="btn btn-primary ms-2" onClick={onSiguiente}>
            Siguiente
          </button>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
