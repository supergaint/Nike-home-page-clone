import Navbar from "./Components/Navbar";
import HeroSection from "../src/Components/HeroSection";

const App = () => {
  return (
    <>
    <div className="flex justify-center">
      <Navbar />
    </div>
    <div className="flex justify-center"><HeroSection/></div>
    </>
  );
};

export default App;
