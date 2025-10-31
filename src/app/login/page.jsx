// 'use client';
// import Link from 'next/link';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { FaEnvelope, FaLock } from 'react-icons/fa';
// import { toast } from 'react-toastify';

// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   // Hardcoded credentials (for demo only!)
//   const validUser = {
//     email: 'test@example.com',
//     password: '123456',
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       toast.error('Please fill in all fields');
//       return;
//     }

//     setLoading(true);

//     setTimeout(() => {
//       if (email === validUser.email && password === validUser.password) {
//         toast.success('Login successful!');
//       } else {
//         toast.error('Invalid email or password');
//       }
//       setLoading(false);
//     }, 1000);
//   };

//   return (
//     <main
//       className="min-h-screen bg-cover bg-center text-white flex items-center justify-center px-6 relative overflow-hidden"
//       style={{ backgroundImage: "url('/signup3.png')" }}
//     >
//       <div className="absolute inset-0 z-0"></div>

//       <div className="w-full max-w-md z-10 bg-gradient-to-r from-green-700 via-green-800 to-green-900 border border-white/10 shadow-2xl rounded-3xl p-10 space-y-8">
//         <h2 className="text-3xl font-bold text-center text-yellow-400 drop-shadow-md">
//           E - Panchayat.
//           <br />
//           <span className="text-white text-2xl">Log In.</span>
//         </h2>

//         <form className="space-y-6" onSubmit={handleLogin}>
//           <div className="relative">
//             <FaEnvelope className="absolute top-3.5 left-3 text-white z-10" />
//             <input
//               name="email"
//               type="email"
//               placeholder="Email ID"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-white/10"
//             />
//           </div>

//           <div className="relative">
//             <FaLock className="absolute top-3.5 left-3 text-white z-10" />
//             <input
//               name="password"
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-white/10"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 transition-all duration-200 text-white font-semibold py-3 rounded-xl shadow-lg"
//           >
//             {loading ? 'Logging in...' : 'Log In'}
//           </button>

//           <p className="text-sm text-center text-gray-300">
//             Start learning–Log In.?{' '}
//             <Link
//               href="/forgot-password"
//               className="text-yellow-400 hover:underline"
//             >
//               Forgot Password
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
import { useRouter } from 'next/navigation';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { showToast } from '../components/ToastProvider.jsx';
import { loginUser } from '../apiServices/authApi.js';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      showToast('error', 'Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      // ✅ helper se call karo
      const res = await loginUser({ email, password });

      showToast('success', res.message || 'Login successful!');

      const userRole = res.user.role;
      if (userRole === 'admin') router.push('/admindashboard');
      else router.push('/userdashboard');
    } catch (err) {
      console.error(err);
      showToast('error', err.message || 'Login failed!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="min-h-screen bg-cover bg-center text-white flex items-center justify-center px-6 relative overflow-hidden"
      style={{ backgroundImage: "url('/signup3.png')" }}
    >
      <div className="w-full max-w-md z-10 bg-gradient-to-r from-green-700 via-green-800 to-green-900 border border-white/10 shadow-2xl rounded-3xl p-10 space-y-8">
        <h2 className="text-3xl font-bold text-center text-yellow-400 drop-shadow-md">
          E - Panchayat.
          <br />
          <span className="text-white text-2xl">Log In.</span>
        </h2>

        <form className="space-y-6" onSubmit={handleLogin}>
          <div className="relative">
            <FaEnvelope className="absolute top-3.5 left-3 text-white z-10" />
            <input
              name="email"
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-white/10"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute top-3.5 left-3 text-white z-10" />
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-white/10"
            />
            <div
              className="absolute top-3.5 right-3 text-white cursor-pointer z-10"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 transition-all duration-200 text-white font-semibold py-3 rounded-xl shadow-lg"
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>

          <p className="text-sm text-center text-gray-300">
            Forgot your password?{' '}
            <Link
              href="/forgot-password"
              className="text-yellow-400 hover:underline"
            >
              Click here
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
