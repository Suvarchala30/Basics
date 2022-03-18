import React , { createContext,useContext, useState } from "react";

const UserContext = createContext()
const CityContext = createContext()
const Contextcomp = ()=>{
    const [user,setuser]=useState('Suvarchala')
    const [city,setCity]=useState('Hyderabad')
    return(
        <div>
            <UserContext.Provider value={user}>
                <CityContext.Provider value={city}>
                    <h1>{user}</h1>
                    <Component1 user={user} />
                </CityContext.Provider>
            </UserContext.Provider>
        </div>
    )
}


const Component1 = ()=>{
    return(
        <>
        <h1>Component 1</h1>
        <Component2 />
        </>
    )
}

const Component2 = ()=>{
    return(
        <>
        <h1>Component 2</h1>
        <Component3 />
        </>
    )
}

const Component3 = ()=>{
    return(
        <>
        <h1>Component 3</h1>
        <Component4 />

                </>
    )
}

// const Component4 = ()=>{
//     //using react.context
//     return(
//         <>
//         <h1>Component 4</h1>
//         <UserContext.Consumer>
//             {
//                 (user)=>(
//                     <CityContext.Consumer>
//                         {(city)=><h2>Hi {user} again! Welcome to {city}</h2>}
//                     </CityContext.Consumer>
//                 )
//             }
//         </UserContext.Consumer>
//         </>
//     )
// }

const Component4=()=>{
    //using useContext
    const user = useContext(UserContext);
    const city=useContext(CityContext);
    return(
        <>
        <h1>Component 4</h1>
       <h4>Hi {user} again! Welcome back to {city}</h4>
        </>
    )
}

export default Contextcomp