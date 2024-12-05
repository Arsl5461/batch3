import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { Data } from '../../../../data/Data';
import BarChart from './BarChart';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import LineChart from './LineChart';
import Doughnut from './DoughnutChart';
import PieChart from './PieChart';
import BubbleChart from "./BubbleChart"
// import PolarArea from './PolarArea';
import PolarAreaChart from './PolarArea';

ChartJS.register(ArcElement, Tooltip, Legend);
function Charts() {
    ChartJS.register(ArcElement);
    const [userData]=useState({
        labels:Data.map((data)=>data.year),
        datasets:[
          {
            label:"User Gained",
            data:Data.map((data)=>data.userGain),
            backgroundColor:["red","blue","green","yellow","black"]
          },
        ]
    })

  return (

    <main id="main" class="main">

    <div class="pagetitle">
      <h1>Chart.js</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
          <li class="breadcrumb-item">Charts</li>
          <li class="breadcrumb-item active">Chart.js</li>
        </ol>
      </nav>
    </div>

    <p>Chart.JS Examples. You can check the <Link to="https://www.chartjs.org/docs/latest/samples/" target="_blank">official website</Link> for more examples.</p>

    <section class="section">
      <div class="row">

        <div class="col-lg-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Bar Chart</h5>

            <BarChart chartData={userData}/>  
           
     
        
           
              

            </div>
          </div>
        </div>
        <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Line Chart</h5>
        
          <LineChart chartData={userData}/>  

   
      
         
            

          </div>
        </div>
      </div>

       
      </div>
      <div class="row">

<div class="col-lg-6">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Doughnut Chart</h5>

    <Doughnut chartData={userData}/>  
         


   
      

    </div>
  </div>
</div>
<div class="col-lg-6">
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Pie Chart</h5>
  
  <PieChart chartData={userData}/>  
    


 
    

  </div>
</div>
</div>


</div>
<div class="row">

<div class="col-lg-6">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Bubble Chart</h5>

    <BubbleChart chartData={userData}/>  
    


   
      

    </div>
  </div>
</div>
<div class="col-lg-6">
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Polar Area Chart</h5>
  <PolarAreaChart chartData={userData}/>  
          


 
    

  </div>
</div>
</div>


</div>
    </section>

  </main>

  )
}

export default Charts