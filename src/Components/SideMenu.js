import React from "react";
import "../material-dashboard.min.css"
import "../demo.css"

function SideMenu() {
  return (
    <div className="sidebar"
      data-color="purple"
      data-background-color="white"
      
    >
      <div className="logo">
        <a href="http://www.creative-tim.com" className="simple-text logo-normal">
          Sonet Banking Services
        </a>
      </div>
      <div
        className="sidebar-wrapper ps-container ps-theme-default"
        data-ps-id="0099825c-7ffb-4272-6e8c-088c436a6e46"
      >
        <ul className="nav">
          <li className="nav-item active  ">
            <a className="nav-link" href="./dashboard.html">
              <i className="material-icons">dashboard</i>
              <p>Dashboard</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="./user.html">
              <i className="material-icons">person</i>
              <p>User Profile</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="./tables.html">
              <i className="material-icons">content_paste</i>
              <p>Table List</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="./typography.html">
              <i className="material-icons">library_books</i>
              <p>Typography</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="./icons.html">
              <i className="material-icons">bubble_chart</i>
              <p>Icons</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="./map.html">
              <i className="material-icons">location_ons</i>
              <p>Maps</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="./notifications.html">
              <i className="material-icons">notifications</i>
              <p>Notifications</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="./rtl.html">
              <i className="material-icons">language</i>
              <p>RTL Support</p>
            </a>
          </li> 
        </ul>
        <div className="ps-scrollbar-x-rail" style={{left: "0px", bottom: "0px"}}>
          <div
            className="ps-scrollbar-x"
            tabIndex="0"
            style={{left: "0px", width: "0px"}}
          ></div>
        </div>
        <div className="ps-scrollbar-y-rail" style={{top: "0px", right: "0px"}}>
          <div
            className="ps-scrollbar-y"
            tabIndex="0"
            style={{top: "0px", height: "0px"}}
          ></div>
        </div>
      </div>
      {/* <div
        className="sidebar-background"
        style={{"backgroundImage": "url(https://demos.creative-tim.com/material-dashboard-bs4/assets/img/sidebar-1.jpg)"}}
      ></div> */}
    </div>
  );
}

export default SideMenu;
