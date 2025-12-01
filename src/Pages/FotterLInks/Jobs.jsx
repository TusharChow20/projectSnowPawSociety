import React from "react";
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Heart,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";

const Jobs = () => {
  const jobs = [
    {
      title: "Pet Groomer",
      department: "Grooming",
      location: "Main Branch",
      type: "Full-time",
      salary: "$35,000 - $45,000",
      description:
        "Join our grooming team to provide exceptional winter care services to pets. Experience with various breeds and winter coat maintenance required.",
    },
    {
      title: "Veterinary Assistant",
      department: "Health & Wellness",
      location: "Main Branch",
      type: "Full-time",
      salary: "$40,000 - $50,000",
      description:
        "Support our veterinary team in providing wellness checkups, winter health consultations, and emergency care for pets.",
    },
    {
      title: "Pet Trainer",
      department: "Training",
      location: "Training Center",
      type: "Full-time",
      salary: "$38,000 - $48,000",
      description:
        "Lead snow walk training sessions and indoor exercise programs. Certification in animal behavior preferred.",
    },
    {
      title: "Customer Service Representative",
      department: "Front Desk",
      location: "Main Branch",
      type: "Full-time",
      salary: "$30,000 - $38,000",
      description:
        "Be the first point of contact for pet owners. Handle bookings, inquiries, and provide excellent customer service.",
    },
    {
      title: "Pet Nutritionist",
      department: "Health & Wellness",
      location: "Main Branch",
      type: "Part-time",
      salary: "$45,000 - $55,000",
      description:
        "Provide winter nutrition consultations and create customized meal plans for pets based on their seasonal needs.",
    },
    {
      title: "Social Media Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      salary: "$42,000 - $52,000",
      description:
        "Manage Snow Paw Society's social media presence, create engaging content, and build our online community of pet lovers.",
    },
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Pet-Friendly Workplace",
      description: "Bring your furry friend to work",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Competitive Salary",
      description: "Above-market compensation",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Professional Development",
      description: "Training and certifications covered",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Great Team Culture",
      description: "Supportive and collaborative environment",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Briefcase className="w-16 h-16 text-gray-700" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Join Our Pack
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-600">
            Build a rewarding career while making a difference in the lives of
            pets and their families
          </p>
        </div>
      </div>

      {/* Why Work With Us */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Snow Paw Society?
          </h2>
          <p className="text-xl text-gray-600">
            More than just a job, it's a passion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-200"
            >
              <div className="bg-gray-800 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Open Positions */}
      <div className="bg-gray-50 py-16 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600">
              Find your perfect role in our growing team
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="flex items-center gap-1 text-sm text-gray-600">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-gray-600">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                  <button className="bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transform transition-all duration-300 shadow-md flex items-center gap-2 whitespace-nowrap">
                    Apply Now
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Application Process
          </h2>
          <p className="text-xl text-gray-600">Simple and straightforward</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "1",
              title: "Apply Online",
              description: "Submit your application through our website",
            },
            {
              step: "2",
              title: "Initial Review",
              description: "Our HR team reviews your qualifications",
            },
            {
              step: "3",
              title: "Interview",
              description: "Meet with our team for an interview",
            },
            {
              step: "4",
              title: "Welcome Aboard",
              description: "Join the Snow Paw Society family",
            },
          ].map((process, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-800 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {process.step}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {process.title}
              </h3>
              <p className="text-gray-600 text-sm">{process.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join a team that's passionate about pet care and dedicated to
            excellence in everything we do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
