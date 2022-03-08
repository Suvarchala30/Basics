import React,{useState} from "react"
import './App.css';
import Categories from "./Categories"
import Data from "./data"
import Menu from "./Menu"

const allCategories = ['All',...new Set(Data.map((item)=>item.category))]


function App() {
  const [menuItem,setMenuItem]=useState(Data)
  const [category,setCategory]=useState(allCategories)

  const filteritems = (categoryName) =>{
    if(categoryName === 'All'){
      setMenuItem(Data)
    }
    else{
      const newItems = Data.filter((item)=>item.category === categoryName)
      setMenuItem(newItems)
    }
  }
  return (
    <div className="App">
      <section className="menu-section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories category={category} filteritems={filteritems}/>
        <Menu items={menuItem}/>
      </section>
    </div>
  );
}

export default App;
