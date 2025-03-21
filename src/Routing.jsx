import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import Services from "./Pages/Services";
import Faq from "./Pages/Faq";
import Layout from "./Shared/Layout";
import RequestAQuote from "./Pages/RequestAQuote";
import Login from "./Pages/Login";
import AboutUs from "./Pages/AboutUs";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="Login" element={<Login />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="Services" element={<Services />} />
          <Route path="Faq" element={<Faq />} />
          <Route path="RequestAQuote" element={<RequestAQuote />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;
