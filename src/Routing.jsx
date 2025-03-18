import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ScrollTop from '../src/shared/ScrollTop';
// import { DashboardProvider } from "./context/DashboardContext";
// import PageTitleUpdater from "./utils/PageTitleUpdater";

// import ForgotPassword from "./layouts/signin-up/ForgotPassword";
import ErrorPage from "./shared/errors/ErrorPage";

function Routing() {
    return (
        // <DashboardProvider>
        <BrowserRouter>
            {/* <ScrollTop /> */}
            {/* <PageTitleUpdater /> */}
            <Suspense>
                <Routes>
                    <Route path="/forgotpassword" element={<ForgotPassword />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
        // </DashboardProvider>
    );
}

export default Routing;