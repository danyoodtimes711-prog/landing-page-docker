import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <header>
        <div className="logo">Dribbble</div>
        <input className="search" placeholder="landing page" />
        <button className="btn">Shots</button>
        <nav>
          <a href="/">Explore</a>
          <a href="/">Find Talent</a>
          <a href="/">Get Hired</a>
          <a href="/">Blog</a>
          <a href="/">Sign up</a>
          <button className="btn login">Log in</button>
        </nav>
      </header>
      <main>
        <h1>Landing page</h1>
        <p className="description">
          A landing page is generally considered a specific page designed to receive and convert
          traffic from an online marketing campaign but could also serve as the first introduction
          to a company or product.
        </p>
        <p className="related">
          Related: <span>homepage</span> <span>landing</span> <span>website</span>{" "}
          <span>landingpage</span> <span>webdesign</span> <span>home page</span>
        </p>
        <div className="categories">
          <button>Popular</button>
          <button className="active">Discover</button>
          <button>Animation</button>
          <button>Branding</button>
          <button>Illustration</button>
          <button>Mobile</button>
          <button>Print</button>
          <button>Product Design</button>
        </div>
        <div className="gallery">
          {/* Dummy placeholders for the images */}
          <div className="card">Image 1</div>
          <div className="card">Image 2</div>
          <div className="card">Image 3</div>
        </div>
      </main>
    </div>
  );
}

