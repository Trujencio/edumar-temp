import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Survey from "./components/Survey";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Survey />
        <Contact />
      </main>
    </>
  );
}

export default App;