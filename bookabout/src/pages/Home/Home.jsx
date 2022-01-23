import React from "react";
import "../../App.css";
import "./Home.scss";
import homevector from '../../resources/homepageimage.png';

export const Home = () => {
    return (
        <div>
          <header>
          <h1 className="logo">BookAbout</h1>
             <nav id="navbar" className="nav">
            <ul className="nav-list">
              <li><a href="">Home</a></li>
              <li><a href="#">Chat</a></li>
              <li><a href="#">Explore</a></li>
              <li><a href="#">Books</a></li>
              <li><a href="#">Register</a></li>
            </ul>
          </nav>
          </header>
        <div id="page-wrapper">
            <div className="home-page">
                <div className="part1">
                    <p className="tag-line">Connect with book lovers with similiar <br /> interests from around the world</p>
                    <div className="search-container">
                        <input className="searchbar" placeholder="Search.." name="search" /> <br/>
                       <button className="searchbutton">
                       <a href="/explore.html" > Search </a>
                        </button> 
                     </div>
                </div>    
                <div className="part2">
                    <img 
                        className="home-img"
                        src={homevector}
                        alt="Image of people together" />
                </div>
                {/* search bar */}
                </div>
        </div>
     </div>
    )
}