import classes from "../../assets//class.png";
import Swiming from "../../assets/swimming.png";
import FindUSOn from "../FindUSOn";
import SocialLogin from "../SocialLogin";
import playground from "../../assets/playground.png"
import bg from "../../assets/bg.png"
const RightAsside = () => {
  return (
    <div className="space-y-5">
      <SocialLogin></SocialLogin>
      <FindUSOn></FindUSOn>
      {/* cart 1 */}
      <div className="">
        <figure className="px-10 pt-10">
          <img src={Swiming} alt="Swiming" className="rounded-xl" />
        </figure>
      </div>
      {/* cart 2 */}
      <div className="">
        <figure className="px-10 pt-10">
          <img src={classes} alt="Swiming" className="rounded-xl" />
        </figure>
      </div>
      {/* cart 3 */}
      <div className="">
        <figure className="px-10 pt-10">
          <img src={playground} alt="Swiming" className="rounded-xl" />
        </figure>
      </div>
      {/* cart 3 */}
      <div className="">
        <figure className="px-10 pt-10">
          <img src={bg} alt="Swiming" className="rounded-xl" />
        </figure>
      </div>
    </div>
  );
};

export default RightAsside;
