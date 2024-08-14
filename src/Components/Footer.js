import React from 'react'

const Footer = () => {
    return (
      <div className="py-5 bg-info">
        <div className="container ">
          <div className="py-3 d-flex justify-content-between align-items-center">
            <div>
              <p>©2023 Yourcompany</p>
            </div>
            <div className="d-md-block d-none">
              <a className="navbar-brand fw-bold fs-2" href="#">
                Landing
              </a>
            </div>

            <div className="d-flex" >
              <button className="btn btn-dark px-5 py-1" type="submit">
                Buy Now
              </button>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-4 align-items-center">
              <p>Home</p>
              <p>About</p>
              <p>Contact</p>
            </div>
            <div className="d-flex gap-4 align-items-center">
              <img src={require("../Assets/fb.jpeg")} alt="fb" />
              <img src={require("../Assets/ln.jpeg")} alt="in" />
              <img src={require("../Assets/tw.jpeg")} alt="tw" />
              <img src={require("../Assets/yt.jpeg")} alt="yt" />
              <img src={require("../Assets/in.jpeg")} alt="in" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer