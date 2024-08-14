import React from 'react'

const FooterSection = () => {
    return (
        <div className='vh-100 d-flex align-items-center' style={{ backgroundImage:`url(${require("../Assets/Rectangle.png")})`}} >

            <div className='d-flex justify-content-center align-items-center container '>
                <div className='w-50 text-center'>
                    <h1>A Price To Suit Everyone</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>

                    <div className="my-3 py-3" >

                    <p style={{fontSize:'46px'}} className='fw-bolder'>$40</p>
                    <p>UI Design Kit</p>
                    </div>

                    <div className="my-4" >

                    <p className='fw-light'>See, One price. Simple.</p>
                    <button className="btn btn-dark px-5 py-1" type="submit">
                            Purchase UI Kit
                        </button>
                    </div>

                </div>
                
            </div>

        </div>
    )
}

export default FooterSection