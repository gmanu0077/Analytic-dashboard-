import React, { Component } from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import Data from './data.json'
 
class Micky extends Component{
    render(){
        let dates=[]
        dates=Data.map(item => {
                 
            let date=new Date(item.created_at).toDateString();
            return date;
          })
        let points = Data     
        
        const options={
            
            chart: {
                options3d: {
                    enabled: true,
                    alpha: 45,
                    beta: 0
                },
                type: 'pie'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 35,
                    dataLabels: {
                        enabled: true,
                        format: '{point.percentage:.1f} %'
                    }
                }
            },
            title:{
              text:'DATA'
            },
            
            series:[{
                name: "Comments on Issues",
                data: Data.map(point =>  ({
                    name:new Date( point.created_at).toDateString(),
                    y: point.comments
                }))
            }]
        };
        

        return(
            <div className="charts">
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        )
    }
   
}

export default Micky;