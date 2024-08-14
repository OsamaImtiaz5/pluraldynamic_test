import React from 'react'

const Section1 = () => {
    return (
      <div className=" h-100 container d-flex align-items-center py-5">
        <div className="row w-100 z-3 align-items-center">
          <div className="col-md-6 ">
            <h1>Light, Fast & Powerful</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
            </p>
            <p>
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
              quis, sem. Nulla consequat massa quis enim.
            </p>

            <div className="row w-100 my-5">
              <div className="col-6">
                <img
                  className=" object-fit-contain w-100 "
                  loading="lazy"
                  alt="image1"
                  src={require("../Assets/elementcardinfocardsmalliconpositionleft@2x.png")}
                />

                <h5>Title Goes Here</h5>
                <p className="" style={{ fontSize: "13px" }}>
                  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem. Nulla consequat massa quis enim.
                </p>
              </div>

              <div className="col-6">
                <img
                  className=" object-fit-contain w-100 "
                  loading="lazy"
                  alt=""
                  src={require("../Assets/elementcardinfocardsmalliconpositionleft@2x.png")}
                />

                <h5>Title Goes Here</h5>
                <p className="" style={{ fontSize: "13px" }}>
                  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem. Nulla consequat massa quis enim.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className=" w-100 object-fit-cover z-0 h-100"
              loading="lazy"
              alt="image2"
              src={require("../Assets/undraw-mobile-login-ikmv@2x.png")}
            />
          </div>
        </div>
      </div>
    );
}

export default Section1