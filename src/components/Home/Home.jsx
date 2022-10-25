import "./styles/Home.css";
import banner from "../../assets/images/banner.png";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* first section of the page */}
      <div id="home">
        <div className="textContainer">
          <h2>Golds Gym</h2>
          <h1>
            Sweat, Smile <br /> and Repeat
          </h1>
          <p>Check out the most effective exercises personalized to you</p>
          <a href="#exercises">Explore Exercises</a>

          <h1 className="backgroundText">Exercises</h1>
        </div>

        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          src={banner}
          alt="banner"
        />
      </div>
    </>
  );
}
