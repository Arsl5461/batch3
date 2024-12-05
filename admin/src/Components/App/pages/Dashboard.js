import React,{useState} from 'react'
import {Link} from "react-router-dom"
import {Chart as ChartJS} from "chart.js/auto"
import { Line,Doughnut,Pie} from "react-chartjs-2";
import { indicator,Data,topSellingProducts,newsItem,recentSales} from '../../../data/Data';
import Product from "../../../assets/img/product-1.jpg";
// import News from "../../../assets/img/news-1.jpg"
import {  ArcElement, Tooltip, Legend } from "chart.js";
import FilterPage from '../../Common/FilterPage';
import BreadCrumbs from '../../Common/BreadCrumbs';
ChartJS.register(ArcElement, Tooltip, Legend);
function Dashboard() {
// Sales Report Data
  ChartJS.register(ArcElement);
  const [salesData]=useState({
      labels:Data.map((data)=>data.year),
      datasets:[
        {
          label:"User Gained",
          data:Data.map((data)=>data.userGain),
          backgroundColor:["red","blue","green","yellow","black"]
        },
      ]
  })
  // Budget report Data
  const [budgetData]=useState({
    labels:Data.map((data)=>data.year),
    datasets:[
      {
        label:"Budget Report",
        data:indicator.map((data)=>data.max),
        backgroundColor:["red","blue","green","yellow","black"]
      },
    ]
})
//  Website Traffic report Data
 const [webTrafficData]=useState({
  labels:Data.map((data)=>data.value),
  datasets:[
    {
      label:"Web Traffic Report",
      data:indicator.map((data)=>data.max),
      backgroundColor:["red","blue","green","yellow","black"]
    },
  ]
})

const [products]=useState(topSellingProducts);
const [news]=useState(newsItem)
const [sales]=useState(recentSales)
// console.log(products);
// console.log(news);
  return (
    <main id="main" className="main">

    <div className="pagetitle">
     <BreadCrumbs title={"Dashboard"} heading={"Dashboard"}/>
    {/* </div><!-- End Page Title --> */}

    <section className="section dashboard">
      <div className="row">

        {/* <!-- Left side columns --> */}
        <div className="col-lg-8">
          <div className="row">

            {/* <!-- Sales Card --> */}
            <div className="col-xxl-4 col-md-6">
              <div className="card info-card sales-card">

                <FilterPage/>

                <div className="card-body">
                  <h5 className="card-title">Sales <span>| Today</span></h5>

                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-cart"></i>
                    </div>
                    <div className="ps-3">
                      <h6>145</h6>
                      <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>

                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* <!-- End Sales Card --> */}

            {/* <!-- Revenue Card */}
            <div className="col-xxl-4 col-md-6">
              <div className="card info-card revenue-card">

              <FilterPage/>

                <div className="card-body">
                  <h5 className="card-title">Revenue <span>| This Month</span></h5>

                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-currency-dollar"></i>
                    </div>
                    <div className="ps-3">
                      <h6>$3,264</h6>
                      <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>

                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* End Revenue Card  */}

             {/* Customers Card  */}
            <div className="col-xxl-4 col-xl-12">

              <div className="card info-card customers-card">

              <FilterPage/>

                <div className="card-body">
                  <h5 className="card-title">Customers <span>| This Year</span></h5>

                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-people"></i>
                    </div>
                    <div className="ps-3">
                      <h6>1244</h6>
                      <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">decrease</span>

                    </div>
                  </div>

                </div>
              </div>

            </div>
             {/* End Customers Card  */}

             {/* Reports  */}
            <div className="col-12">
              <div className="card">

              <FilterPage/>

                <div className="card-body">
                  <h5 className="card-title">Reports <span>/Today</span></h5>


                  <div className="chart-container">
    <h2 style={{ textAlign: "center" }}>Sales Between 2016 to 2020</h2>
    <Line
      data={salesData}
      
    />
  </div>

                  

                </div>

              </div>
            </div>
             {/* End Reports  */}

            {/* Recent Sales  */}
            <div className="col-12">
              <div className="card recent-sales overflow-auto">

              <FilterPage/>

                <div className="card-body">
                  <h5 className="card-title">Recent Sales <span>| Today</span></h5>

                  <table className="table table-borderless datatable">
                    <thead>
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
{
  sales.map((item)=>{
    return(
      <tr>

      <th scope="row"><Link to="#">{item.saleId}</Link></th>
      <td>{item.customerName}</td>
      <td><Link to="#" className="text-primary">{item.productName}</Link></td>
      <td>{item.productPrice}</td>
      <td><span className={item.status==="Approved" ? "badge badge-success" : "badge badge-danger"}>{item.status}</span></td>
    </tr>
    )
  })
}
                    </tbody>
                  </table>

                </div>

              </div>
            </div>
             {/* End Recent Sales  */}

             {/* Top Selling */}
            <div className="col-12">
              <div className="card top-selling overflow-auto">

              <FilterPage/>

                <div className="card-body pb-0">
                  <h5 className="card-title">Top Selling <span>| Today</span></h5>

                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th>Preview</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Sold</th>
                        <th>Revenue</th>
                      </tr>
                    </thead>
                    <tbody>
                     {products.map((item)=>{
                      return(
                        <tr>
  
                        <td><Link to="#"><img src={Product} width="50px" height="50px" alt=""/></Link></td>
                        <td><Link to="#" className="text-primary fw-bold">{item.productName}</Link></td>
                        <td>{item.productPrice}</td>
                        <td className="fw-bold">{item.productSold}</td>
                      
                        <td>{item.productRevenue}</td>
                        </tr>
                      )
    
                     })

                     }
                        
                    </tbody>
                  </table>

                </div>

              </div>
            </div>
             {/* End Top Selling */}

          </div>
        </div>
         {/* End Left side columns */}

        {/* Right side columns */}
        <div className="col-lg-4">

           {/* Recent Activity */}
          <div className="card">
          <FilterPage/>

            <div className="card-body">
              <h5 className="card-title">Recent Activity <span>| Today</span></h5>

              <div className="activity">

                <div className="activity-item d-flex">
                  <div className="activite-label">32 min</div>
                  <i className='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                  <div className="activity-content">
                    Quia quae rerum <Link to="#" className="fw-bold text-dark">explicabo officiis</Link> beatae
                  </div>
                </div>
                 {/* End activity item */}

                <div className="activity-item d-flex">
                  <div className="activite-label">56 min</div>
                  <i className='bi bi-circle-fill activity-badge text-danger align-self-start'></i>
                  <div className="activity-content">
                    Voluptatem blanditiis blanditiis eveniet
                  </div>
                </div>
                 {/* End activity item */}

                <div className="activity-item d-flex">
                  <div className="activite-label">2 hrs</div>
                  <i className='bi bi-circle-fill activity-badge text-primary align-self-start'></i>
                  <div className="activity-content">
                    Voluptates corrupti molestias voluptatem
                  </div>
                </div>
                 {/* End activity item */}

                <div className="activity-item d-flex">
                  <div className="activite-label">1 day</div>
                  <i className='bi bi-circle-fill activity-badge text-info align-self-start'></i>
                  <div className="activity-content">
                    Tempore autem saepe <Link to="#" className="fw-bold text-dark">occaecati voluptatem</Link> tempore
                  </div>
                </div>
                {/* End activity item */}

                <div className="activity-item d-flex">
                  <div className="activite-label">2 days</div>
                  <i className='bi bi-circle-fill activity-badge text-warning align-self-start'></i>
                  <div className="activity-content">
                    Est sit eum reiciendis exercitationem
                  </div>
                </div>
                 {/* End activity item */}

                <div className="activity-item d-flex">
                  <div className="activite-label">4 weeks</div>
                  <i className='bi bi-circle-fill activity-badge text-muted align-self-start'></i>
                  <div className="activity-content">
                    Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                  </div>
                </div>
                 {/* End activity item */}

              </div>

            </div>
          </div>
           {/* End Recent Activity  */}

          {/* Budget Report */}
          <div className="card">
          <FilterPage/>

            <div className="card-body pb-0">
              <h5 className="card-title">Budget Report <span>| This Month</span></h5>
 
              <div className="chart-container">
    
    <Doughnut
      data={budgetData}
      options={{
        plugins: {
          title: {
            display: true,
            text: "Users Gained between 2016-2020"
          }
        }
      }}
    />
  </div>

            </div>
          </div>
           {/* End Budget Report */}

           {/* Website Traffic */}
          <div className="card">
          <FilterPage/>

            <div className="card-body pb-0">
              <h5 className="card-title">Website Traffic <span>| Today</span></h5>

              
              <div className="chart-container">
    
    <Pie
      data={webTrafficData}
      options={{
        plugins: {
          title: {
            display: true,
            text: "Web Traffic between 2016-2020"
          }
        }
      }}
    />
  </div>

            </div>
          </div>
           {/* End Website Traffic */}

          {/* News & Updates Traffic */}
          <div className="card">
          <FilterPage/>

            <div className="card-body pb-0">
              <h5 className="card-title">News &amp; Updates <span>| Today</span></h5>

              <div className="news">
                {
                  news.map((item)=>{
                    return(
                      <div className="post-item clearfix">
                      <img src={item.newsImg} alt=""/>
                      <h4><Link to="#">{item.newsTitle}</Link></h4>
                      <p>{item.newsBody}</p>
                    </div>
                    )
                  })
                }
               

              </div>
              {/* End sidebar recent posts */}

            </div>
          </div>
           {/* End News & Updates  */}

        </div>

      </div>
    </section>

  </div>
  </main>
  )
}

export default Dashboard