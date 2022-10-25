import "./styles/Header.css";
import logo from "../../assets/images/Logo-1.png";

export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <img src={logo} alt="logo" />

          <nav>
            <a href="#home">Home</a>
            <a href="#exercises">Exercises</a>
            {/* <a href="#about">About</a>
            <a href="#contact">Contact</a> */}
          </nav>
        </div>
      </header>
    </>
  );
}
