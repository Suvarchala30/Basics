import Review from "./Review"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="title-container">
        <h1 className="title"><span>/</span> Reviews</h1>
      </div>
      <Review />
    </div>
  );
}

export default App;
