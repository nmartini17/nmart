import "./styles.css";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { FaTrademark } from "react-icons/fa";
import { IconContext } from "react-icons";
import logo from "./no-bg.svg";
import DarkMode from "./DarkMode";

export default function App() {
  return (
    <div className='container'>
      <div className='dark-mode-toggle'>
        <DarkMode />
      </div>
      <a href='/' className='Logo'>
        <img
          src={logo}
          alt='NM'
          width='62,5'
          height='35'
          style={{ align: "left" }}
        />
      </a>

      <div className='titleDiv'>
        <h1>Velkommen</h1>
      </div>

      <div className='icons'>
        <IconContext.Provider
          value={{
            size: "50px",
            title: "Link to Github",
          }}
        >
          <a href='https://github.com/nmartini17'>
            <AiFillGithub />
          </a>
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            size: "50px",
            title: "Link to Linkedin",
          }}
        >
          <a href='https://www.linkedin.com/in/nicolaigmartini/'>
            <AiOutlineLinkedin />
          </a>
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            size: "50px",
            title: "Email",
          }}
        >
          <a href='mailto:nicoulaisen@gmail.com'>
            <MdOutlineMail />
          </a>
        </IconContext.Provider>
      </div>
      <footer className='Footer'>
        2022 - Nicolai Martini
        <FaTrademark />
      </footer>
    </div>
  );
}
