import React, { useState } from "react";
import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthPRovider";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const { resetPassword } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(location.state?.email || "");

  const handleResetPassword = (e) => {
    e.preventDefault();
    const emailValue = e.target.email.value;

    if (!emailValue) {
      toast.error("Please enter your email address");
      return;
    }

    resetPassword(emailValue)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.");
        // Redirect to Gmail after a short delay
        setTimeout(() => {
          window.location.href = "https://mail.google.com";
        }, 2000);
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          toast.error("No account found with this email");
        } else if (error.code === "auth/invalid-email") {
          toast.error("Invalid email address");
        } else {
          toast.error(error.message);
        }
      });
  };

  return (
    <div>
      <Toaster position="top-right" />
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="bg-base-100 shadow-2xl rounded-2xl w-full max-w-xl">
            <div className="card-body p-10">
              <h2 className="text-3xl font-bold text-center mb-2">
                Reset Password
              </h2>
              <p className="text-center text-gray-600 mb-6">
                Enter your email address and we'll send you a link to reset
                your password.
              </p>

              <form onSubmit={handleResetPassword}>
                <fieldset className="fieldset space-y-6">
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

                  <button
                    type="submit"
                    className="btn btn-neutral w-full h-14 text-lg"
                  >
                    Reset Password
                  </button>

                  <p className="text-center text-base mt-4">
                    Remember your password?{" "}
                    <Link
                      to="/login"
                      className="link link-primary font-semibold"
                    >
                      Login
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

export default ForgotPassword;