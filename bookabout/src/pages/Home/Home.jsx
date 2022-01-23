import React from "react";
import "../../App.css";
import "./Home.scss";

export const Home = () => {
    return (
        <div>
             <nav id="navbar" className="nav">
            <ul className="nav-list">
              <li><a href="/index.html">Home</a></li>
              <li><a href="#">Chat</a></li>
              <li><a href="#">Explore</a></li>
              <li><a href="#">Books</a></li>
              <li><a href="#">Register</a></li>
            </ul>
          </nav>
          <h1 className="logo">BookAbout</h1>
        <div id="page-wrapper">
            <div className="home-page">
            
                <div className="tag-line">
                    <h1 className="tag-line">Connect with book lovers with similiar <br /> interests from around the world</h1>
                </div>    
                
                <div className="home-img">
                    <img 
                        className="home-img"
                        src="../../resources/homepageimage.png"
                        alt="" />
                </div>
                {/* search bar */}
                <div className="search-container">
                        <input className="searchbar" placeholder="Search.." name="search" />
                        <a href="/explore.html" className="button"><i className="fa fa-search"></i></a>
                </div>
                </div>
        </div>
     </div>
    )
}