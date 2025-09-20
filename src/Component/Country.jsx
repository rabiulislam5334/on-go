import React, { useState } from "react";

const Country = ({ country, handleVisitedCountry, handleFlag }) => {
  const [visited, setVisited] = useState(false);
  const handlebtn = () => {
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    // setVisited(visited ? false : true);
    setVisited(!visited);
    handleVisitedCountry(country);
  };
  return (
    <div
      className={`border-2 border-amber-400  rounded-2xl shadow p-5 ${
        visited && "bg-gray-100"
      } 
      `}
    >
      <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
      <h2 className=" text-2xl">Name : {country.name.common}</h2>
      <h2 className=" text-2xl">
        Population : {country.population.population}
      </h2>
      <h2 className=" text-2xl">Capital: {country.capital.capital}</h2>
      <h2 className=" text-2xl">
        Continents : {country.continents.continents}
      </h2>
      <div className=" flex justify-between">
        <button
          onClick={handlebtn}
          className="  bg-amber-300 px-4 mt-3 rounded-2xl py-3 hover:bg-amber-700 hover:text-white"
        >
          {visited ? "visited" : "Not Visited"}
        </button>
        <button
          onClick={() => {
            handleFlag(country?.flags?.flags?.png);
          }}
          className="  bg-amber-300 px-4 mt-3 rounded-2xl py-3 hover:bg-amber-700 hover:text-white"
        >
          show flag
        </button>
      </div>
    </div>
  );
};

export default Country;
