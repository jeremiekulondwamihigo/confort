import React from "react";
import "./service.css"
import im from "../assets/images/im.png"
import appartement from "../assets/images/recent/appartement.png"
import commercial from "../assets/images/recent/commercial.png"
import decoration from "../assets/images/recent/decoration.png"
import habitation from "../assets/images/recent/habitation.png"
import polyvalente from "../assets/images/recent/polyvalente.png"
import terase from "../assets/images/recent/terase.png"
import client from "../assets/icons/client.png"
import chantier from "../assets/icons/chantier.png"
import ingenieur from "../assets/icons/ingenieur.png"
import projet from "../assets/icons/projet.png"

function Service() {
  return (
    <>
    
    <div className="bodyCard">
     
    <div className="cards">
      <img src={polyvalente} className="cards-img" alt="im" />
      <div className="card-body">
        <p className="card-info">
            Salle Polyvalente
        </p>
      </div>
    </div>
    <div className="cards">
      <img src={habitation} className="cards-img" alt="im" />
      <div className="card-body">
        <p className="card-info">
            Maison d'habitation
        </p>
      </div>
    </div>
    <div className="cards">
      <img src={commercial} className="cards-img" alt="im" />
      <div className="card-body">
        <p className="card-info">
            Maison commerciale
        
        </p>
      </div>
    </div>
    <div className="cards">
      <img src={appartement} className="cards-img" alt="im" />
      <div className="card-body">
        <p className="card-info">
            Appartement
        
        </p>
      </div>
    </div>
    <div className="cards">
      <img src={decoration} className="cards-img" alt="im" />
      <div className="card-body">
        <p className="card-info">
            Décoration interne
        </p>
        
      </div>
    </div>
    <div className="cards">
      <img src={terase} className="cards-img" alt="im" />
      <div className="card-body">
        <p className="card-info">
            Salle Terrase
        </p>
      </div>
    </div>
    </div>
    
    <div className="container-fluid content">
        <div className="content-items">
            <div className="item">
                <img src={projet} alt="execution"/>
                <p>Projet en exécution</p>
                <div>
                    <span>120 <span>+</span></span>
                </div>
            </div>
            <div className="item">
                <img src={client} alt="client"/>
                <p>Clients</p>
                <div>
                    <span>200 <span>+</span></span>
                </div>
            </div>
            <div className="item">
                <img src={ingenieur} alt="ingenieur"/>
                <p>Ingenieur</p>
                <div>
                    <span>40 <span>+</span></span>
                </div>
            </div>
            <div className="item">
                <img src={chantier} alt="chantier"/>
                <p>Chantier</p>
                <div >
                    <span>10 <span>+</span></span>
                </div>
            </div>
            
        </div>

    </div>
    </>
  );
}

export default Service;
