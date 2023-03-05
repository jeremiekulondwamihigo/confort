import "./App.scss";
import "./Component/style.css";
import { FaBehance, FaDribbble } from "react-icons/fa";
import { IoMailOutline, IoChevronForwardCircle, IoStar } from "react-icons/io5";
import { IconContext } from "react-icons";
import Card from "./Component/Card";
import image from "./assets/images/image2.png";
import im from "./assets/images/im.png";
import { motion } from "framer-motion";
import CardOne from "./Component/CardOne";
import Confor from "./Component/Confor";
import Typical from "react-typical";
import Service from "./Component/Service";
import Footer from "./Component/Footer";

let easeing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};
const fadeInUp = {
  initial: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easeing,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    color:"white",
    transition: {
      duration: 0.6,
      delay: 0.5,
      ease: easeing,
    },
  },
};

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};
const lastName = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};
const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
    fontSize: "67px",
  },
};

const btnGroup = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.6, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing,
    },
  },
};
const star = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.8, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing,
    },
  },
};
const header = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.05, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing,
    },
  },
};

function App() {
  return (
    <div>
      <motion.div initial="initial" animate="animate" className="acceuil">
        <motion.header variants={stagger}>
          <motion.div className="logo-wrapper" variants={header}>
            Art <span>Confort</span>
          </motion.div>
          <motion.div className="menu_container" variants={stagger}>
            <span>Acceuil</span>
            <span>A propos</span>
            <span>Projets</span>
            <span>Services</span>
            <span>Equipe</span>
            <motion.span className="menu" variants={header}>
              Contactez-nous
            </motion.span>
          </motion.div>
        </motion.header>
        <motion.div
          className="content_wrapper"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: easeing }}
        >
          <div className="left_content_wrapper">
            <motion.h2>
              <motion.span
                variants={firstName}
                initial="initial"
                animate="animate"
                className="first"
              >
                <motion.span variants={letter} style={{ color: "#fff" }}>
                  N
                </motion.span>
                <motion.span variants={letter} style={{ color: "#fff" }}>
                  O
                </motion.span>
                <motion.span variants={letter} style={{ color: "#fff" }}>
                  T
                </motion.span>
                <motion.span variants={letter} style={{ color: "#fff" }}>
                  R
                </motion.span>
                <motion.span variants={letter} style={{ color: "#fff" }}>
                  E{` `}
                </motion.span>
                <motion.span variants={letter} className="second"></motion.span>
                <motion.span variants={letter} style={{ color: "#fff" }}>
                  A
                </motion.span>
                <motion.span variants={letter} style={{ color: "#fff" }}>
                  R
                </motion.span>
                <motion.span variants={letter} style={{ color: "#fff" }}>
                  T
                </motion.span>
              </motion.span>
              <br />
              <motion.span
                variants={lastName}
                initial="initial"
                animate="animate"
                className="last"
              >
                <motion.span variants={letter} style={{ color: "#fff" }}>
                  F
                </motion.span>
                <motion.span variants={letter} style={{ color: "#fff" }}>
                  A
                </motion.span>
                <motion.span variants={letter} style={{ color: "#fff" }}>
                  I
                </motion.span>
                <motion.span variants={letter} style={{ color: "#fff" }}>
                  T
                </motion.span>
                <motion.span variants={letter}></motion.span>
                <motion.span variants={letter} className="second"></motion.span>
                <motion.span variants={letter} style={{ color: "#fff" }}>
                  V
                </motion.span>
                <motion.span variants={letter} style={{ color: "#fff" }}>
                  O
                </motion.span>
                <motion.span variants={letter} style={{ color: "#fff" }}>
                  T
                </motion.span>
                <motion.span variants={letter} style={{ color: "#fff" }}>
                  R
                </motion.span>
                <motion.span variants={letter} style={{ color: "#fff" }}>
                  E
                </motion.span>
                <motion.span variants={letter}></motion.span>
                <motion.span variants={letter} className="second"></motion.span>
                <motion.span variants={letter} style={{ color: "#FE0000" }}>
                  M
                </motion.span>
                <motion.span variants={letter} style={{ color: "#FE0000" }}>
                  E
                </motion.span>
                <motion.span variants={letter} style={{ color: "#FE0000" }}>
                  T
                </motion.span>
                <motion.span variants={letter} style={{ color: "#FE0000" }}>
                  I
                </motion.span>
                <motion.span variants={letter} style={{ color: "#FE0000" }}>
                  E
                </motion.span>
                <motion.span
                  variants={letter}
                  style={{ color: "#FE0000", fontSize: "20px" }}
                >
                  R
                </motion.span>
              </motion.span>
            </motion.h2>
            <p style={{ color: "#fff" }}>
              <Typical
                loop={Infinity}
                steps={[
                  "CONFORT DE L’ART EST UNE ENTREPRISE OEUVRANT DANS LE DOMAINE D’IMMOBILIER",
                  3000,

                  "ET DE MOBILIERS QUI PRETE SES SERVICES A SA CLIENTELE DEPUIS JANVIER 2015",
                  3000,
                  "SA LEGALISATION A ÉTÉ EFFECTIVE DEPUIS JUIN 2021",
                  3000,
                ]}
              />
              <br />
            </p>
            <motion.div className="btn_group" variants={stagger}>
              <motion.div
                className="btn btn_primary"
                variants={btnGroup}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
                <IconContext.Provider
                  value={{ color: "#14da8f", size: "25px" }}
                >
                  <IoChevronForwardCircle />
                </IconContext.Provider>
              </motion.div>
              <motion.div
                className="btn btn_secondary"
                variants={btnGroup}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Live Chat
              </motion.div>
            </motion.div>
           
          </div>
          <motion.div className="right_content_wrapper">
            <motion.img
              src={image}
              alt="bg"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <CardOne />
      <Confor />
      <Card />
      <h2>Nos recents proj</h2>
      <Service/>
      <Footer/>
    </div>
  );
}

export default App;
