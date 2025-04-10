/**
 * This page provides settings for the user, including tabs for Edit Profile,
 * Preferences, and Security. The Edit Profile tab allows the user to update
 * personal details and change their profile picture.
 */

import React, { useState, useEffect } from "react";
import mockData from "../data/dummyData";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";

interface FormErrors {
  [key: string]: string;
}

const SettingsPage: React.FC = () => {
  const user = mockData.user;

  const [activeTab, setActiveTab] = useState<"edit" | "pref" | "security">(
    "edit"
  );

  const [formState, setFormState] = useState({
    name: user.name,
    username: user.username,
    email: user.email,
    password: user.password,
    dateOfBirth: user.dateOfBirth,
    presentAddress: user.presentAddress,
    permanentAddress: user.permanentAddress,
    city: user.city,
    postalCode: user.postalCode,
    country: user.country,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const [isSaving, setIsSaving] = useState(false);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const validateForm = () => {
    const errors: FormErrors = {};
    if (!formState.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formState.username.trim()) {
      errors.username = "Username is required";
    }
    if (!formState.email.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formState.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!formState.password || formState.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSaving(true);

    setTimeout(() => {
      setIsSaving(false);
      setToastMessage("User was saved successfully!");
    }, 2000);
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  return (
    <div className="relative p-6 min-h-screen bg-gray-50">
      {toastMessage && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-4 py-2 rounded shadow-md">
          {toastMessage}
        </div>
      )}

      {isSaving && (
        <div className="fixed inset-0 bg-black  flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 flex flex-col items-center shadow-lg">
            <Cog6ToothIcon className="w-12 h-12 text-blue-600 animate-spin mb-4" />
            <p className="text-gray-800 font-semibold">Saving...</p>
          </div>
        </div>
      )}

      <h2 className="text-2xl font-bold mb-6">Settings</h2>

      <div className="flex space-x-8 border-b mb-6">
        <button
          className={`pb-2 text-sm ${
            activeTab === "edit"
              ? "border-b-2 border-blue-500 font-semibold"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("edit")}
        >
          Edit Profile
        </button>
        <button
          className={`pb-2 text-sm ${
            activeTab === "pref"
              ? "border-b-2 border-blue-500 font-semibold"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("pref")}
        >
          Preferences
        </button>
        <button
          className={`pb-2 text-sm ${
            activeTab === "security"
              ? "border-b-2 border-blue-500 font-semibold"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("security")}
        >
          Security
        </button>
      </div>

      {activeTab === "edit" && (
        <div>
          <div className="flex flex-col sm:flex-row sm:space-x-6">
            <div className="sm:basis-1/5 mb-6 sm:mb-0 flex flex-col items-center sm:items-start">
              <div className="w-28 h-28 rounded-full overflow-hidden mb-4">
                <img
                  src={user.profilePicture}
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-lg font-semibold">{formState.name}</p>
            </div>

            <div className="sm:basis-2/5 mb-6 sm:mb-0">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block font-semibold text-sm mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block font-semibold text-sm mb-1"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formState.username}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
                {errors.username && (
                  <p className="text-xs text-red-500 mt-1">{errors.username}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block font-semibold text-sm mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block font-semibold text-sm mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="********"
                  value={formState.password}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
                {errors.password && (
                  <p className="text-xs text-red-500 mt-1">{errors.password}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="dateOfBirth"
                  className="block font-semibold text-sm mb-1"
                >
                  Date of Birth
                </label>
                <input
                  type="text"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formState.dateOfBirth}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
              </div>
            </div>

            <div className="sm:basis-2/5">
              <div className="mb-4">
                <label
                  htmlFor="presentAddress"
                  className="block font-semibold text-sm mb-1"
                >
                  Present Address
                </label>
                <input
                  type="text"
                  id="presentAddress"
                  name="presentAddress"
                  value={formState.presentAddress}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="permanentAddress"
                  className="block font-semibold text-sm mb-1"
                >
                  Permanent Address
                </label>
                <input
                  type="text"
                  id="permanentAddress"
                  name="permanentAddress"
                  value={formState.permanentAddress}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="city"
                  className="block font-semibold text-sm mb-1"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formState.city}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="postalCode"
                  className="block font-semibold text-sm mb-1"
                >
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formState.postalCode}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="country"
                  className="block font-semibold text-sm mb-1"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formState.country}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={handleSave}
              className="bg-blue-500 text-white px-6 py-2 rounded-md"
            >
              Save
            </button>
          </div>
        </div>
      )}

      {activeTab === "pref" && (
        <div>
          <p>Preference settings coming soon.</p>
        </div>
      )}

      {activeTab === "security" && (
        <div>
          <p>Security settings coming soon.</p>
        </div>
      )}
    </div>
  );
};

export default SettingsPage;
