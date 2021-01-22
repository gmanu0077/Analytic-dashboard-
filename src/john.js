import React, { Component } from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import Data from './data.json'

class John extends Component{
    state={
        dates: Data.map(item => new Date(item.created_at).toDateString()),
        points: Data.map(item => item.comments),
        filter: {
            date: "",
            month: "",
            year: ""
        }
    }
    filter=(e)=>{
        let fill = e.target.value

        const newFilter = {
            ...this.state.filter,
            [e.target.id]: e.target.value
        }        

        const fullData = Data
        const filteredData = fullData.filter(item => {
            let date = new Date(item.created_at);
            let year = date.getFullYear();
            let month = date.getMonth()+1;
            let datee = date.getDate();

            const yearCondition = newFilter.year === "" || newFilter.year == year
            const monthCondition = newFilter.month === "" || newFilter.month == month
            const dateCondition = newFilter.date === "" || newFilter.date == datee

            return yearCondition && monthCondition && dateCondition
        });
        
        let dates = filteredData.map(item => new Date(item.created_at).toDateString())
        let points = filteredData.map(item => item.comments)

        this.setState({
            filter: newFilter
        })

        this.setState({
            dates: dates,
            points: points
        })      
    }
    render(){        
        const options={
            xAxis: {
                categories:this.state.dates,
               
                },
            
      
            chart:{
                type:'column',
                zoomType:'xy'
            },
            yAxis:{
                title:{
                    text:'comments'}
            },

            title:{
              text:'DATA'
            },
            series:[
                {   
                    colorByPoint: true,
                    name:'',
                    data:this.state.points
                }
            ]
        };

        return(
            <div className="charts">
                <HighchartsReact highcharts={Highcharts} options={options} />
                <div className="container">
                <div className="container text-black ">
                <h4>filter</h4>
                <label htmlFor="year">year</label>
                <input id="year" onKeyUp={this.filter} className="container input"  placeholder="enter the year number"/>
                <label htmlFor="month">month</label>
                <input id="month" onKeyUp={this.filter} className="container input"  placeholder="enter the month number"/>
                <label htmlFor="date">date</label>
                <input id="date" onKeyUp={this.filter} className="container input"  placeholder="enter the date" /></div>
            </div></div>
          )
    }
}
export default John;