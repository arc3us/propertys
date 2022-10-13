import React from 'react'
import PropCard from './PropCard';
import { useEffect, useState } from 'react';



function PropMapper() {

    const [data,setData]=useState([]);

    const getData=()=>{
        fetch('mockdata.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            setData(myJson)
          });
      }

      useEffect(()=>{
        getData()
      },[])

  return (
    <div className="grid grid-cols-3 gap-16 ml-20 mt-20">
        {data.map(estate => (
            <div>
                <PropCard image={estate.image} price={estate.price} name={estate.name} address={estate.address} beds={estate.beds} bathrooms={estate.bathrooms} area={estate.area}/>
                </div>
        ))}
    </div>
  )
}

export default PropMapper