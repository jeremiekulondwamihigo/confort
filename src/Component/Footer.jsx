import React from "react";
import "./service.css";

function Footer() {
  return (
    <div className="container-fluid">
      <div className="row firstrow">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h2 className="footer-title">
            INSCRIVEZ-VOUS SUR <br />
            NOTRE <span style={{ color: "#AD0101" }}>NEWSLETTER</span>
          </h2>
          <p className="subtitle">
            Recevez nos actualités à partir de votre adresse mail.
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h2>CONFORT DE L’ART</h2>
          <p>
            Recevez des nouveauté de plan de construction directement dans votre
            boîte de réception
          </p>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
