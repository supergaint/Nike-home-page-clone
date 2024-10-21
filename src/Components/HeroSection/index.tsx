import ShoeImg from "../../images/shoe_image.png";
import HeroSectionText from "./HeroSectionText";

const HeroSection = () => {
  return (
    <>
      <div className=" flex justify-between max-w-[1280px] h-[calc(100vh-72px)] items-center">
        <div>
          <HeroSectionText />
        </div>
        <div>
          <img src={ShoeImg} alt="Image" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
