import "./styles/Footer.css";
import logo from "../../assets/images/Logo-1.png";

export default function Footer({ footerElement }) {
  return (
    <>
      <footer ref={footerElement}>
        <img src={logo} alt="logo" />
        <span>Made with 💖 by Sevo</span>
      </footer>
    </>
  );
}
