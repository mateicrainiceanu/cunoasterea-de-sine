import React from 'react'

function Cta() {
  return (
    <section id="formular" className="cta">
    <div className="container">
      <div className="row">
        <div className="col-lg-9 text-center text-lg-start">
          <h3>Vreau să mă cunosc mai bine</h3>
          <p>
            Noi îți propunem un set de întrebări la care să cugeți pentru
            câteva minute, iar apoi să le notezi. Prin acest chestionar, noi
            nu colectăm răspunsurile tale. La final vei putea sau
            salva foaia cu răspunsurile, ca amintire sau ca lecție,
            ca să poți să revii asupra a ce-ți dorești de la tine în viitor.
          </p>
        </div>
        <div className="col-lg-3 cta-btn-container text-center">
          <a className="cta-btn align-middle" href="/quiz">QUIZ</a>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Cta;