import React,{useState,useEffect} from "react"
import './App.css';
import Loading from "./Components/Loading";
import Tours from "./Components/Tours"

const App=()=>{
  const [tours,setTours] = useState([])
  const [loading,setLoading] = useState(true)
  const url="https://course-api.com/react-tours-project"

  useEffect(()=>{
    fetchTours()
  },[])

  const fetchTours=async ()=>{
    try{
      const response = await fetch(url)
      const fetchedreponse = await response.json()
      setTours(fetchedreponse)
      setLoading(false)
    }catch(err){
      console.log(err)
    }
  }
  const removeTour = (id) =>{
    setTours(tours.filter((tour)=>tour.id!==id))
  }
  if(loading){
    return(
      <main>
        <Loading />
      </main>
    )
  }
  if(tours.length === 0){
    return(
      <main>
        <div className="title">
              <h2>No tours left</h2>
              <button className="btn" onClick={fetchTours}>refresh</button>
            </div>
      </main>
    )
  }
  return(
<main>
<Tours tours={tours} removeTour={removeTour}/>
</main>
  )
}

export default App;

