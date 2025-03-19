import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Faq from './Pages/Faq';
import Services from './Pages/Services';
import ContactUs from './Pages/ContactUs';

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/Faq" element={<Faq />} />
                <Route path="/ContactUs" element={<ContactUs />} />
                <Route path="/navbar" element={<Navbar />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;