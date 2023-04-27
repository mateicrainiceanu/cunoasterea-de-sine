import React from 'react'

function More() {
  return (
    <section id="mai-multe" className="more">
        <div className="container">
          <div className="section-title">
            <h2>Să detaliem un pic...</h2>
            <p>
              Ce am prezentat mai sus, sunt doar aspecte simplificate despre cum
              funționează cunoașterea de sine și cum ne influențează.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6 order-1 order-lg-2">
              <img src="assets/img/about.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>Cum ne cunoaștem pe noi?</h3>
              <p className="fst-italic">
                Cunoasterea de sine inseamna constientizarea modului in care
                gandesti, simti si te comporti in fiecare zi.
              </p>
              <ul>
                <li>
                  Toți oamenii au tipare de gândire, emoție și de comportament,
                  dar nu mulți vor să descopere <a href="#dece" className="de-ce">#DECE?</a> gândesc, se emoționează și
                  se comportă într-un anumit fel.
                </li>
                <li>
                  De cele mai multe ori regretăm că facem o acțiune, dar aproape
                  niciodată nu ne punem întrebarea <a href="#dece" className="de-ce">#DECE?</a> am reacționat așa.
                </li>
                <li>
                  Deși sună stereotipic, motivul pentru care trebuie să te
                  cunoști pe tine este ca să poți deveni cea mai bună versiune a
                  ta.
                </li>
                <li>
                  Pentru a deveni mai buni, trebuie să știm care sunt
                  slăbiciunile și care sunt nevoile noastre. Și nu putem
                  modifica prima reacție, prima tendință asupra unui stimul
                  extern, decât dacă înțelegem <a href="#dece" className="de-ce">#DECE?</a> am reacționat așa în
                  momentul acela. Și haideți să vedem câteva exemple.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}

export default More