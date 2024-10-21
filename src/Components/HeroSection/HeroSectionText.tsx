import amazonLogo from "../../images/amazon.png";
import flipcartLogo from "../../images/flipkart.png";

const HeroSectionText = () => {
  return (
    <div className=" md:gap-x-20 items-center max-w-[1280px]">
      <div className="">
        <h1 className="text-[48px]   md:text-[108px]  font-extrabold items-center leading-[100px] min-w-28  h-[306px] ">
          YOUR FEET
          <br />
          DESERVE
          <br />
          THE BEST
        </h1>
      </div>
      <div>
        <p className="w-[404px] font-semibold py-10 text-gray-700">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
      </div>
      <div className="flex gap-x-4 py-5">
        <button className="bg-red-600 text-white px-3 py-2 border-2 hover:text-red-600 hover:bg-white hover:border-red-600">SHOP NOW</button>
        <button className="border-2 border-red-600 px-3 py-2 hover:text-white hover:bg-red-600 ">Category</button>
      </div>
      <div>
        <p>Also Available on</p>

        <div className="flex gap-x-4">
          <div>
            <img src={amazonLogo} alt="" />
          </div>
          <div>
            <img src={flipcartLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionText;
