import { useEffect, Suspense } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

import TopNavbar from "./Components/TopNavbar";
import RecentFeeder from "./Components/RecentFeeder";
import Card from "react-bootstrap/Card";
import LoginIndex from "./Components/Logins/LoginIndex";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PublicRoute, PrivateRoute, ProtectedRoutes } from "./Routing";
import HomePage from "./Pages/HomePage";
import NewApplicant from "./Pages/NewApplicant";
import EmployeeLogin from "./Pages/EmployeeLogin";
import SideMenu from "./Components/SideMenu";
import "./material-dashboard.min.css"



function App() {
  useEffect(() => {
    async function clearCaches() {
      const keys = await caches.keys();
      keys.forEach((key) => caches.delete(key));
    }
    clearCaches();
  }, []);
  const isAuthenticated = false
  return ( 
    <>
    <Router>
      <div  className="wrapper" > 
         <TopNavbar /> 
         <SideMenu />
    
        
      <Suspense fallback>
        <Routes>
          {/* <Route path="/" element={
            <PublicRoute isAuthenticated={isAuthenticated}><HomePage></HomePage></PublicRoute>
          }> */}
          <Route path="/" element={<HomePage />} /> 
          <Route path="/new-applicant" element={<NewApplicant />} /> 
          <Route path="/employee-login" element={<EmployeeLogin />} />

          <Route path="/*" element={            
            <PrivateRoute path="/*" isAuthenticated={isAuthenticated} />
          } /> 

          
        </Routes>

      </Suspense>
    </div>
    </Router>
    </>
    //   <div className="App"> 
    //     <TopNavbar /> 

    //     <Container className="mt-2 flex-container">
    //       <Card className="card-left">
    //         <RecentFeeder />
    //       </Card>
          

    //       <Card className="card-right" >
    //         <LoginIndex />
    //       </Card>

          
    //     </Container>
    // </div>
    
  );
}

export default App;
