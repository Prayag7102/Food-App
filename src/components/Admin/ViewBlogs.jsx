import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar';
import { useNavigate } from 'react-router-dom';

export default function ViewBlogs() {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/blogs')
            .then((response) => {
                setBlogs(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <>
            <div className='row'>
                <div className='col-md-3'>
                    <AdminSidebar />
                </div>
                <div className='col-md-9'>
                    <table className="table table-bordered table-hover mt-4">
                        <thead className="table-dark">
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Author</th>
                                <th>Comments</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map((blog, index) => (
                                <tr key={blog.id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <img
                                            src={blog.photo}
                                            alt={blog.title}
                                            style={{ height: 100, width: 100, objectFit: 'cover' }}
                                        />
                                    </td>
                                    <td>{blog.title}</td>
                                    <td>{blog.date}</td>
                                    <td>{blog.author}</td>
                                    <td>2</td>
                                    <td>
                                        <div className="d-flex justify-content-around">
                                            <button
                                                onClick={() => navigate(`/blogs-details/${blog.id}`)}
                                                className="btn btn-primary btn-sm"
                                            >
                                                View
                                            </button>
                                            <button
                                                onClick={() => navigate(`/editblogs/${blog.id}`)}
                                                className="btn btn-warning btn-sm"
                                            >
                                                Edit
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}
