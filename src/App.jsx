import { Suspense } from "react";
import "./App.css";
import Countries from "./Component/Countries";
const url = "https://openapi.programming-hero.com/api/all";
const countryPromise = fetch(url).then((res) => res.json());

function App() {
  return (
    <>
      <h1>All Countries</h1>
      <div>
        <Suspense fallback={<h1>Loading Data</h1>}>
          <Countries countryPromise={countryPromise}></Countries>
        </Suspense>
      </div>
    </>
  );
}

export default App;
