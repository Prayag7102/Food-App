import React,{useState,useRef} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import AdminSidebar from './AdminSidebar';

export default function AddBlogs() {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();
    const photo = useRef();
    const title = useRef();
    const date = useRef();
    const descriptions = useRef();
    const author = useRef();

    const FormSumbmitHandler = (e)=>{
        e.preventDefault();

        let insert = {
            photo: photo.current.value,
            title: title.current.value,
            date: date.current.value,
            author: author.current.value,
            descriptions: descriptions.current.value,
        }
        axios.post(`http://localhost:8000/blogs`,insert).then(()=>{
            Swal.fire({
                icon:'success',
                title: 'Blog Added Successfully',
                showConfirmButton: true,
                timer: 1500
            })
            navigate('/admin/add-blogs')
        })
        e.target.reset();
    }
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3'>
                        <AdminSidebar/>
                    </div>
                    <div className='col-md-9'>
                <h1 className='text-center text-uppercase'>Add Blogs Here</h1>
                <form onSubmit={FormSumbmitHandler} encType='multipart/form-data' >
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
                        <input type='submit' value="Added Blogs" className='btn btn-md btn-dark text-white bg-dark' />
                    </div>
                 </form>
                </div>
                </div>
            </div>
        </div>
    )
}

