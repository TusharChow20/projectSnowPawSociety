import React from "react";
import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthPRovider";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
import { updateProfile } from "firebase/auth";

const validatePassword = (password) => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

  if (password.length < 6) {
    return "Password must be at least 6 characters long!";
  }
  if (!hasUpperCase) {
    return "Password must contain at least one uppercase letter!";
  }
  if (!hasLowerCase) {
    return "Password must contain at least one lowercase letter!";
  }
  if (!hasNumber) {
    return "Password must contain at least one number!";
  }
  if (!hasSpecialChar) {
    return "Password must contain at least one special character!";
  }
  return null;
};

const Register = () => {
  const { createUser, signInWithGoogle, setUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;

    const passwordError = validatePassword(password);
    if (passwordError) {
      toast.error(passwordError);
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            setUser({
              ...result.user,
              displayName: name,
              photoURL: photoURL,
            });
            setSuccess(true);
            toast.success("Registration Successful. Going To Home", {
              style: {
                fontSize: "18px",
                padding: "20px",
                minWidth: "300px",
              },
            });
            setTimeout(() => {
              navigate("/");
            }, 1200);
          })
          .catch((error) => {
            toast.error("Failed to update profile");
            console.error(error);
          });
      })
      .catch((error) => {
        setSuccess(false);
        toast.error(error.code);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("Google Sign-In successful!");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <div>
      <Toaster position="top-right" />
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="bg-base-100 shadow-2xl rounded-2xl w-full max-w-xl">
            <div className="card-body p-10">
              <h2 className="text-4xl font-bold text-center mb-8">Sign Up</h2>

              <form onSubmit={handleRegister} className="space-y-6">
                <fieldset className="fieldset space-y-6">
                  <div>
                    <label className="label">
                      <span className="label-text font-semibold text-lg">
                        Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="input input-bordered w-full h-14 text-lg"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text font-semibold text-lg">
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="input input-bordered w-full h-14 text-lg"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text font-semibold text-lg">
                        Photo URL
                      </span>
                    </label>
                    <input
                      type="text"
                      name="photoURL"
                      className="input input-bordered w-full h-14 text-lg"
                      placeholder="Enter your photo URL"
                    />
                  </div>

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
                      {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                    </button>
                  </div>

                  <button
                    // to="/login"
                    type="submit"
                    className="btn btn-neutral w-full h-14 text-lg mt-4"
                  >
                    Register
                  </button>
                </fieldset>

                <div className="divider text-base">OR</div>

                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="btn btn-outline w-full h-14 text-lg"
                >
                  Continue with Google
                </button>

                <p className="text-center text-base mt-4">
                  Already have an account?{" "}
                  <Link to="/login" className="link link-primary font-semibold">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;