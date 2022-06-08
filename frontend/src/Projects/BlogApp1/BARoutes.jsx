import React from 'react';
import '../Common.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Auth from './Components/Auth/Auth';
import Blogs from './Components/Blogs/Blogs';
import UserBlogs from './Components/UserBlogs/UserBlogs';
import BlogDetail from './Components/BlogDetail/BlogDetail';
import AddBlog from './Components/AddBlog/AddBlog';

const BARoutes = () => {
    return (
        <React.Fragment>
            <header>
                <Header />
            </header>
            <main>
                <Routes>
                    <Route exact path='/auth' element={<Auth />}></Route>
                    <Route exact path='/blogs' element={<Blogs />}></Route>
                    <Route exact path='/blogs/add' element={<AddBlog />}></Route>
                    <Route exact path='/myBlogs' element={<UserBlogs />}></Route>
                    <Route exact path='/myBlogs/:id' element={<BlogDetail />}></Route>
                </Routes>
            </main>
        </React.Fragment>
    )
}

export default BARoutes;