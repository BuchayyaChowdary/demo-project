import {Component} from 'react'
import './index.css'
class Date extends Component{
    state={
        error:false,
        result:'',
    }

    handleClick=()=>{
        this.setState({error:false,result:''})
        const date=document.getElementById('date').value
        const datePattern='([0-9]{4})/([0-9]{2})/([0-9]{2})'
        if(date===''){
            this.setState({error:true,result:'date should not be empty'})
        }
        else if(!date.match(datePattern)){
            this.setState({error:true,result:'date should be in yyyy/mm/dd format'})
        }
        else{
            this.getCalendarData(date)
        }
    }
    
    getCalendarData=async(date)=>{
        const options={
            method:'POST',
            body:JSON.stringify({date}),
            headers: {
                "Content-type": "application/json",
                "Accept":"application/json"
            }
        }
        try{
            const response=await fetch('http://localhost:4000/',options)

            if(response.ok===true){
                const data=await response.json()
                const{day,date,month,year}=data
                const details=`${day}, ${date}, ${month}, ${year}`
                this.setState({result:details})
            }
            else{
                this.setState({result:'Invalid Date'})
            }
        }
        catch(error){
            this.setState({result:error.message})
        }    
    }

    render()
    {
        const{error,result}=this.state
        return (
            <div className="calendar-container">
            <div className="input-container">
            <label htmlFor="date">Enter the date</label>
            <input type="text" id="date" placeholder="yyyy/mm/dd" className="input-field"/>
            {error && <p className="error">{result}</p>}
            </div>
            <button type="button" onClick={this.handleClick}>Get Calendar data</button>
            {!error && <p className="success">{result}</p>}
            </div>
        )
    }
}
export default Date

