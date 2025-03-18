import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/navbar" element={<Navbar />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;