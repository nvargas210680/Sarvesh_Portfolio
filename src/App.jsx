import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Software from "./components/Softwares/Software";
import Background from "./components/Background/Background";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Software />
      <Background />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
