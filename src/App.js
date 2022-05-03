import "./styles.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { IconContext } from "react-icons";
import logo from "./Sinds-logo.png";

export default function App() {
  return (
    <div className='App'>
      <a href='/'>
        <img
          src={logo}
          alt='NM'
          width='62,5'
          height='35'
          style={{ align: "left" }}
        />
      </a>

      <h1 className='Title'>Velkommen</h1>
      <IconContext.Provider
        value={{
          color: "#043927",
          className: "Icon",
          size: "25px",
          title: "Link to Github",
        }}
      >
        <a href='https://github.com/nmartini17'>
          <AiFillGithub />
        </a>
      </IconContext.Provider>
      <IconContext.Provider
        value={{
          color: "#043927",
          className: "Icon",
          size: "25px",
          title: "Link to Linkedin",
        }}
      >
        <a href='https://www.linkedin.com/in/nicolaigmartini/'>
          <AiFillLinkedin />
        </a>
      </IconContext.Provider>
      <IconContext.Provider
        value={{
          color: "#043927",
          className: "Icon",
          size: "25px",
          title: "Email",
        }}
      >
        <a href='mailto:nicoulaisen@gmail.com'>
          <MdEmail />
        </a>
      </IconContext.Provider>
    </div>
  );
}
