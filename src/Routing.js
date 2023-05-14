import React, {Suspense} from 'react';
import {Routes, Route, Navigate, Outlet } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import NewApplicant from './Pages/NewApplicant';
import ApplicantDetails from './Pages/ApplicantDetails';

const routes = {
    "public_rotes": [
        {
            path: "/",
            permalink:"",
            component: <HomePage />
        }
],
    "protected_routes": [
      {
        path: "/applicant-details/:id",
        permalink:"applicant details",
        component: <ApplicantDetails  />
      } 
  ],
    
  }
  

export function PublicRoute({ isAuthenticated, redirectPath='/new-applicant', children , ...rest  }) {
  return isAuthenticated ? (
    <Navigate to={redirectPath}  replace />
  ) : (
    children
  ); 

}

// A private route is accessible only to authenticated users
export const PrivateRoute = ({ isAuthenticated, ...rest }) => {  
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  else {
    return (
      <Routes {...rest}>
        {
          routes.protected_routes.map(({ path, component, permalink }) => (
          <Route
            path={path}
            key={permalink}
            element={component}
          >
            component
          </Route>
        ))
      }
      </Routes>
    )
  }

  
};