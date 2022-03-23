import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Components/mainpages/Home"
import About from  "./Components/mainpages/About"
import Error from "./Components/mainpages/Error"
import Navbar from "./Components/Navbar"
import SingleCocktail from "./Components/Innerpages/SingleCocktail"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />} ></Route>
      <Route path="/cocktail/:id" element={<SingleCocktail />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
