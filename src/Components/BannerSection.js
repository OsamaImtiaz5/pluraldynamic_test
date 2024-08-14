import React from 'react'

const BannerSection = () => {
    return (
        <div className=' vh-100 container d-flex align-items-center' >

            <div className='row w-100 z-3'>
                <div className='col-md-6'>
                    <h1>Introduce Your Product Quickly & Effectively</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                    <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                        quis, sem. Nulla consequat massa quis enim.</p>

                    <div className="d-flex gap-3" >

                        <button className="btn btn-dark px-5 py-1" type="submit">
                            Purchase UI Kit
                        </button>
                        <button className="btn btn-outline-dark px-5 py-1" type="submit">
                            Learn More
                        </button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default BannerSection