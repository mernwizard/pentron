import "./App.css";
import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import "./styles/_app.scss";
import About from "./components/About";
import Clients from "./components/Clients";
import OurPartners from "./components/OurPartners";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
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
