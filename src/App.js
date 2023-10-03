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

function App() {
  return (
    <div className="overflow-x-hidden">
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
    </div>
  );
}

export default App;
 