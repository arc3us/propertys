import React from "react";

function FilterMenu() {
  return (
    <div className="bg-white rounded-xl flex m-8">
      <div className="p-4">
        <select className="select">
          <option disabled selected>
            Pick your favorite Simpson
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </div>

      <div className="p-4">
        <select className="select">
          <option disabled selected>
            Pick your favorite Simpson
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </div>

      <div className="p-4">
        <select className="select">
          <option disabled selected>
            Pick your favorite Simpson
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </div>
    
      <div className="p-4">
        <select className="select">
          <option disabled selected>
            Pick your favorite Simpson
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </div>

      <div className="p-4 ml-auto">
      <button className="btn btn-primary">Filter</button>
      </div>
     
    </div>
  );
}

export default FilterMenu;
