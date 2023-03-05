import "./App.scss";
import "./Component/style.css"
import { FaBehance, FaDribbble } from "react-icons/fa";
import { IoMailOutline, IoChevronForwardCircle, IoStar } from "react-icons/io5";
import { IconContext } from "react-icons";
import Card from "./Component/Card";
import image from "./assets/images/image2.png";
import { motion } from "framer-motion";
import CardOne from "./Component/CardOne";
import Confor from "./Component/Confor";
import Specialite from "./Component/Specialite";

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
    <motion.div initial="initial" animate="animate">
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
          <motion.p variants={fadeInUp}>
            CONFORT DE L’ART EST UNE ENTREPRISE OEUVRANT DANS LE DOMAINE
            D’IMMOBILIER ET DE MOBILIERS QUI PRETE SES SERVICES A SA CLIENTELE
            DEPUIS JANVIER 2015. SA LEGALISATION A ÉTÉ EFFECTIVE DEPUIS JUIN
            2021
            <br />
            sont justes et conforment à la vérité
          </motion.p>
          <motion.div className="btn_group" variants={stagger}>
            <motion.div
              className="btn btn_primary"
              variants={btnGroup}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
              <IconContext.Provider value={{ color: "#14da8f", size: "25px" }}>
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
          <motion.div className="review_container" variants={stagger}>
            <motion.p className="total_review" variants={star}>
              64+ Reviews
            </motion.p>
            <IconContext.Provider value={{ color: "#fff", size: "18px" }}>
              <motion.span
                variants={star}
                whileHover={{
                  scale: 1.2,
                  rotate: 180,
                  borderRadius: "100%",
                  cursor: "pointer",
                }}
              >
                <IoStar />
              </motion.span>
              <motion.span
                variants={star}
                whileHover={{
                  scale: 1.2,
                  rotate: 180,
                  borderRadius: "100%",
                  cursor: "pointer",
                }}
              >
                <IoStar />
              </motion.span>
              <motion.span
                variants={star}
                whileHover={{
                  scale: 1.2,
                  rotate: 180,
                  borderRadius: "100%",
                  cursor: "pointer",
                }}
              >
                <IoStar />
              </motion.span>
              <motion.span
                variants={star}
                whileHover={{
                  scale: 1.2,
                  rotate: 180,
                  borderRadius: "100%",
                  cursor: "pointer",
                }}
              >
                <IoStar />
              </motion.span>
              <motion.span
                variants={star}
                whileHover={{
                  scale: 1.2,
                  rotate: 180,
                  borderRadius: "100%",
                  cursor: "pointer",
                }}
              >
                <IoStar />
              </motion.span>
            </IconContext.Provider>
            <motion.p className="more_review" variants={star}>
              More then 50+ people taking services
            </motion.p>
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
        <CardOne/>
        <Confor/>
      <Card />
    </motion.div>
  );
}

export default App;
