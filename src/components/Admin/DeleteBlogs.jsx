import React,{useState, useEffect} from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom'


export default function DeleteBlogs() {
  const [data, setData] = useState([]);
  const {id} = useParams();
  const navigate = useNavigate('');

  useEffect(()=>{
    axios.delete(`http://localhost:8000/blogs/${id}`).then(()=>{
      
      Swal.fire({
        title: "Good job!",
        text: "Your category has been deleted successfully!",
        icon: "error"
      });
      navigate('/admin/manage-blogs')
    })
  })
  return (
    <div></div>
  )
}
