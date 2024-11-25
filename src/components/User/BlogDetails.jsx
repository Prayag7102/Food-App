import React,{useState,useEffect, useRef} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import Footer from './Footer';
import HeaderApp from './HeaderApp';

export default function BlogDetails() {
    const [data, setData] = useState();
    const {id} = useParams();
    

    useEffect(()=>{
        axios.get(`http://localhost:8000/blogs/${id}`).then((res)=>{
           setData(res.data);
            //photo.current.value = res.data.photo;
            //title.current.value = res.data.title;
            //date.current.value = res.data.date;
            //author.current.value = res.data.author;
            //descriptions.current.value = res.data.descriptions;
        },[data])
    })
  return (
    <div>
        <HeaderApp/>
        <div className='container'>
            <h1 className='text-center mt-5'>Blog Details</h1>
            <div className='row'>
                {data ? (
                    <div className="col-md-12  mt-4">
                    <div className="card border-0 p-5">
                      <img src={data.photo}/>
                      <h2>{data.title}</h2>
                      <p>{data.date}, by {data.author}, 2 Comments</p>
                      <p>{data.descriptions} </p>
                    </div>
                  </div>
                ): (
                    <p>Loading Blogs....</p>
                )}
            
            </div>

        </div>
<Footer/>
    </div>
  )
}
