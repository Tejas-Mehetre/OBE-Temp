import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Routing() {
    return (
        // <DashboardProvider>
        <BrowserRouter>
            {/* <ScrollTop /> */}
            {/* <PageTitleUpdater /> */}
            <Suspense>
                <Routes>
                    {/* <Route path="/forgotpassword" element={<ForgotPassword />} /> */}
                </Routes>
            </Suspense>
        </BrowserRouter>
        // </DashboardProvider>
    );
}

export default Routing;