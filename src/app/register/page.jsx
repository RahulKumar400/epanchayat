
// 'use client';
// import Link from 'next/link';
// import { useState } from 'react';
// import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
// import { toast } from 'react-toastify';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// export default function Register() {
//   const router = useRouter();

//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     gender: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.gender) {
//       toast.error('Please select your gender!');
//       return;
//     }

//     try {
//       const res = await axios.post(
//         'https://epanchayat.onrender.com/api/v1/users/register',
//         formData,
//         { withCredentials: true },
//         { headers: { 'Content-Type': 'application/json' } }
//       );

//       if (res.status === 201) {
//         toast.success(res.data.message || 'Registration successful!');
//         console.log('User Registered:', res.data);
//         const userRole = res.data.user.role;
//         if (userRole === 'admin') router.push('/admindashboard');
//         else router.push('/userdashboard');
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error(err.response?.data?.message || 'Registration failed!');
//     }
//   };

//   return (
//     <main
//       className="min-h-screen bg-cover bg-center text-white flex items-center justify-center px-6 relative overflow-hidden"
//       style={{ backgroundImage: "url('/signup3.png')" }}
//     >
//       <div className="w-full max-w-md z-10 bg-gradient-to-r from-green-700 via-green-800 to-green-900 border border-white/10 shadow-2xl rounded-3xl p-10 space-y-8 transition-all duration-300">
//         <h2 className="text-3xl font-bold text-center text-yellow-400 drop-shadow-md">
//           E - Panchayat.
//           <br />
//           <span className="text-white text-2xl">Register.</span>
//         </h2>

//         <form className="space-y-6" onSubmit={handleSubmit}>
//           {/* Username Field */}
//           <div className="relative">
//             <FaUser className="absolute top-3.5 left-3 text-white z-10" />
//             <input
//               name="username"
//               type="text"
//               placeholder="Username"
//               required
//               value={formData.username}
//               onChange={handleChange}
//               className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-white/10"
//             />
//           </div>

//           {/* Email Field */}
//           <div className="relative">
//             <FaEnvelope className="absolute top-3.5 left-3 text-white z-10" />
//             <input
//               name="email"
//               type="email"
//               placeholder="Email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-white/10"
//             />
//           </div>

//           {/* Password Field */}
//           <div className="relative">
//             <FaLock className="absolute top-3.5 left-3 text-white z-10" />
//             <input
//               name="password"
//               type="password"
//               placeholder="Password"
//               required
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-white/10"
//             />
//           </div>

//           {/* Gender Dropdown */}
//           <div className="relative">
//             <select
//               name="gender"
//               value={formData.gender}
//               onChange={handleChange}
//               required
//               className="w-full pl-4 pr-10 py-3 rounded-xl bg-black/10 backdrop-blur-sm text-white placeholder-black focus:outline-none focus:ring-2 focus:ring-yellow-400 border appearance-none"
//             >
//               <option value="" disabled>
//                 Select Gender
//               </option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//             </select>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 transition-all duration-200 text-white font-semibold py-3 rounded-xl shadow-lg"
//           >
//             Register
//           </button>

//           <p className="text-sm text-center text-gray-300">
//             Already have an account?{' '}
//             <Link href="/login" className="text-yellow-400 hover:underline">
//               Log In
//             </Link>
//           </p>
//         </form>
//       </div>
//     </main>
//   );
// }









'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { registerUser } from '../apiServices/authApi'; 

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    gender: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.gender) return toast.error('Please select your gender!');

    try {
      const data = await registerUser(formData);
      toast.success(data.message || 'Registration successful!');
      console.log('✅ User Registered:', data);

      const userRole = data.user?.role;
      if (userRole === 'admin') router.push('/admindashboard');
      else router.push('/userdashboard');
    } catch (err) {
      console.error(err);
      toast.error(err.message || 'Registration failed!');
    }
  };

  return (
    <main
      className="min-h-screen bg-cover bg-center text-white flex items-center justify-center px-6 relative overflow-hidden"
      style={{ backgroundImage: "url('/signup3.png')" }}
    >
      <div className="w-full max-w-md z-10 bg-gradient-to-r from-green-700 via-green-800 to-green-900 border border-white/10 shadow-2xl rounded-3xl p-10 space-y-8 transition-all duration-300">
        <h2 className="text-3xl font-bold text-center text-yellow-400 drop-shadow-md">
          E - Panchayat.
          <br />
          <span className="text-white text-2xl">Register.</span>
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Username */}
          <div className="relative">
            <FaUser className="absolute top-3.5 left-3 text-white z-10" />
            <input
              name="username"
              type="text"
              placeholder="Username"
              required
              value={formData.username}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-white/10"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute top-3.5 left-3 text-white z-10" />
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-white/10"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute top-3.5 left-3 text-white z-10" />
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-white/10"
            />
          </div>

          {/* Gender */}
          <div className="relative">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full pl-4 pr-10 py-3 rounded-xl bg-black/10 backdrop-blur-sm text-white placeholder-black focus:outline-none focus:ring-2 focus:ring-yellow-400 border appearance-none"
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 transition-all duration-200 text-white font-semibold py-3 rounded-xl shadow-lg"
          >
            Register
          </button>

          <p className="text-sm text-center text-gray-300">
            Already have an account?{' '}
            <Link href="/login" className="text-yellow-400 hover:underline">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}

