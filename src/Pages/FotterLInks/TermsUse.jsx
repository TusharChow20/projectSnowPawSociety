import React from "react";
import { FileText, Check } from "lucide-react";
import { NavLink } from "react-router";

const TermsUse = () => {
  return (
    <div className="min-h-screen ">
      <div className="bg-gray-800 text-white p-8 md:p-12 border-b rounded-2xl mt-10 border-gray-700">
        <div className="mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <FileText className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">Terms of Use</h1>
          </div>
          <p className="text-lg opacity-90">Last updated: December 2, 2025</p>
        </div>
      </div>

      <div className="mx- py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using Snow Paw Society's services, you accept and
              agree to be bound by these Terms of Use. If you do not agree to
              these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              2. Service Descriptions
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Snow Paw Society provides winter pet care services including but
              not limited to:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-2 text-gray-600">
                <Check className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                <span>Grooming and spa treatments</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <Check className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                <span>Winter clothing fittings and accessories</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <Check className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                <span>Nutrition consultations and wellness checkups</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <Check className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                <span>Training and exercise programs</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              3. Booking and Cancellation
            </h2>
            <div className="bg-gray-50 p-6 rounded-xl space-y-3 border border-gray-200">
              <p className="text-gray-700 font-semibold">Booking Policy:</p>
              <p className="text-gray-600">
                All appointments must be booked at least 24 hours in advance
                through our website or phone.
              </p>
              <p className="text-gray-700 font-semibold mt-4">
                Cancellation Policy:
              </p>
              <p className="text-gray-600">
                Cancellations made 48 hours before the appointment receive full
                refunds. Cancellations within 24 hours are subject to a 50%
                cancellation fee.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              4. Pet Health Requirements
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All pets must be up-to-date on vaccinations and free from
              contagious illnesses. We reserve the right to refuse service to
              any pet showing signs of illness or aggressive behavior for the
              safety of our staff and other pets.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              5. Liability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              While we take every precaution to ensure your pet's safety, Snow
              Paw Society is not liable for any pre-existing conditions,
              injuries, or illnesses. Pet owners are responsible for disclosing
              all relevant health information prior to service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              6. Payment Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Payment is due at the time of service. We accept all major credit
              cards, debit cards, and digital payment methods. Prices are
              subject to change with 30 days notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              7. Intellectual Property
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All content on the Snow Paw Society website, including text,
              graphics, logos, and images, is the property of Snow Paw Society
              and protected by copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              8. User Conduct
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Users must treat our staff and facilities with respect. We reserve
              the right to refuse service or terminate accounts for abusive,
              threatening, or inappropriate behavior.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              9. Changes to Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Snow Paw Society reserves the right to modify these terms at any
              time. Continued use of our services after changes constitutes
              acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              10. Contact Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              For questions regarding these Terms of Use, please contact us at{" "}
              <span className="text-gray-800 font-semibold">
                legal@snowpawsociety.com
              </span>
            </p>
          </section>
        </div>
      </div>

      <div className="bg-gray-800 text-white py-12 border-t border-gray-700 rounded-xl mb-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Questions About Our Terms?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            We're here to help. Contact our team for any clarifications.
          </p>
          <NavLink
            to={"/contact"}
            className="px-8 py-3 bg-white text-gray-800 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            Contact Support
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default TermsUse;
