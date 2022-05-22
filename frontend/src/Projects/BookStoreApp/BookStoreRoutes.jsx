import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import AddBook from './Components/AddBook';
import BooksContainer from './Components/Book/BooksContainer';
import About from './Components/About';
import Header from './Components/Header';

const BookStoreRoutes = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Routes>
                    <Route exact path='/' element={<LandingPage />}></Route>
                    <Route exact path='/AddBook' element={<AddBook />}></Route>
                    <Route exact path='/BooksContainer' element={<BooksContainer />}></Route>
                    <Route exact path='/About' element={<About />}></Route>
                </Routes>
            </main>
        </>
    )
}

export default BookStoreRoutes;