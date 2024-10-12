import Navbar from "./Components/NavBar/Navbar";
import Hero from "./Components/Hero/Hero";
import InfiniteMarquee from "./Components/InfiniteMarquee/InifiniteMarquee";
import YourWindow from "./Components/YourWindow/YourWindow";
import Features from "./Components/Features/Features";
import RealTimeMarketData from "./Components/RealTimeMarketData/RealTimeMarketData";

function App() {


  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <InfiniteMarquee />
      <YourWindow />
      <Features />
      <RealTimeMarketData />
    </div>
  );
}

export default App;