import "./App.css";
import Contactus from "./components/Contactus";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Progress from "./components/Progress";
import Project from "./components/Project";
import Project2 from "./components/Project2";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

function App() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, transition: { duration: 1.5 } });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      exit={{ opacity: 0 }}
      className="overflow-x-hidden"
    >
      <div className="bg-blue-500">
        <Navbar />
        <Hero />
      </div>
      <Intro />
      <Experience />
      <Project />
      <Project2 />
      <Progress />
      <Contactus />
      {/* <Footer/> */}
    </motion.div>
  );
}

export default App;
