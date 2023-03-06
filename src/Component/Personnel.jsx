import React from "react";
import Personne from "../assets/images/personne.png";
import Personne2 from "../assets/images/Personne2.png";
import Personne22 from "../assets/images/Personne22.png";
import Slider from 'react-slick'

function Personnel() {
  const item = [
    {
      id: 1,
      title: "Card title",
      body: "This is a wider card with supporting text below as a natural= lead-in to additional content. This content is a little bitlonger.",
      footer: "Last updated 3 mins ago", photo : Personne
    },
    {
      id: 1,
      title: "Card title",
      body: "This is a wider card with supporting text below as a natural= lead-in to additional content. This content is a little bitlonger.",
      footer: "Last updated 3 mins ago", photo : Personne2
    },
    {
      id: 1,
      title: "Card title",
      body: "This is a wider card with supporting text below as a natural= lead-in to additional content. This content is a little bitlonger.",
      footer: "Last updated 3 mins ago", photo : Personne22
    },
    {
      id: 1,
      title: "Card title",
      body: "This is a wider card with supporting text below as a natural= lead-in to additional content. This content is a little bitlonger.",
      footer: "Last updated 3 mins ago", photo : Personne22
    },
    {
      id: 1,
      title: "Card title",
      body: "This is a wider card with supporting text below as a natural= lead-in to additional content. This content is a little bitlonger.",
      footer: "Last updated 3 mins ago", photo : Personne
    },
    {
      id: 1,
      title: "Card title",
      body: "This is a wider card with supporting text below as a natural= lead-in to additional content. This content is a little bitlonger.",
      footer: "Last updated 3 mins ago", photo : Personne
    },
  
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };
  return (
    <>
      <div className="container">
        <div className="row"><Slider {...settings} >
          {item.map((index, key) => {
            return (
                
              <div className="col-md-4 col-lg-3 col-sm-12 card-deck" key={key} >
                <div className="card" style={{ width: "18rem", marginBottom:"12px" }}>
                  <img
                    className="card-img-top"
                    src={index.photo}
                    alt="Card image cap"
                    height={300}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{index.title}</h5>
                    <p className="card-text">{index.body}</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">{index.footer}</small>
                  </div>
                </div>
              </div>
            );
          })}</Slider>
        </div>
      </div>
    </>
  );
}

export default Personnel;
