// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import Home from './pages/Home';
// import ProductOverview from './pages/ProductOverview';
// import IntegrationOverview from './pages/IntegrationOverview';
// import Pricing from './pages/Pricing';
// import UpcomingUpdates from './pages/UpcomingUpdates';
// import WhyweExist from './pages/WhyweExist';
// import Login from './pages/Login';


// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/product/overview" element={<ProductOverview />} />
//         <Route path="/Integrations/overview" element={<IntegrationOverview/>} />
//         <Route path='/pricing' element={<Pricing/>}/>
//         <Route path='/Resources/upcoming-updates' element={<UpcomingUpdates />} />
//         <Route path='/Aboutus/whyweexist' element={<WhyweExist />} />
//         <Route path='/login' element={<Login />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home';
import ProductOverview from './pages/ProductOverview';
import IntegrationOverview from './pages/IntegrationOverview';
import Pricing from './pages/Pricing';
import UpcomingUpdates from './pages/UpcomingUpdates';
import WhyweExist from './pages/WhyweExist';
import Login from './pages/Login';

const Layout = ({ children }) => {
  const location = useLocation();
  
  return (
    <>
      {/* Conditionally render Navbar and Footer based on the current path */}
      {location.pathname !== '/login' && <Navbar />}
      {children}
      {location.pathname !== '/login' && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/overview" element={<ProductOverview />} />
          <Route path="/Integrations/overview" element={<IntegrationOverview />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/Resources/upcoming-updates' element={<UpcomingUpdates />} />
          <Route path='/Aboutus/whyweexist' element={<WhyweExist />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
