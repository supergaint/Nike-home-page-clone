import MenuItems from './MenuItems';

const MobileMenu = () => {
  return (
    <div className="lg:hidden absolute top-16 left-0 w-full bg-white flex flex-col items-center">
      <MenuItems isMobile />
      <button className="h-[31px] w-[75px] text-[16px] text-white bg-red-600 hover:bg-red-700">
        Login
      </button>
    </div>
  );
};

export default MobileMenu;
