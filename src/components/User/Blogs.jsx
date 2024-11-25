import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Header from './Header'
//import aboutimg from '../../assets/images/dessert-3331910.png'
//import food from '../../assets/images/food-712665.png'
import Footer from './Footer'

function Blogs() {
  const [mydata, setData] = useState([]);
  const navigate = useNavigate();
  //const navigate = useNavigate();
  useEffect(()=>{
    axios.get(`http://localhost:8000/blogs`).then((response)=>{
      setData(response.data)
    })
  },[mydata])
  return (
    <div>
        <Header/>
         {/*Blogs section start here */}
         <div className="hunt-blogs">
          <h2 className="text-center mt-5">Check</h2>
          <h3 className="text-center">Our Blogs</h3>
          {/*<p className="text-center"><i className="bi bi-fan" /></p>*/}
          <div className="row">
            {mydata && mydata.map((items)=>{
              return(
            <div className="col-md-6  mt-4">
              <div className="card border-0 p-5">
                <img src={items.photo} style={{"height": 450}} />
                <h2>{items.title}</h2>
                <p>{items.date}, by {items.author}, 2 Comments</p>
                {/*<p>{items.descriptions} </p>*/}
                <button onClick={()=>navigate(`/blogs-details/${items.id}`)} className='p-4 btn btn-warning'>Read More</button>
              </div>
            </div>
            )})}
            
          </div>    
        </div>
        <Footer/>
    </div>
  )
}

export default Blogs