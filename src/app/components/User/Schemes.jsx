// "use client";

// import { useState } from "react";
// import { FaInfoCircle } from "react-icons/fa";
// import UserNavbar from "./UserNavbar";
// import UserSidebar from "./UserSidebar";

// export default function Schemes() {
//   const schemes = [
//     {
//       id: 1,
//       title: "PM-Kisan Scheme",
//       category: "Agriculture",
//       description: "Financial support of ₹6,000 per year to small and marginal farmers.",
//       link: "https://pmkisan.gov.in/",
//     },
//     {
//       id: 2,
//       title: "Adult Literacy Program",
//       category: "Education",
//       description: "Free adult education programs to improve literacy in rural areas.",
//       link: "#",
//     },
//     {
//       id: 3,
//       title: "Water Conservation Subsidy",
//       category: "Infrastructure",
//       description: "Support for installing rainwater harvesting and irrigation systems.",
//       link: "#",
//     },
//     {
//       id: 4,
//       title: "Soil Health Card Scheme",
//       category: "Agriculture",
//       description: "Free soil testing and advisory services to improve crop yields.",
//       link: "https://soilhealth.dac.gov.in/",
//     },
//   ];

//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({ name: "", email: "", scheme: "" });

//   const categories = ["All", ...new Set(schemes.map((s) => s.category))];

//   const filteredSchemes =
//     selectedCategory === "All"
//       ? schemes
//       : schemes.filter((s) => s.category === selectedCategory);

//   const handleFormChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     alert("Your application has been submitted!");
//     setFormData({ name: "", email: "", scheme: "" });
//     setShowForm(false);
//   };

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Sidebar */}
//       <UserSidebar />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-auto">
//         {/* Navbar */}
//         <UserNavbar />

//         <div className="p-6 bg-gray-50 min-h-screen">
//           <div className="flex items-center justify-between mb-8">
//             <h1 className="text-3xl font-bold text-green-800">Schemes & Benefits</h1>
//             <button
//               onClick={() => setShowForm(true)}
//               className="bg-green-600 text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition-colors"
//             >
//               Apply Scheme
//             </button>
//           </div>

//           {/* Category Filter */}
//           <div className="flex flex-wrap gap-3 mb-8">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setSelectedCategory(cat)}
//                 className={`px-5 py-2 rounded-full font-medium transition-colors duration-300 ${
//                   selectedCategory === cat
//                     ? "bg-green-600 text-white shadow-md"
//                     : "bg-white text-gray-700 hover:bg-green-50"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           {/* Schemes Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredSchemes.map((scheme) => (
//               <div
//                 key={scheme.id}
//                 className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between relative group"
//               >
//                 <div className="flex items-start justify-between mb-2">
//                   <h2 className="text-lg font-semibold text-green-800">{scheme.title}</h2>
//                   <div className="relative">
//                     <FaInfoCircle className="text-green-600 cursor-pointer" />
//                     <div className="absolute top-6 right-0 w-60 bg-gray-50 text-gray-800 text-sm p-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-20">
//                       {scheme.description}
//                     </div>
//                   </div>
//                 </div>

//                 <span className="text-sm font-medium text-gray-500 mb-4">{scheme.category}</span>

//                 <a
//                   href={scheme.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="mt-auto inline-block bg-green-100 text-green-800 font-medium px-4 py-2 rounded-full text-center hover:bg-green-200 transition-colors duration-300"
//                 >
//                   Learn More
//                 </a>
//               </div>
//             ))}

//             {filteredSchemes.length === 0 && (
//               <p className="text-gray-500 col-span-full">No schemes found for this category.</p>
//             )}
//           </div>
//         </div>

//         {/* Modal Form */}
//         {showForm && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
//               <h2 className="text-2xl font-bold mb-4 text-green-800">Apply for a Scheme</h2>
//               <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Full Name"
//                   value={formData.name}
//                   onChange={handleFormChange}
//                   className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
//                   required
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={formData.email}
//                   onChange={handleFormChange}
//                   className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
//                   required
//                 />
//                 <select
//                   name="scheme"
//                   value={formData.scheme}
//                   onChange={handleFormChange}
//                   className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
//                   required
//                 >
//                   <option value="">Select Scheme</option>
//                   {schemes.map((s) => (
//                     <option key={s.id} value={s.title}>
//                       {s.title}
//                     </option>
//                   ))}
//                 </select>
//                 <div className="flex justify-end gap-2 mt-2">
//                   <button
//                     type="button"
//                     onClick={() => setShowForm(false)}
//                     className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }





"use client";
import { useEffect, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { applyForScheme, getSchemes } from "../../apiServices/user/schemes";
import UserLayout from "./UserLayout";

export default function Schemes() {
  const [schemes, setSchemes] = useState([]); 
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
  });

  
  useEffect(() => {
    const fetchSchemes = async () => {
      setLoading(true);
      try {
        const data = await getSchemes();
        console.log(data)
        setSchemes(data);

      } catch (err) {
        console.error("❌ Error fetching schemes:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSchemes();
  }, []);

  const categories = ["All", ...new Set(schemes.map((s) => s.category))];

  const filteredSchemes =
    selectedCategory === "All"
      ? schemes
      : schemes.filter((s) => s.category === selectedCategory);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await applyForScheme(formData);
      console.log("✅ Scheme applied successfully:", res);
      alert("Scheme application submitted successfully!");

      // Refresh list
      const data = await getSchemes();
      setSchemes(data);

      setFormData({ title: "", category: "", description: "" });
      setShowForm(false);
    } catch (err) {
      console.error("❌ Failed to apply scheme:", err);
      alert(err.message || "Something went wrong while applying.");
    }
  };

  return (
    <UserLayout>
        <div className=" bg-gray-50 min-h-screen">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-green-800">
              Schemes & Benefits
            </h1>
            <button
              onClick={() => setShowForm(true)}
              className="bg-green-600 text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition-colors"
            >
              Apply Scheme
            </button>
          </div>

          {/* ✅ Category Filter */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full font-medium transition-colors duration-300 ${
                  selectedCategory === cat
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-green-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ✅ Schemes List */}
          {loading ? (
            <p className="text-gray-500 text-center mt-10">Loading schemes...</p>
          ) : filteredSchemes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSchemes.map((scheme) => (
                <div
                  key={scheme._id}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between relative group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h2 className="text-lg font-semibold text-green-800">
                      {scheme.title}
                    </h2>
                    <div className="relative">
                      <FaInfoCircle className="text-green-600 cursor-pointer" />
                      <div className="absolute top-6 right-0 w-60 bg-gray-50 text-gray-800 text-sm p-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-20">
                        {scheme.description}
                      </div>
                    </div>
                  </div>

                  <span className="text-sm font-medium text-gray-500 mb-4">
                    {scheme.category}
                  </span>

                  <a
                    href={scheme.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block bg-green-100 text-green-800 font-medium px-4 py-2 rounded-full text-center hover:bg-green-200 transition-colors duration-300"
                  >
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center mt-10">
              No schemes found.
            </p>
          )}
        </div>

        {/* ✅ Modal Form */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
              <h2 className="text-2xl font-bold mb-4 text-green-800">
                Apply for a Scheme
              </h2>
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="title"
                  placeholder="Scheme Title"
                  value={formData.title}
                  onChange={handleFormChange}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  value={formData.category}
                  onChange={handleFormChange}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
                <textarea
                  name="description"
                  placeholder="Description"
                  value={formData.description}
                  onChange={handleFormChange}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                  rows="3"
                  required
                ></textarea>

                <div className="flex justify-end gap-2 mt-2">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </UserLayout>
  );
}
