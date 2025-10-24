import React, { useState } from "react";
import { use } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthPRovider";
import { updateProfile } from "firebase/auth";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { User, Mail, Camera, Edit2, X } from "lucide-react";

const Profile = () => {
  const { user, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: user?.displayName || "",
    photoURL: user?.photoURL || "",
  });
  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setLoading(true);

    updateProfile(user, {
      displayName: formData.displayName,
      photoURL: formData.photoURL,
    })
      .then(() => {
        setUser({
          ...user,
          displayName: formData.displayName,
          photoURL: formData.photoURL,
        });
        toast.success("Profile updated successfully!");
        setIsEditing(false);
        setLoading(false);
      })
      .catch((error) => {
        toast.error("Failed to update profile");
        console.error(error);
        setLoading(false);
      });
  };

  const handleCancel = () => {
    setFormData({
      displayName: user?.displayName || "",
      photoURL: user?.photoURL || "",
    });
    setIsEditing(false);
  };

  if (!user) {
    navigate("/login");
    return null;
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
      <Toaster position="top-right" />

      <div className="max-w-4xl mx-auto">
        <div className="bg-base-100 shadow-2xl rounded-2xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-30"></div>

          {/* Profile Content */}
          <div className="relative md:px-8 pb-8">
            {/* Profile Image */}
            <div className="flex justify-center -mt-16 mb-6">
              <div className="relative">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName || "User"}
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <User size={64} className="text-white" />
                  </div>
                )}
              </div>
            </div>

            {!isEditing ? (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    {user.displayName || "Anonymous User"}
                  </h1>
                  <p className="text-gray-600 wrap-anywhere md:text-lg flex items-center justify-center gap-2">
                    <Mail size={20} />
                    {user.email}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <User size={24} className="text-blue-600" />
                      <h3 className="text-lg font-semibold text-gray-700">
                        Display Name
                      </h3>
                    </div>
                    <p className="text-gray-800 text-xl font-medium ml-9">
                      {user.displayName || "Not set"}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <Mail size={24} className="text-purple-600" />
                      <h3 className="text-lg font-semibold text-gray-700">
                        Email Address
                      </h3>
                    </div>
                    <p className="text-gray-800 text-xl font-medium ml-9 break-all">
                      {user.email}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl shadow-md md:col-span-2">
                    <div className="flex items-center gap-3 mb-2">
                      <Camera size={24} className="text-pink-600" />
                      <h3 className="text-lg font-semibold text-gray-700">
                        Profile Picture URL
                      </h3>
                    </div>
                    <p className="text-gray-800 text-sm font-medium ml-9 break-all">
                      {user.photoURL || "No profile picture set"}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="btn btn-neutral btn-lg gap-2 px-8"
                  >
                    <Edit2 size={20} />
                    Update Profile
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Update Your Profile
                  </h2>
                  <p className="text-gray-600">
                    Modify your profile information below
                  </p>
                </div>

                <form
                  onSubmit={handleUpdateProfile}
                  className="max-w-2xl mx-auto space-y-6"
                >
                  <div>
                    <label className="label">
                      <span className="label-text font-semibold text-lg flex items-center gap-2">
                        <User size={20} />
                        Display Name
                      </span>
                    </label>
                    <input
                      type="text"
                      value={formData.displayName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          displayName: e.target.value,
                        })
                      }
                      className="input input-bordered w-full h-14 text-lg"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text font-semibold text-lg flex items-center gap-2">
                        <Camera size={20} />
                        Photo URL
                      </span>
                    </label>
                    <input
                      type="url"
                      value={formData.photoURL}
                      onChange={(e) =>
                        setFormData({ ...formData, photoURL: e.target.value })
                      }
                      className="input input-bordered w-full h-14 text-lg"
                      placeholder="Enter photo URL"
                    />
                    {formData.photoURL && (
                      <div className="mt-4 flex justify-center">
                        <img
                          src={formData.photoURL}
                          alt="Preview"
                          className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex gap-4 mt-8">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-neutral flex-1 h-14 text-lg"
                    >
                      {loading ? (
                        <span className="loading loading-spinner"></span>
                      ) : (
                        "Save Changes"
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={handleCancel}
                      disabled={loading}
                      className="btn btn-outline flex-1 h-14 text-lg gap-2"
                    >
                      <X size={20} />
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
