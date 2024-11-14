import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10">
        <h2 className="text-xl font-semibold text-center">
        Register your account
        </h2>
        <form className="card-body">
          {/* card */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="input input-bordered bg-[#F3F3F3]"
              required
            />
          </div>
          {/* card */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo Url</span>
            </label>
            <input
              type="text"
              placeholder="Enter your photo url"
              className="input input-bordered bg-[#F3F3F3]"
              required
            />
          </div>
          {/* card */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Register</button>
          </div>
        </form>
        <p className="font-semibold text-center">
          You Have Already Account ?{" "}
          <Link className="text-blue-500" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
