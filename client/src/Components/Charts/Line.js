import React, { useState } from 'react';
import { Line } from "react-chartjs-2";
import '../../Styling/Line.css'
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

function LineChart({logs}) {

    const sortedByDate = [...logs].sort((a,b) => {
        return new Date(a.date) - new Date(b.date)})

    //x-axis
    const date = sortedByDate.map(log=>log.date)

    //y-axis
    const happiness = sortedByDate.map(log=>log.happiness)
    const weight = sortedByDate.map(log=>log.weight)
    const duration = sortedByDate.map(log=>log.activity_duration)

    const [selectedLabel, setSelectedLabel] = useState("Happiness")
    const [selectedData, setSelectedData] = useState(happiness)

    const data = {
        labels: date,
        datasets: [{
            label: selectedLabel,
            data: selectedData,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }

    return (
       <div>
           <div className="button-container">
                <button className="detail-buttons" onClick={()=>{setSelectedLabel("Happiness"); setSelectedData(()=> happiness)}}>Happiness</button>
                <button className="detail-buttons" onClick={()=>{setSelectedLabel("Duration"); setSelectedData(()=> duration)}}>Duration</button>
                <button className="detail-buttons" onClick={()=>{setSelectedLabel("Weight"); setSelectedData(()=> weight)}}>Weight</button>
           </div>
            <div className="color-box"></div>
            <h3 className="graph-label">{selectedLabel}</h3>
            <div className="line-graph" >
                <Line className="line-graph-self" data={data}/>
            </div>
       </div>
    );
}

export default LineChart;
