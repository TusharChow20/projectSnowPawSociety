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
