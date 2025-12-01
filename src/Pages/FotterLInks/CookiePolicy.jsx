import React from "react";
import { Cookie, Check } from "lucide-react";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-gray-800 text-white p-8 md:p-12 border-b rounded-2xl border-gray-700">
        <div className="mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Cookie className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">Cookie Policy</h1>
          </div>
          <p className="text-lg opacity-90">Last updated: December 2, 2025</p>
        </div>
      </div>

      <div className="mx-auto py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              What Are Cookies?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Cookies are small text files stored on your device when you visit
              our website. They help us provide you with a better browsing
              experience and allow certain features to work properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Types of Cookies We Use
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-gray-600 pl-4 bg-gray-50 p-4 rounded-r-xl">
                <h3 className="font-bold text-gray-800 mb-2">
                  Essential Cookies
                </h3>
                <p className="text-gray-600 text-sm">
                  Required for the website to function properly. These cannot be
                  disabled as they enable core functionality like security,
                  accessibility, and navigation.
                </p>
              </div>

              <div className="border-l-4 border-gray-600 pl-4 bg-gray-50 p-4 rounded-r-xl">
                <h3 className="font-bold text-gray-800 mb-2">
                  Performance Cookies
                </h3>
                <p className="text-gray-600 text-sm">
                  Help us understand how visitors interact with our website by
                  collecting anonymous information about page visits, traffic
                  sources, and error messages.
                </p>
              </div>

              <div className="border-l-4 border-gray-600 pl-4 bg-gray-50 p-4 rounded-r-xl">
                <h3 className="font-bold text-gray-800 mb-2">
                  Functional Cookies
                </h3>
                <p className="text-gray-600 text-sm">
                  Remember your preferences and choices to provide enhanced,
                  personalized features like language selection, appointment
                  history, and saved preferences.
                </p>
              </div>

              <div className="border-l-4 border-gray-600 pl-4 bg-gray-50 p-4 rounded-r-xl">
                <h3 className="font-bold text-gray-800 mb-2">
                  Marketing Cookies
                </h3>
                <p className="text-gray-600 text-sm">
                  Track your browsing activity to deliver relevant
                  advertisements and measure the effectiveness of our marketing
                  campaigns across different platforms.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Managing Cookies
            </h2>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                You can control and manage cookies in several ways:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-600">
                  <Check className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                  <span>
                    Use our cookie preference center to opt-out of non-essential
                    cookies
                  </span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <Check className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                  <span>
                    Adjust your browser settings to block or delete cookies
                  </span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <Check className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                  <span>
                    Use browser plugins to manage tracking preferences
                  </span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <Check className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                  <span>
                    Clear cookies regularly through browser history settings
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Third-Party Cookies
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We use services from trusted partners like Google Analytics,
              payment processors, and social media platforms. These third
              parties may set their own cookies to provide their services. We
              recommend reviewing their privacy policies for more information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Cookie Duration
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Session Cookies
                </h3>
                <p className="text-sm text-gray-600">
                  Temporary cookies that expire when you close your browser.
                  Used for essential functions like shopping cart management.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Persistent Cookies
                </h3>
                <p className="text-sm text-gray-600">
                  Remain on your device for a set period. Used to remember your
                  preferences and improve your experience on return visits.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Cookie Consent
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By using our website, you consent to our use of cookies as
              described in this policy. You can withdraw consent at any time by
              adjusting your cookie preferences or browser settings. Note that
              disabling certain cookies may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Updates to This Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Cookie Policy from time to time. Any changes
              will be posted on this page with an updated revision date. We
              encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about our use of cookies, please contact us
              at{" "}
              <span className="text-gray-800 font-semibold">
                cookies@snowpawsociety.com
              </span>
            </p>
          </section>
        </div>
      </div>

      <div className="bg-gray-800 text-white py-12 border-t border-gray-700">
        <div className="mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Questions About Cookies?</h3>
          <p className="text-lg mb-6 opacity-90">
            We're transparent about how we use cookies to enhance your
            experience.
          </p>
          <button className="px-8 py-3 bg-white text-gray-800 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg">
            Manage Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
