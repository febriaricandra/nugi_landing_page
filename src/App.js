import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import IconComp from "./components/IconComp";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Trial from "./components/Trial";

function App() {
  return (
    <div className="App font-poppins">
      <Navbar />
      <Hero title="Keeping It All Together" desc="Enjoy special advertising offers from Google, Microsoft Advertising/Yahoo, and other leading sites to help grow your business, - Start Today." />
      <About title="Global leader in cybersecurity" desc="The company’s comprehensive security portfolio includes leading endpoint protection and a number of specialized security solutions and services to fight sophisticated and evolving digital threats. Over 400 million users are protected by Hugi technologies and we help 250,000 corporate clients protect what matters most to them." />
      <IconComp />
      <Pricing />
      <Trial />
      <Footer />
    </div>
  );
}

export default App;
