import React from "react";
import "./App.css";
import Review from "./Review";
function App() {
  return (
    <main className="App">
      <div className="title-container">
        <h1 className="title">Our Reviews</h1>
        <div className="underline"></div>
      </div>
      <Review />
    </main>
  );
}

export default App;
