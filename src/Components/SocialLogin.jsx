import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContex } from "../provider/AuthProvider";
const SocialLogin = () => {
  const { googleUserLogin, githubUserLogin } = useContext(AuthContex);
  // google login
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    googleUserLogin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };
  // github login
  const handleGithubLogin = (e) => {
    e.preventDefault();
    githubUserLogin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };

  return (
    <div className="space-y-2">
      <h2 className="font-bold ">Login With</h2>
      <button onClick={handleGoogleLogin} className="btn w-full">
        <FaGoogle />
        Login with Google
      </button>
      <button onClick={handleGithubLogin} className="btn w-full">
        <FaGithub />
        Login with Github
      </button>
    </div>
  );
};

export default SocialLogin;
