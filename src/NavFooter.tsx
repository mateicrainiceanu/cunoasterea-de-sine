import React from "react";

function Nav() {
  return (
    <header id="header" className="d-flex align-items-center">
      <div className="container d-flex align-items-center">
        <h1 className="logo">
          <a href="/">Cunoașterea de sine</a>
        </h1>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link active" href="/#acasa">
                Acasă
              </a>
            </li>
            <li>
              <a className="nav-link" href="/#scurta-descriere">
                Pe scurt
              </a>
            </li>
            <li>
              <a className="nav-link" href="/#ce-putem-face">
                Ce putem face?
              </a>
            </li>
            <li>
              <a className="nav-link" href="/#mai-multe">
                Mai mult
              </a>
            </li>
            <li>
              <a className="getstarted" href="/quiz">
                Formular
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <h3>Cunoașterea de sine</h3>
          <p>
            Proiect realizat de către Crăiniceanu Matei - elev la liceul
            Teoretic "Nikolaus Lenau", Timișoara
            <br />
            Coordonator: prof. Angela Avrămuț
          </p>
          <div className="credits">© Designed by Crăiniceanu Matei</div>
        </div>
      </footer>
    </>
  );
}

export { Nav, Footer };