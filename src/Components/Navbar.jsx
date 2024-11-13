import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center w-11/12 mx-auto py-2">
          <div className="div"></div>
          <div className="nav space-x-5">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/carrer">Carrer</Link>
          </div>
          <div className="login flex items-center gap-2">
            <div className="div">
                <img src={userIcon} srcset="" />
            </div>
            <button className="btn btn-neutral rounded-none w-[100px] h-[30px]">Login</button>
          </div>
        </div>
    );
};

export default Navbar;