import React,{useState} from "react"
import Data from "./data"
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from "react-icons/fa"

const Review = ()=>{
    const [index,setIndex]=useState(0)
    const {name,job,image,text}=Data[index]
    const prevPerson =()=>{
        const newIndex1=index-1
        if(newIndex1<0){
            newIndex1=Data.length-1
        }
        setIndex(newIndex1)
    }
    const nextPerson=()=>{
        const newIndex=index+1
        if(newIndex>=Data.length){
            newIndex=0
        }
        setIndex(newIndex)
    }
    const randomPerson=()=>{
        const newIndex= Math.floor((Math.random())*Data.length)
        if(newIndex===index){
            newIndex+=1
        }
        if(newIndex>=Data.length){
            newIndex=0
        }
        setIndex(newIndex)
    }
    return(
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} />
                <span className="quote-container">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="text">{text}</p>
            <div className="button-container">
                <button className="prev-person" onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className="next-person" onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
            <button className="random-btn" onClick={randomPerson}>
                Surprise Me
            </button>
        </article>
    )
}
export default Review