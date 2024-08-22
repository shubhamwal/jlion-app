import React from 'react'

export default function Carousel() {
    return (
        <>

            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <div class="carousel-inner">
                    <div class="item active">
                        <img src="../images/guard.jpeg" alt="Los Angeles" className="carouselImage" />
                        {/* <div className="carousel-caption" style={{ zIndex: "10", top: "30%" }}>
                            <h3 className="mt-3 mb-3" style={{ fontSize: "62px", color: "black", fontWeight: "800" }}>Welcome to </h3>
                            <p className="mt-3 mb-3" style={{ fontSize: "32px", color: "black" }}>Jlion Company</p>
                        </div> */}

                    </div>

                    <div class="item">
                        <img src="../images/Company.jpeg" alt="Chicago" className="carouselImage" />
                    </div>

                    <div class="item">
                        <img src="../images/gunman.jpeg" alt="New york" className="carouselImage" />
                    </div>
                </div>

                <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </>

    )
}
