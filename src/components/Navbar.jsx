import React from "react";

const Navbar = ({ titulo }) => {
  return (
    <>
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <h3 className="navbar-brand text-uppercase">{titulo}</h3>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
