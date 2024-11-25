import React,{useState,useEffect,useRef} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import AdminSidebar from './AdminSidebar';

export default function EditBlogs() {
    const [data,setData] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();
    const photo = useRef();
    const title = useRef();
    const date = useRef();
    const author = useRef();
    const descriptions = useRef();


    useEffect(()=>{
        axios.get(`http://localhost:8000/blogs/${id}`).then((res)=>{
            
            photo.current.value = res.data.photo;
            title.current.value = res.data.title;
            date.current.value = res.data.date;
            author.current.value = res.data.author;
            descriptions.current.value = res.data.descriptions;
            
        })
    })

    //update blogs here

    const FormOnsubmitHandler = (e)=>{
        e.preventDefault();
        const update = {
        photo:photo.current.value,
        title:title.current.value,
        date:date.current.value,
        author:author.current.value,
        descriptions:descriptions.current.value,
        }
        
        axios.put(`http://localhost:8000/blogs/${id}`,update).then(()=>{
            Swal.fire({
                icon:'success',
                title:'Blog update Successfully',
                showConfirmButton:true,
                timer:1500
            })
            navigate('/admin/manage-blogs')
        })
    }

  return (
    <div>
         <div className='row'>
            <div className='col-md-3'>
                <AdminSidebar/>
            </div>
            <div className='col-md-9'>
            <h1 className='text-center text-uppercase'>Update Blogs Here</h1>
                <form onSubmit={FormOnsubmitHandler} encType='multipart/form-data' >
                    <div className='form-group mt-4'>
                        <input type='text' placeholder='Blog Photo' ref={photo} className='form-control' />
                    </div>
                    <div className='form-group mt-4'>
                        <input type='text' placeholder='Blog Title' ref={title} className='form-control' />
                    </div>

                    <div className='form-group mt-4'>
                        <input type='date' placeholder='Addded date' ref={date} className='form-control' />
                    </div>
                    <div className='form-group mt-4'>
                        <input type='text' placeholder='author name' ref={author} className='form-control' />
                    </div>

                    <div className='form-group mt-4'>
                        <textarea type='text' placeholder='descriptions' ref={descriptions} className='form-control'></textarea>
                    </div>

                    <div className='form-group mt-4'>
                        <input type='submit' value="update blogs" className='btn btn-md btn-dark text-white bg-dark' />
                    </div>
                </form>
            </div>

            </div>

    </div>
  )
}
