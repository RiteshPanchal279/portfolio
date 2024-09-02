import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{duration:0.7}}
        >
          Ritesh Panchal
        </motion.span>
        <div className="social">
          <a href="#">
            <img className="limg" src="/facebook.png" alt="not found" />
          </a>
          <a href="#">
            <img className="limg" src="/instagram.png" alt="" />
          </a>
          <a href="#">
            <img className="limg" src="/youtube.png" alt="" />
          </a>
          <a href="#">
            <img className="limg" src="/dribbble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
