"use client";

export default function AboutUs() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-green-100 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image Section */}
        <div className="relative">
          <img
            src="/aboutus.webp"
            alt="About Our Village"
            className="rounded-2xl shadow-lg w-full object-cover h-[350px] md:h-[420px]"
          />
          <div className="absolute inset-0 bg-green-800/20 rounded-2xl"></div>
        </div>

        {/* Right Text Section */}
        <div>
          <h2 className="text-4xl font-bold text-green-800 mb-6 border-l-4 border-green-600 pl-4">
            About Our Digital Panchayat
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Our Gram Panchayat aims to provide better services, transparency, and
            development opportunities to every citizen of the village. Through this
            digital portal, you can easily access information about government
            schemes, grievance systems, and the latest updates related to the
            Panchayat.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We believe that delivering information digitally to every citizen is
            the true symbol of a “Strong Village – Strong India”.
          </p>

          {/* Stats or Highlight Boxes */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-green-700">12+</h3>
              <p className="text-gray-600 text-sm">Active Schemes</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-green-700">8</h3>
              <p className="text-gray-600 text-sm">Village Members</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-green-700">1000+</h3>
              <p className="text-gray-600 text-sm">Village Citizens</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
