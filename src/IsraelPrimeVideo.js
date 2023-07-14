import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SignIn from './components/authentication/SignIn';
import SignUp from './components/authentication/SignUp';
import Person from './components/main/Person';
import Tv from './components/main/Tv';
import TvDetails from './components/main/TvDetails';

const IsraelPrimeVideo = (props) => {
    return (
        <BrowserRouter>
            <div className='app-body'>
                <Header />
                {/* routes */}
                <Routes>
                    <Route path='/' element={<Tv />} />
                    <Route path='/details/:id' element={<TvDetails />} />
                    <Route path='/person' element={<Person />} />
                    <Route path='/signin' element={<SignIn />} />
                    <Route path='/signup' element={<SignUp />} />
                </Routes>
                {/* end of routes */}
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default IsraelPrimeVideo;