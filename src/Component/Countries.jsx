import React, { use, useState } from "react";
import Country from "./Country";

const Countries = ({ countryPromise }) => {
  const countryData = use(countryPromise);
  const country = countryData.countries;
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [showFlag, setShowFlag] = useState([]);
  const handleVisitedCountry = (country) => {
    const newvisitedCountry = [...visitedCountry, country];
    setVisitedCountry(newvisitedCountry);
  };

  const handleFlag = (flag) => {
    console.log(flag);
    const newshowFlag = [...showFlag, flag];
    setShowFlag(newshowFlag);
  };
  return (
    <div>
      <h1 className="text-2xl">Country: {country.length}</h1>
      <h1 className="text-2xl mb-6">Total country: {visitedCountry.length}</h1>
      <ol>
        {visitedCountry.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>
      <div className=" flex gap-5 my-5">
        {showFlag.map((flag, index) => (
          <img className="w-[120px]" key={index} src={flag}></img>
        ))}
      </div>
      <div className=" grid grid-cols-4 gap-5 ">
        {country.map((country) => (
          <Country
            country={country}
            key={country.cca3.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleFlag={handleFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
