import "./App.css";
import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import "./styles/_app.scss";
import About from "./components/About";
import Clients from "./components/Clients";
import OurPartners from "./components/OurPartners";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="App">
      <ScrollToTop smooth color="#6f00ff" height="20" />
      <Header />
      <MainBanner />
      <About />
      <OurPartners />
      <Clients />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
