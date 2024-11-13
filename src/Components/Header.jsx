import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <div className="logo">
        <img className="py-2 w-[400px]" src={logo} srcset="" />
      </div>
      <h2 className="text-lg text-gray-600">Journalism Without Fear or Favour</h2>
    </div>
  );
};

export default Header;
