import React,{useState,useEffect} from "react"
import Data from "./data"
import { FaQuoteRight } from "react-icons/fa";
import {FiChevronLeft, FiChevronRight } from "react-icons/fi"

const Review = ()=>{
    const [index,setIndex]=useState(0)
    const [people,setPeople]=useState(Data)

    const prevSlide = ()=>{
        setIndex((oldIndex)=>{
            let tempIndex=oldIndex-1
            if(tempIndex<0){
                tempIndex = people.length-1
              }
            return tempIndex
        })
    }
    const nextSlide = ()=>{
        setIndex((oldIndex)=>{
            let tempIndex=oldIndex+1
            if(tempIndex>people.length-1){
                tempIndex = 0
              }
            return tempIndex
        })
    }



    
    useEffect(()=>{
        let slider=setTimeout(()=>{
            
        setIndex((oldIndex)=>{
            let ind=oldIndex+1
            if(ind>people.length-1){
                ind=0
            }
            return ind
        })
    },3000)
    return ()=>{
        clearTimeout(slider)
    }
},[index,people.length])

    return(
        <div className="slider">
            {
                people.map((person,personIndex)=>{
                    const {id,image,name,title,quote}=person
                    let position='nextSlide'
                    if(personIndex===index){
                        position='activeSlide'
                    }
                    if(personIndex===index-1 || (index===0 && personIndex===people.length-1)){
                        position = "lastSlide"
                      }
                    return(
                        <article className={position} key={id}>
                            <img src={image} alt={name} className="image" />
                            <h4>{name}</h4>
                            <p className="title">{title}</p>  
                            <p className="text">{quote}</p>  
                            <FaQuoteRight className="icon" />
                        </article>
                    )
                })
            }
            <button className="prev" onClick={prevSlide}><FiChevronLeft /></button>
      <button className="next" onClick={nextSlide}><FiChevronRight /></button>
        </div>
    )
}
export default Review