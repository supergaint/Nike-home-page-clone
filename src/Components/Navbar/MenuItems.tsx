interface Props {
  isMobile?: boolean;
}

const MenuItems = ({ isMobile }: Props) => {
  const menuClass = isMobile
    ? 'flex flex-col items-center space-y-4 py-4'
    : 'hidden lg:flex flex-row justify-around space-x-6';
  
  return (
    <ul className={`${menuClass} font-semibold text-[16px]`}>
      <li><a href="#" className="hover:text-red-600">MENU</a></li>
      <li><a href="#" className="hover:text-red-600">LOCATION</a></li>
      <li><a href="#" className="hover:text-red-600">ABOUT</a></li>
      <li><a href="#" className="hover:text-red-600">CONTACT</a></li>
    </ul>
  );
};

export default MenuItems;
