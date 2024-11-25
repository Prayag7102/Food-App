import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AdminSidebar from './AdminSidebar';


export default function ManageBlogs() {
    const [mydata, setMydata] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8000/blogs`).then((response) => {
            setMydata(response.data)
        })
    }, [mydata])
    return (
        <div>
            <div className='row'>
                <div className='col-md-3'>
                    <AdminSidebar />
                </div>
                <div className='col-md-9'>
                    <h3>Manage All Blogs here</h3>

                    <table className='table table-bordered table-responsive w-100'>
                        <thead className='thead-dark'>
                            <tr className=''>

                                <th>Title</th>
                                <th>Photo</th>
                                <th>Descriptions</th>
                                <th>Added Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mydata && mydata.length > 0 ? (
                                mydata.map((items) => (
                                    <tr key={items.id}>
                                        <td>{items.title}</td>
                                        <td>
                                            <img
                                                src={items.photo}
                                                alt="photo"
                                                className="img-fluid w-75"
                                            />
                                        </td>
                                        <td>{items.descriptions}</td>
                                        <td>{items.date}</td>
                                        <td>
                                            <div style={{ minWidth: "120px" }}>
                                                <button
                                                    onClick={() => navigate(`/delete-blogs/${items.id}`)}
                                                    type="button"
                                                    className="btn btn-danger"
                                                >
                                                    <span className="bi bi-trash-fill p-3"></span>
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => navigate(`/editblogs/${items.id}`)}
                                                    className="btn btn-primary mt-1"
                                                >
                                                    <span className="bi bi-pencil-fill p-3"></span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center">
                                        No blogs added.
                                    </td>
                                </tr>
                            )}
                        </tbody>

                    </table>
                </div>

            </div>

        </div>
    )
}
