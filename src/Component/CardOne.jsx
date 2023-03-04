import React from "react";
import architecture from "../assets/icons/architecture.png";
import conseil from "../assets/icons/conseil.png";
import extraction from "../assets/icons/extraction.png";
import fourniture from "../assets/icons/fourniture.png";
import menuiserie from "../assets/icons/menuiserie.png";
import personnel from "../assets/icons/personnel.png";

function CardOne() {
  return (
    <div className="cardsecond">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4 col-sm-12 cardOne">
            <div className="row">
              <div className="col-sm-12 col-lg-3 col-md-4 imagePersonne">
                <img src={personnel} alt="personnel" />
              </div>
              <div className="col-sm-12 col-lg-9 col-md-8">
                <div className="cards">
                  <div className="title">
                    <p>Personnel </p>
                    <p>De construction</p>
                  </div>
                  <p>
                    Bénéfice de la société où nous sommes
                    <br />
                    opérer le succès pour votre avenir
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-12 cardOne fourniture">
            <div className="row">
              <div className="col-sm-12 col-lg-3 col-md-4 imagePersonne">
                <img src={fourniture} alt="personnel" />
              </div>
              <div className="col-sm-12 col-lg-9 col-md-8">
                <div className="cards">
                  <div className="titlewhite title">
                    <p>Fourniture </p>
                    <p>De Matériels</p>
                  </div>
                  <p className="white">
                    Nous fournissons des matériels de qualité pour la durabilité
                    de votre maison.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-12 cardOne extraction">
            <div className="row">
              <div className="col-sm-12 col-lg-3 col-md-4 imagePersonne">
                <img src={extraction} alt="extraction" />
              </div>
              <div className="col-sm-12 col-lg-9 col-md-8">
                <div className="cards">
                  <div className="titlewhite title">
                    <p>Personnel </p>
                    <p>De construction</p>
                  </div>
                  <p className="white">
                    Bénéfice de la société où nous sommes
                    <br />
                    opérer le succès pour votre avenir
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-12 cardOne" style={{marginTop:"11px"}}>
            <div className="row">
              <div className="col-sm-12 col-lg-3 col-md-4 imagePersonne">
                <img src={menuiserie} alt="menuiserie" />
              </div>
              <div className="col-sm-12 col-lg-9 col-md-8">
                <div className="cards">
                  <div className="title">
                    <p>Menuiserie métallique</p>
                    <p>et Menuiserie en bois</p>
                  </div>
                  <p>Vos besoins sont nos priorité.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-12 cardOne extraction" style={{marginTop:"11px"}}>
            <div className="row">
              <div className="col-sm-12 col-lg-3 col-md-4 imagePersonne">
                <img src={architecture} alt="architecture" />
              </div>
              <div className="col-sm-12 col-lg-9 col-md-8">
                <div className="cards">
                  <div className="titlewhite title">
                    <p>Architecture </p>
                  </div>
                  <p className="white">
                    Editez facilement vos murs, plafonds, portes, fenêtres, et
                    bien plus encore (trémies, mezzanines, escaliers, etc.).
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-sm-12 cardOne fourniture" style={{marginTop:"11px"}}>
            <div className="row">
              <div className="col-sm-12 col-lg-3 col-md-4 imagePersonne">
                <img src={conseil} alt="conseil" />
              </div>
              <div className="col-sm-12 col-lg-9 col-md-8">
                <div className="cards">
                  <div className="titlewhite title">
                    <p>Conseil</p>
                  </div>
                  <p className="white">
                  Vous rêvez de faire construire votre 
maison ? Seulement voilà, entre le 
choix du terrain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardOne;
