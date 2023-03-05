import React from "react";
import Slider from "react-slick";
import confor from "../assets/images/confor.png";
import confor1 from "../assets/images/confor1.png";
import confor2 from "../assets/images/confor2.png";
import casque from "../assets/images/casque.png";


function Confor() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };
  return (
    <div className="confor card">
     <div className="container-fluid">
     <div className="row">
        <div className="col-md-6 col-lg-6 col-sm-12">
          <Slider {...settings}>
            <div>
              <img src={confor} alt="Confor" />
            </div>
            <div>
              <img src={confor1} alt="Confor1" />
            </div>
            <div >
              <img src={confor2} alt="Confor2" />
            </div>
          </Slider>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 text">
          <img src={casque} alt="casque" />
          <h3>CONFORT DE L’ART</h3>
          <p>Est une entreprise œuvrant dans le domaine d’immobilier et de 
            mobiliers qui prête ses services a sa clientèle depuis janvier 2015.
             sa légalisation a été effective depuis juin 2021. l’esprit 
             d’initiative personnel pour un encadrement de la jeunesse 
             et l’amour du travail bien fait en toute honnêteté lui a 
             valu le privilège de mériter la confiance des particuliers 
             ainsi que certaines organisations avant même la reconnaissance 
             de l’exitance de l’entreprise légalement.</p>
        </div>
      </div>

     </div>
    </div>
  );
}

export default Confor;
