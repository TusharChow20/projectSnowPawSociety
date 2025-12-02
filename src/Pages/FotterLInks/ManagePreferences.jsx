import React, { useState } from "react";
import {
  Cookie,
  Shield,
  BarChart3,
  Sparkles,
  Megaphone,
  Save,
  RotateCcw,
  Info,
} from "lucide-react";

const ManagePreferences = () => {
  const [preferences, setPreferences] = useState({
    essential: true, // Always enabled
    performance: true,
    functional: true,
    marketing: false,
  });

  const [saved, setSaved] = useState(false);

  const cookieCategories = [
    {
      id: "essential",
      name: "Essential Cookies",
      icon: Shield,
      description:
        "Required for the website to function properly. These cookies enable core functionality like security, network management, and accessibility.",
      required: true,
      examples: ["Session management", "Security tokens", "Load balancing"],
    },
    {
      id: "performance",
      name: "Performance Cookies",
      icon: BarChart3,
      description:
        "Help us understand how visitors interact with our website by collecting and reporting information anonymously.",
      required: false,
      examples: ["Google Analytics", "Page load times", "Error tracking"],
    },
    {
      id: "functional",
      name: "Functional Cookies",
      icon: Sparkles,
      description:
        "Enable enhanced functionality and personalization, such as remembering your preferences and providing customized features.",
      required: false,
      examples: [
        "Language preferences",
        "Saved appointments",
        "UI customization",
      ],
    },
    {
      id: "marketing",
      name: "Marketing Cookies",
      icon: Megaphone,
      description:
        "Used to track visitors across websites to display relevant and engaging advertisements tailored to your interests.",
      required: false,
      examples: [
        "Ad targeting",
        "Campaign tracking",
        "Social media integration",
      ],
    },
  ];

  const handleToggle = (id) => {
    if (id === "essential") return; // Cannot disable essential cookies

    setPreferences((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    setSaved(false);
  };

  const handleSave = () => {
    // In a real application, this would save to localStorage or send to server
    console.log("Saving preferences:", preferences);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleAcceptAll = () => {
    setPreferences({
      essential: true,
      performance: true,
      functional: true,
      marketing: true,
    });
    setSaved(false);
  };

  const handleRejectAll = () => {
    setPreferences({
      essential: true,
      performance: false,
      functional: false,
      marketing: false,
    });
    setSaved(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-800 text-white p-8 md:p-12 border-b border-gray-700">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Cookie className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Manage Cookie Preferences
            </h1>
          </div>
          <p className="text-lg opacity-90">
            Customize your cookie settings to control how we collect and use
            data on our website.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-12 px-4">
        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 flex gap-3">
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-blue-800">
            Your privacy matters to us. You can enable or disable different
            types of cookies below. Note that blocking some cookies may impact
            your experience on our website.
          </p>
        </div>

        {/* Cookie Categories */}
        <div className="space-y-6 mb-8">
          {cookieCategories.map((category) => {
            const Icon = category.icon;
            const isEnabled = preferences[category.id];

            return (
              <div
                key={category.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-4 flex-1">
                    <div
                      className={`p-3 rounded-lg ${
                        isEnabled ? "bg-gray-800" : "bg-gray-200"
                      } transition-colors duration-300`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          isEnabled ? "text-white" : "text-gray-500"
                        }`}
                      />
                    </div>

                    <div className="flex-1">
                      <div className="md:flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-800">
                          {category.name}
                        </h3>
                        {category.required && (
                          <span className="px-2 py-1 bg-gray-800 text-white text-xs font-semibold rounded-full">
                            Required
                          </span>
                        )}
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-3">
                        {category.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {category.examples.map((example, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Toggle Switch */}
                  <button
                    onClick={() => handleToggle(category.id)}
                    disabled={category.required}
                    className={`relative w-14 h-8 rounded-full transition-all duration-300 flex-shrink-0 ${
                      category.required
                        ? "bg-gray-400 cursor-not-allowed"
                        : isEnabled
                        ? "bg-gray-800"
                        : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
                        isEnabled ? "transform translate-x-6" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={handleSave}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Save className="w-5 h-5" />
              Save Preferences
            </button>

            <button
              onClick={handleAcceptAll}
              className="flex-1 px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Accept All
            </button>

            <button
              onClick={handleRejectAll}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 text-gray-800 font-bold rounded-lg hover:bg-gray-300 transition-all duration-300"
            >
              <RotateCcw className="w-5 h-5" />
              Reject All
            </button>
          </div>

          {saved && (
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-center">
              <p className="text-green-800 font-semibold">
                ✓ Your preferences have been saved successfully!
              </p>
            </div>
          )}
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>
            You can change your preferences at any time by revisiting this page.
            <br />
            For more information, read our{" "}
            <a
              href="/cookie-policy"
              className="text-gray-800 font-semibold hover:underline"
            >
              Cookie Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManagePreferences;
