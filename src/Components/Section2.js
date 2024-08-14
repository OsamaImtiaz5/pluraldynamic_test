import React from 'react'

const Section2 = ({title,body1,body2,img,button}) => {
    return (
      <div className="container d-flex align-items-center h-100 py-5">
        <div className="row w-100 z-3 align-items-center">
          <div className="col-md-6">
            <img
              className=" w-75 object-fit-contain z-0 h-100"
              loading="lazy"
              alt="image"
              src={img}
            />
          </div>
          <div className="col-md-6 ">
            <h1>{title}</h1>
            <p>{body1}</p>
            <p>{body2}</p>

            <div className="d-flex gap-3">{button}</div>
          </div>
        </div>
      </div>
    );
}

export default Section2