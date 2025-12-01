import React from "react";
import { Shield, Check } from "lucide-react";
import { NavLink } from "react-router";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-800 text-white p-8 md:p-12 border-b border-gray-700">
        <div className=" mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Shield className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-lg opacity-90">Last updated: December 2, 2025</p>
        </div>
      </div>

      <div className="mx-auto  py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We collect information to provide better services to our customers
              and their pets:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Personal Information
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Name and contact details</li>
                  <li>• Email address and phone number</li>
                  <li>• Billing and payment information</li>
                  <li>• Home address</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-2">
                  Pet Information
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Pet name, breed, and age</li>
                  <li>• Health and vaccination records</li>
                  <li>• Service history and preferences</li>
                  <li>• Behavioral notes</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Your information helps us deliver personalized pet care services:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-2 text-gray-600">
                <Check className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                <span>To schedule and manage appointments</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <Check className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                <span>To process payments and send receipts</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <Check className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                <span>To send service reminders and updates</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <Check className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                <span>To improve our services and customer experience</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <Check className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                <span>To communicate promotional offers (with consent)</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              3. Data Protection
            </h2>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <p className="text-gray-700 leading-relaxed">
                We implement industry-standard security measures to protect your
                personal information. All payment transactions are encrypted
                using SSL technology. We never sell or share your personal data
                with third parties for marketing purposes without explicit
                consent.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              4. Your Rights
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              You have the right to:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                <span>Access your personal data</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                <span>Request data correction</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                <span>Delete your account</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                <span>Opt-out of marketing emails</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                <span>Request data portability</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                <span>Withdraw consent anytime</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              5. Data Retention
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We retain your personal information for as long as necessary to
              provide our services and comply with legal obligations. Pet health
              records are kept for 7 years as required by veterinary
              regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              6. Third-Party Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may use third-party services for payment processing,
              appointment scheduling, and analytics. These partners are bound by
              confidentiality agreements and are prohibited from using your
              information for any other purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              7. Children's Privacy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our services are not directed to children under 13. We do not
              knowingly collect personal information from children. If you
              believe we have collected information from a child, please contact
              us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              8. Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions about this Privacy Policy or want to
              exercise your rights, please contact us at{" "}
              <span className="text-gray-800 font-semibold">
                privacy@snowpawsociety.com
              </span>
            </p>
          </section>
        </div>
      </div>

      <div className="bg-gray-800 text-white py-12 border-t border-gray-700">
        <div className=" mx-auto  text-center">
          <h3 className="text-3xl font-bold mb-4">Your Privacy Matters</h3>
          <p className="text-lg mb-6 opacity-90">
            We're committed to protecting your personal information.
          </p>
          <NavLink
            to={"/contact"}
            className="px-8 py-3 bg-white text-gray-800 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
