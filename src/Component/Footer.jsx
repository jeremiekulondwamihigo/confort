import React from "react";
import "./service.css";

function Footer() {
  return (
    <div className="container-fluid footer">
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
          <h2 className="footer-titleGauche">CONFORT DE L’ART</h2>
          <p className="subtitleGauche">
            Recevez des nouveauté de plan de construction directement dans votre
            boîte de réception
          </p>

          <div className="message-div">
            <input className="message" />
            <button>S'abonner</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-lg-3 col-sm-12">
          <div className="footerclasse">
            <h2>
              CONFORT <br />
              DE L’ART
            </h2>
            <p>
              Est une entreprise œuvrant dans le domaine d’immobilier et de
              mobiliers qui prête ses services a sa clientèle depuis janvier
              2015. sa légalisation a été effective depuis juin 2021.
            </p>
          </div>
        </div>
        <div className="col-md-4 col-lg-3 col-sm-12">
          <div className="serviceFooter">
            <h2>Nos services</h2>
            <p>Génie Civile</p>
            <p>Matériels et Matériaux de construction</p>
            <p>Appui logistique</p>
            <p>Menuiserie Metallique</p>
            <p>Menuiserie en Bois</p>
            <p>Fabrication de mobilier</p>
          </div>
        </div>
        <div className="col-md-4 col-lg-3 col-sm-12">
          <div className="serviceFooter">
            <h2>Menu</h2>
            <p>Qui Sommes nous</p>
            <p>Faq</p>
            <p>Equipe</p>
            <p>Contactez-nous</p>
          </div>
        </div>
        <div className="col-md-4 col-lg-3 col-sm-12">
          <div className="serviceFooter lastdiv">
            <h2>Contactez-nous</h2>
            <p>
              Blv JULIEN PALUKU,
              <br />
              Commune de KARISIMBI, N°43.
              <br />
              info@confortdelart.org.
              <br />
              +243 978 020 871
            </p>
          </div>
        </div>
      </div>
      <div className="row fin">
        <p>© 2023 Confort de l'Art | Powered by Confort de l'Art</p>
      </div>
    </div>
  );
}

export default Footer;
