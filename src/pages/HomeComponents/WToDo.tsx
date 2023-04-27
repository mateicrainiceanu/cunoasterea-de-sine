import React from 'react'

function WToDo() {
  return (
    <section id="ce-putem-face" className="services">
    <div className="container">
      <div className="section-title">
        <h2>Cum putem să ne cunoaștem mai bine?</h2>
        <p>
          Ne putem cunoaște mai bine prin întrebări, pe care ni le adresăm
          nouă, precum
        </p>
      </div>

      <div className="row">
        <div
          className="col-lg-4 col-md-6 d-flex align-items-stretch"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="icon-box iconbox-blue">
            <h4><a href="#dece" className="de-ce">#DECE?</a></h4>
            <p>De ce am reacționat așa azi? M-a deranjat? M-a enervat?</p>
          </div>
        </div>

        <div
          className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="icon-box iconbox-orange">
            <h4>#CUM</h4>
            <p>Cum aș putea ca în viitor să nu mai reacționez așa?</p>
          </div>
        </div>

        <div
          className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <div className="icon-box iconbox-pink">
            <h4>#CE</h4>
            <p>Ce m-a deranjat azi pe mine sau pe cei apropiați la mine?</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default WToDo