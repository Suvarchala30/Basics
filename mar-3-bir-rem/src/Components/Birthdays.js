import React from "react";
import Data from "../Resources/Data"
import List from "./List"

class Birthdays extends React.Component{
    constructor(props){
        super(props)
        this.state={
            people:[],
            loading:true
        }
        this.clearAll=this.clearAll.bind(this)
    }
    async componentDidMount(){
        const readPeopleData=await this.readdata()
        if(readPeopleData.length){
            this.setState({
                people:readPeopleData,
                loading:false
            })
        }
    }
    async readdata(){
        return new Promise((resolve,reject) =>{
            setTimeout(()=>resolve(Data),4000)
        })
    }
    clearAll(){
        this.setState({
            people:[]
        })
    }
    removeThisPerson=(id)=>{
        this.setState({people:this.state.people.filter(peeps => peeps.id !==id)})
    }
    render(){
        return(
                <main>
                    <section className="container">
                        {
                            this.state.loading ?
                            <h3>Loading...</h3>
                            :
                            <>
                            <h3>{this.state.people.length} Birthdays Today</h3>
                            <List people={this.state.people} removeThisPerson={this.removeThisPerson}/>
                            <button onClick={this.clearAll}>Clear All</button>
                            </>
                        }
                    </section>
                </main>
        )
    }
}
export default Birthdays