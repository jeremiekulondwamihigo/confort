import React from "react";
import { IoMailOutline, IoChevronForward, IoPieChart } from "react-icons/io5";
import { IconContext } from "react-icons";
import image1 from "../assets/images/logo.png";
import { motion } from "framer-motion";
import Architect from "../assets/icons/architect.png"

let easeing = [0.6, -0.05, 0.01, 0.99];

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.2,
    },
  },
};
const title = {
  hidden: {
    y: 60,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: easeing,
    },
  },
};
const hoverEffect = {
  whileHover: {
    scale: 1.5,
    rotate: 630,
    borderRadius: "100%",
  },
};

function Card() {
  return (
    <motion.div className="service_container">
      <div className="title_wrapper">
      
        <motion.h2
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Nos Spécialités
        </motion.h2>
      </div>
      <motion.div
        className="service_card"
        variants={container}
        initial="hidden"
        exit="exit"
        whileInView="show"
        viewport={{ once: false }}
      >
        <motion.div className="card" variants={item}>
          <motion.span
            className="service_icon"
            style={{ backgroundColor: "#ddfbf9" }}
            variants={hoverEffect}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <IconContext.Provider value={{ color: "#14da8f", size: "25px" }}>
              <IoMailOutline />
            </IconContext.Provider>
          </motion.span>
          <h3>
          <p>Architecture​</p>
          Editez facilement vos murs, plafonds, 
          portes, fenêtres, et bien plus encore 
          </h3>
          <a href="#">
            <span>learn more</span>
            <IconContext.Provider value={{ color: "14da8f", size: "18px" }}>
              <IoChevronForward />
            </IconContext.Provider>
          </a>
        </motion.div>
        <motion.div className="card" variants={item}>
          <motion.span
            className="service_icon"
            style={{ backgroundColor: "#e7daf8" }}
            variants={hoverEffect}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <IconContext.Provider value={{ color: "#5700cf", size: "22px" }}>
              <IoMailOutline />
            </IconContext.Provider>
          </motion.span>
          <h3>
            <p>Conception de plan de vos maison</p>
          Visualiser vos plan que vous avez trouvez à partir de notre société
          </h3>
          <a href="#">
            <span>learn more</span>
            <IconContext.Provider value={{ color: "14da8f", size: "18px" }}>
              <IoChevronForward />
            </IconContext.Provider>
          </a>
        </motion.div>
        <motion.div className="card" variants={item}>
          <motion.span
            className="service_icon"
            style={{ backgroundColor: "#ffede6" }}
            variants={hoverEffect}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <IconContext.Provider value={{ color: "#ff8559", size: "22px" }}>
              <IoMailOutline />
            </IconContext.Provider>
          </motion.span>
          <h3>
            <p>Conception de paysage</p>
          Nous contusion de paysage externe que interne de vos mason
          </h3>
          <a href="#">
            <span>learn more</span>
            <IconContext.Provider value={{ color: "14da8f", size: "18px" }}>
              <IoChevronForward />
            </IconContext.Provider>
          </a>
        </motion.div>
        <motion.div className="card" variants={item}>
          <motion.span
            className="service_icon"
            style={{ backgroundColor: "#ffe1e9" }}
            variants={hoverEffect}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <IconContext.Provider value={{ color: "#fa3970", size: "22px" }}>
              <IoMailOutline />
            </IconContext.Provider>
          </motion.span>
          <h3>
            <p>Design interne</p>
            un ensemble de meubles ou vos objets dans 
            la vue 3D en un seul clic pour une visualisation 
            immédiate du résultat !
          </h3>
          <a href="#">
            <span>learn more</span>
            <IconContext.Provider value={{ color: "14da8f", size: "18px" }}>
              <IoChevronForward />
            </IconContext.Provider>
          </a>
        </motion.div>
        <motion.div className="card" variants={item}>
          <motion.span
            className="service_icon"
            style={{ backgroundColor: "#dcedff" }}
            variants={hoverEffect}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <IconContext.Provider value={{ color: "#56a8f4", size: "22px" }}>
              <IoMailOutline />
            </IconContext.Provider>
          </motion.span>
          <h3>
            <p>Solution complète</p>
            Démarrez un projet de construction, d’aménagement, 
            de rénovation ou de décoration tant en intérieur 
            qu’en extérieur à l'aide des Milliers des objets 3D fournis !
          </h3>
          <a href="#">
            <span>learn more</span>
            <IconContext.Provider value={{ color: "14da8f", size: "18px" }}>
              <IoChevronForward />
            </IconContext.Provider>
          </a>
        </motion.div>
        <motion.div className="card" variants={item}>
          <motion.span
            className="service_icon"
            style={{ backgroundColor: "#dbf9ed" }}
            variants={hoverEffect}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <IconContext.Provider value={{ color: "#06d786", size: "22px" }}>
              <IoMailOutline />
            </IconContext.Provider>
          </motion.span>
          <h3>
            <p>Conception des routes</p>
            Nous faisons aussi de construction de vos route 
            en tenant compte de la demande: comme la constriction
        de route du déserte agricole
          </h3>
          <a href="#">
            <span>learn more</span>
            <IconContext.Provider value={{ color: "14da8f", size: "18px" }}>
              <IoChevronForward />
            </IconContext.Provider>
          </a>
        </motion.div>
        
        
      </motion.div>
    </motion.div>
  );
}

export default Card;
