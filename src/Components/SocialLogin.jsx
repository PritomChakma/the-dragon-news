import { FaGithub, FaGoogle } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div className="space-y-2">
            <h2 className="font-bold ">Login With</h2>
      <button className="btn w-full">
        <FaGoogle />
        Login with Google
      </button>
      <button className="btn w-full">
        <FaGithub />
        Login with Github
      </button>
    </div>
  );
};

export default SocialLogin;
