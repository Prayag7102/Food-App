import React from 'react'
import ReactDOM from 'react-dom/client'
import UerLayout from './components/User/UerLayout'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Blogs from './components/User/Blogs'
import AddBlogs from './components/Admin/AddBlogs'
import ManageBlogs from './components/Admin/ManageBlogs'
import EditBlogs from './components/Admin/EditBlogs'
import BlogDetails from './components/User/BlogDetails'
import About from './components/User/About'
import DeleteBlogs from './components/Admin/DeleteBlogs'

import AdminSidebar from './components/Admin/AdminSidebar'
import ViewBlogs from './components/Admin/ViewBlogs'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Router>
      <Routes>
        {/* user-panel routing */}
      <Route path="/" element={<UerLayout />} />
      <Route path="/blogs" element={<Blogs/>} />
      <Route path='/blogs-details/:id' element={<BlogDetails/>}/>
      <Route path='/about-us' element={<About/>} />
      {/* admin panel routing */}
      <Route path='/admin-dashboard' element={<AdminSidebar/>}/>
      <Route path='/admin/add-blogs' element={<AddBlogs/>}/>
      <Route path='/view-blogs' element={<ViewBlogs/>}/>
      <Route path='/admin/manage-blogs' element={<ManageBlogs/>}/>
      <Route path='/editblogs/:id' element={<EditBlogs/>}/>
      <Route path='/delete-blogs/:id' element={<DeleteBlogs/>}/>
      
      </Routes>
    </Router>
   
  </React.StrictMode>,
)
