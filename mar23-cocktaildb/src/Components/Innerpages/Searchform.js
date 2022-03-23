import React, { useEffect } from "react";
import { useGlobalContext } from "../Context";
const SearchForm = ()=>{
    const { setSearchterm }=useGlobalContext()
    const searchValue = React.useRef('')
    useEffect(()=>{
        searchValue.current.focus()
    },[])
    const handleChange = ()=>{
        setSearchterm(searchValue.current.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    return(
        <section className="search section">
            <form onSubmit={handleSubmit} className="search-form">
                <div className="form-controls">
                <label htmlFor="name" className="labelname">search your favourite cocktail</label>
                <input type="text" name="name" id="name" onChange={handleChange} ref={searchValue}/>
                </div>
            </form>
        </section>
    )
}
export default SearchForm