import React from "react";

function HeroSearch() {
  return (
    <div className="navbar pl-24 pr-24 pt-16 pb-16 ">
      <div className="navbar-start">
        <p className="text-4xl font-bold">Search for properties to rent</p>
      </div>
      <div className="navbar-end">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-primary"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSearch;
