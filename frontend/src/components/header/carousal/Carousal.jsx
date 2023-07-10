import React from 'react'
import './corousal.scss'
// import Search from "../../search/Search"


const Carousal = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" >
                <div className="carousel-inner" id="carousel" >

                {/* <div id="search">
                    <div className="d-flex justify-content-center" role="search">
                        <input className="form-control me-2 bg-transparent" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                        <button className="btn btn-outline-warning" type="submit">Search</button>
                    </div>
                </div> */}
                
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                    
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/900×700/?cuisine" className="d-block w-100" alt="..." />
                        {/* <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div> */}
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900×700/?fruit" className="d-block w-100" alt="..."/>
                        {/* <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div> */}
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900×700/?food" className="d-block w-100" alt="..."/>
                        {/* <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div> */}
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100" alt="..."/>
                        {/* <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div> */}
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900×700/?drinks" className="d-block w-100" alt="..."/>
                        {/* <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div> */}
                    </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                    
                </div>
            </div>
        </div>
    )
}

export default Carousal
