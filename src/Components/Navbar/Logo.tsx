import LogoImage from '../../../src/images/brand_logo.png';

const Logo = () => {
  return (
    <div>
      <img src={LogoImage} alt="logo" className="h-[46px] w-[76px]" />
    </div>
  );
};

export default Logo;
