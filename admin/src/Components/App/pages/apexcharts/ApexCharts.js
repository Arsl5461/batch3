import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import BarChart from './BarChart';
import LineCharts from './LineCharts';
function ApexCharts() {
    
    const [options]=useState({
chart:{
    id:"apexchart-example"
},
xaxis:{
categories:[1991,1992,1993,1994,1995,1996,1997,1998,1999]
}
    })
    const [series]=useState([{
        name:"series-1",
        data:[30,40,35,50,49,65,21,36,52]
    }])

  return (

    <main id="main" class="main">

    <div class="pagetitle">
      <h1>ApexChart</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
          <li class="breadcrumb-item">Charts</li>
          <li class="breadcrumb-item active">ApexChart</li>
        </ol>
      </nav>
    </div>

    <p>ApexChart Examples. You can check the <Link to="https://apexcharts.com/docs/react-charts/" target="_blank">official website</Link> for more examples.</p>

    <section class="section">
      <div class="row">

        <div class="col-lg-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Bar Chart</h5>

            <BarChart options={options} series={series}  />  
           
     
        
           
              

            </div>
          </div>
        </div>
         <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Line Chart</h5>
        
          <LineCharts options={options} series={series} />  

   
      
         
            

          </div>
        </div>
      </div>
      </div>
</section>
       
     
      
    

  </main>
     




  )
}

export default ApexCharts