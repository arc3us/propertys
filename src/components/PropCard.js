import React from "react";

function PropCard(props) {
  return (
    <div>
      <div className="card card-compact w-96 bg-white shadow-xl">
        <figure>
          <img className="rounded-xl" src={props.image} alt={props.name} />
        </figure>
        <div className="card-body">
            <h2 className="card-title text-secondary">
                ${props.price} p.m.
            </h2>
          <h2 className="card-title">
            {props.name}
          </h2>
          <p>{props.address}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{props.beds} Beds</div>
            <div className="badge badge-outline">{props.bathrooms} Bathrooms</div>
            <div className="badge badge-outline">{props.area} sqft</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropCard;
