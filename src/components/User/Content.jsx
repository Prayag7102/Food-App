import React,{useState,useEffect} from 'react'
import aboutimg from '../../assets/images/dessert-3331910.png'
import salad from '../../assets/images/salad-2150548.png'
import food from '../../assets/images/food-712665.png'
import res from '../../assets/images/restaurant-691397.png'
import axios from 'axios'

function Content() {
  const [data , setData] = useState([]);
  useEffect(()=>{
    axios.get(`http://localhost:8000/blogs`).then((res)=>{
      setData(res.data)
    })
  },[data])
  return (
    <div>
        {/* hunger hunt content section */}
      <section className="container hunt-content">
        {/* hunger hunt fetaures section */}
        <div className="hunt-feature">
          <div className="row">
            <div className="col-md-6 p-4 mt-5">
              <img src={aboutimg} className="img-fluid w-100" />
            </div>
            <div className="col-md-6 p-4 mt-5 hunt-feature-txt">
              <h2 className="text-center w-50 mx-auto">About Us</h2>
              <p className="text-center w-25 mx-auto">the most awarded restaurant</p>
              <p className="text-center"><bi className="bi bi-fan" /></p>
              <p className="text-center w-75 mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
            </div>
            <h2 className="text-center mt-3">Check</h2>
            <h3 className="text-center">Featured Dishes</h3>
            <p className="text-center"><bi className="bi bi-fan" /></p>
            <div className="col-md-4">
              <div className="card">
                <center>
                  <img src={salad} className="img-fluid w-100" />
                  <address>
                    <p>Salad</p>
                    <h3>Italian Fresh Salad</h3>
                    <p>Italian salad consists of tomatoes, onion, feta cheese, and olives.</p>
                    <p><button type="button" className="btn btn-sm btn-style">Rs.45-/</button></p>
                  </address>
                </center>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <center>
                  <img src={aboutimg} className="img-fluid w-100" />
                  <address>
                    <p>Salad</p>
                    <h3>Italian Fresh Salad</h3>
                    <p>Italian salad consists of tomatoes, onion, feta cheese, and olives.</p>
                    <p><button type="button" className="btn btn-sm btn-style">Rs.45-/</button></p>
                  </address>
                </center>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <center>
                  <img src={food} className="img-fluid w-100" />
                  <address>
                    <p>Salad</p>
                    <h3>Italian Fresh Salad</h3>
                    <p>Italian salad consists of tomatoes, onion, feta cheese, and olives.</p>
                    <p><button type="button" className="btn btn-sm btn-style">Rs.45-/</button></p>
                  </address>
                </center>
              </div>
            </div>
          </div> 
        </div>
        {/* open at */}
        <div className="hunt-open-at mt-5">
          <div className="hunt-open-at-txt">
            <h5>Time</h5>
            <h2>OPEN AT</h2>
            <p className="text-center"><bi className="bi bi-fan" /></p>
            <div className="row">
              <div className="col-md-5 ms-5">
                <p className="text-center">MONDAY - FRIDAY</p>
                <p className="text-center">7am - 10pm(Lunch/Dinner)</p>
              </div>
              <div className="col-md-5 ms-5">
                <p className="text-center">SATURDAY - SUNDAY</p>
                <p className="text-center">1pm - 9pm(Lunch/Dinner)</p>
              </div>
            </div>
          </div>
        </div>
        {/* discover section start here */}
        <div className="hunt-discover">
          <h2 className="text-center mt-5">Discover</h2>
          <h3 className="text-center">Our Starter</h3>
          <p className="text-center"><bi className="bi bi-fan" /></p>
          <div className="row">
            <div className="col-md-6  mt-4">
              <p><b className="text-dark">Soft-Boiled Organic Egg with “soldiers” . . . . . . . . . . . . . . <b className="txt-col">Rs.(5.00)</b></b></p>  
              <p><b className="text-dark">Soft-Boiled Organic Egg with “soldiers” . . . . . . . . . . . . . . <b className="txt-col">Rs.(5.00)</b></b></p>  
              <p><b className="text-dark">Soft-Boiled Organic Egg with “soldiers” . . . . . . . . . . . . . . <b className="txt-col">Rs.(5.00)</b></b></p>  
              <p><b className="text-dark">Soft-Boiled Organic Egg with “soldiers” . . . . . . . . . . . . . . <b className="txt-col">Rs.(5.00)</b></b></p>  
              <p><b className="text-dark">Soft-Boiled Organic Egg with “soldiers” . . . . . . . . . . . . . . <b className="txt-col">Rs.(5.00)</b></b></p>  
              <p><b className="text-dark">Soft-Boiled Organic Egg with “soldiers” . . . . . . . . . . . . . . <b className="txt-col">Rs.(5.00)</b></b></p>  
            </div>
            <div className="col-md-6  mt-4">
              <p><b className="text-dark">Soft-Boiled Organic Egg with “soldiers” . . . . . . . . . . . . . . <b className="txt-col">Rs.(5.00)</b></b></p>  
              <p><b className="text-dark">Soft-Boiled Organic Egg with “soldiers” . . . . . . . . . . . . . . <b className="txt-col">Rs.(5.00)</b></b></p>  
              <p><b className="text-dark">Soft-Boiled Organic Egg with “soldiers” . . . . . . . . . . . . . . <b className="txt-col">Rs.(5.00)</b></b></p>  
              <p><b className="text-dark">Soft-Boiled Organic Egg with “soldiers” . . . . . . . . . . . . . . <b className="txt-col">Rs.(5.00)</b></b></p>  
              <p><b className="text-dark">Soft-Boiled Organic Egg with “soldiers” . . . . . . . . . . . . . . <b className="txt-col">Rs.(5.00)</b></b></p>  
              <p><b className="text-dark">Soft-Boiled Organic Egg with “soldiers” . . . . . . . . . . . . . . <b className="txt-col">Rs.(5.00)</b></b></p>  
            </div>
          </div>    
          <p className="text-center"><button className="btn btn-dark btn-sm p-2 text-white w-0 mx-auto mt-3">VIEW FULL MENU</button></p>
        </div>
        {/*Blogs section start here */}
        <div className="hunt-blogs">
          <h2 className="text-center mt-5">Check</h2>
          <h3 className="text-center">Our Blogs</h3>
          <p className="text-center"><bi className="bi bi-fan" /></p>
          <div className="row">
           
            {data && data.map((items)=>{
              return(
                <div className="col-md-6  mt-4">
                <div className="card border-0 p-5">
                  <img src={items.photo} style={{"height": 350}}/>
                  <h2>{items.title}</h2>
                  <p>{items.date}, by {items.author}, 2 Comments</p>
                  {/*<p>{items.descriptions} </p>*/}
                </div>
              </div>
              )
            })}
          </div>    
        </div>
        {/*dicover gallery section start here */}
        <div className="hunt-gallery">
          <h2 className="text-center mt-5">Discover</h2>
          <h3 className="text-center">Our Gallery Images</h3>
          <p className="text-center"><bi className="bi bi-fan" /></p>
          <a className="vlightbox1" href="images/content-img.png" title="Hunt delecous Food"><img src={aboutimg} alt={1} /></a>
          <a className="vlightbox1" href="images/content-img1.png" title="Hunt delecous Food"><img src={salad} alt={1} /></a>
          <a className="vlightbox1" href="images/dessert-3331910.png" title="Hunt delecous Food"><img src={aboutimg} alt={1} /></a>
          <a className="vlightbox1" href="images/food-712665.png" title="Hunt delecous Food"><img src={food} alt={1} /></a>
          <a className="vlightbox1" href="images/restaurant-691397.png" title="Hunt delecous Food"><img src={res}alt={1} /></a>
          <a className="vlightbox1" href="images/salad-2150548.png" title="Hunt delecous Food"><img src={salad} alt={1} /></a>
          <a className="vlightbox1" href="images/food-712665.png" title="Hunt delecous Food"><img src={food} alt={1} /></a>
          <a className="vlightbox1" href="images/content-img.png" title="Hunt delecous Food"><img src={aboutimg} alt={1} /></a>
        </div> 
        <p className="text-center"><button className="btn btn-dark btn-sm text-white w-0  p-2 mx-auto mt-3">VIEW GALLERY</button></p>
      </section>
      {/* hunger hunt content closed here */}
    </div>
  )
}

export default Content