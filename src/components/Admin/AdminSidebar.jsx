import React from 'react'
import { Link } from 'react-router-dom'


export default function AdminSidebar() {
    return (
        <div>
                        <div className="bg-dark">
                            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                                <Link
                                    to="/"
                                    className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                                >
                                    <span className="fs-5 d-none d-sm-inline">Menu</span>
                                </Link>
                                <ul
                                    className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                                    id="menu"
                                >
                                    <li className="nav-item">
                                        <Link to="#" className="nav-link align-middle px-0">
                                            <i className="fs-4 bi-house" />{" "}
                                            <span className="ms-1 d-none d-sm-inline">Home</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#submenu1"
                                            data-bs-toggle="collapse"
                                            className="nav-link px-0 align-middle"
                                        >
                                            <i className="fs-4 bi-speedometer2" />{" "}
                                            <span className="ms-1 d-none d-sm-inline">Dashboard</span>{" "}
                                        </Link>
                                        <ul
                                            className="collapse show nav flex-column ms-1"
                                            id="submenu1"
                                            data-bs-parent="#menu"
                                        >
                                            <li className="w-100">
                                                <Link to="#" className="nav-link px-0">
                                                    {" "}
                                                    <span className="d-none d-sm-inline">Item</span> 1{" "}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="nav-link px-0">
                                                    {" "}
                                                    <span className="d-none d-sm-inline">Item</span> 2{" "}
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/admin/add-blogs" className="nav-link px-0 align-middle">
                                            <i className="fs-4 bi-table" />{" "}
                                            <span className="ms-1 d-none d-sm-inline">Add Blogs</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/admin/manage-blogs">
                                        Manage Blogs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#submenu2"
                                            data-bs-toggle="collapse"
                                            className="nav-link px-0 align-middle "
                                        >
                                            <i className="fs-4 bi-bootstrap" />{" "}
                                            <span className="ms-1 d-none d-sm-inline">Bootstrap</span>
                                        </Link>
                                        <ul
                                            className="collapse nav flex-column ms-1"
                                            id="submenu2"
                                            data-bs-parent="#menu"
                                        >
                                            <li className="w-100">
                                                <Link to="#" className="nav-link px-0">
                                                    {" "}
                                                    <span className="d-none d-sm-inline">Item</span> 1
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="nav-link px-0">
                                                    {" "}
                                                    <span className="d-none d-sm-inline">Item</span> 2
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link
                                            to="#submenu3"
                                            data-bs-toggle="collapse"
                                            className="nav-link px-0 align-middle"
                                        >
                                            <i className="fs-4 bi-grid" />{" "}
                                            <span className="ms-1 d-none d-sm-inline">Products</span>{" "}
                                        </Link>
                                        <ul
                                            className="collapse nav flex-column ms-1"
                                            id="submenu3"
                                            data-bs-parent="#menu"
                                        >
                                            <li className="w-100">
                                                <Link to="#" className="nav-link px-0">
                                                    {" "}
                                                    <span className="d-none d-sm-inline">Product</span> 1
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="nav-link px-0">
                                                    {" "}
                                                    <span className="d-none d-sm-inline">Product</span> 2
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="nav-link px-0">
                                                    {" "}
                                                    <span className="d-none d-sm-inline">Product</span> 3
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="nav-link px-0">
                                                    {" "}
                                                    <span className="d-none d-sm-inline">Product</span> 4
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="#" className="nav-link px-0 align-middle">
                                            <i className="fs-4 bi-people" />{" "}
                                            <span className="ms-1 d-none d-sm-inline">Customers</span>{" "}
                                        </Link>
                                    </li>
                                </ul>
                                <hr />
                                <div className="dropdown pb-4">
                                    <Link
                                        to="#"
                                        className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                                        id="dropdownUser1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <img
                                            src="https://github.com/mdo.png"
                                            alt="hugenerd"
                                            width={30}
                                            height={30}
                                            className="rounded-circle"
                                        />
                                        <span className="d-none d-sm-inline mx-1">loser</span>
                                    </Link>
                                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                                        <li>
                                            <Link className="dropdown-item" to="#">
                                                New project...
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="#">
                                                Settings
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="#">
                                                Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="#">
                                                Sign out
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                

                </div>
           
    )
}
