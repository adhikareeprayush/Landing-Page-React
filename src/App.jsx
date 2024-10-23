import Navbar from "./Components/NavBar/Navbar";
import Hero from "./Components/Hero/Hero";
import InfiniteMarquee from "./Components/InfiniteMarquee/InifiniteMarquee";
import YourWindow from "./Components/YourWindow/YourWindow";
import Features from "./Components/Features/Features";
import RealTimeMarketData from "./Components/RealTimeMarketData/RealTimeMarketData";
import Unleash from "./Components/Unleash/Unleash";
import Better from "./Components/Better/Better";
import Testimonials from "./Components/Testimonials/Testimonials";

function App() {


  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <InfiniteMarquee />
      <YourWindow />
      <Features />
      <RealTimeMarketData />
      <Unleash />
      <Better />
      <Testimonials />
    </div>
  );
}

export default App;