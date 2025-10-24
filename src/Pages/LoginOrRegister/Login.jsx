import React, { useState } from "react";
import { use } from "react";
import { Link, useNavigate, useLocation, Navigate } from "react-router";
import { AuthContext } from "../../Provider/AuthPRovider";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const { signInWithGoogle, loginUser, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success("Google Sign-In successful!");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => { 
        toast.error(error.code);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        toast.success("Login successful!");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password", { state: { email } });
  };

  return (
    <div>
      <Toaster position="top-right" />
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="bg-base-100 shadow-2xl rounded-2xl w-full max-w-xl">
            <div className="card-body p-10">
              <h2 className="text-3xl font-bold text-center mb-2">Login</h2>

              <form onSubmit={handleLogin}>
                <fieldset className="fieldset space-y-3">
                  <div>
                    <label className="label">
                      <span className="label-text font-semibold text-lg">
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input input-bordered w-full h-14 text-lg"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text font-semibold text-lg">
                        Password
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        className="input input-bordered w-full h-14 text-lg pr-12"
                        placeholder="Enter your password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 z-10 focus:outline-none"
                        tabIndex={-1}
                      >
                        {showPassword ? (
                          <Eye size={20} />
                        ) : (
                          <EyeOff size={20} />
                        )}
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="link link-hover text-base text-red-600"
                  >
                    Forgot password?
                  </button>

                  <button
                    type="submit"
                    className="btn btn-neutral w-full h-14 text-lg "
                  >
                    Login
                  </button>

                  <div className="divider text-base">OR</div>

                  <button
                    onClick={handleGoogleSignIn}
                    className="btn btn-outline w-full h-14 text-lg"
                  >
                    Continue with Google
                  </button>

                  <p className="text-center text-base mt-4">
                    Don't have an account?{" "}
                    <Link
                      to={"/register"}
                      className="link link-primary font-semibold"
                    >
                      Sign up
                    </Link>
                  </p>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;