// 'use client';
// import Image from 'next/image';
// import { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { useRouter } from 'next/navigation';

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const router = useRouter();

//   return (
//     <header className="bg-white shadow-md fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        
//         {/* ✅ Left: Logo Image */}
//         <div
//           className="flex items-center gap-3 cursor-pointer"
//           onClick={() => router.push('/')}
//         >
//           {/* Replace 'logo.png' with your actual image name */}
//           <Image
//             src="/jayte.jpg"
//             alt="e-Panchayat Logo"
//             width={60}
//             height={60}
//             className="rounded-md"
//           />
//           <span className="text-green-700 font-bold text-lg md:text-xl">
//             e-Panchayat Digital Library
//           </span>
//         </div>

//         {/* ✅ Desktop Menu */}
//         <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
//           <div className="flex items-center gap-2">
//             <button
//               className="bg-green-600 hover:bg-green-700 text-white px-5 py-2
//               rounded-full shadow-md transition cursor-pointer"
//               onClick={() => router.push('/login')}
//             >
//               Login
//             </button>
//             <button
//               className="bg-white border border-green-600 text-green-600 px-5 py-2
//               rounded-full shadow-md hover:bg-green-600 hover:text-white transition cursor-pointer"
//               onClick={() => router.push('/register')}
//             >
//               Register
//             </button>
//           </div>
//         </nav>

//         {/* ✅ Mobile Menu Button */}
//         <button
//           className="md:hidden text-2xl text-green-700"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* ✅ Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-md absolute w-full left-0 top-16 px-6 py-4 flex flex-col gap-4 text-gray-700 font-medium">
//           <div className="flex flex-col gap-3">
//             <button
//               className="bg-green-600 hover:bg-green-700 text-white px-5 py-2
//               rounded-full shadow-md transition cursor-pointer"
//               onClick={() => router.push('/login')}
//             >
//               Login
//             </button>
//             <button
//               className="bg-white border border-green-600 text-green-600 px-5 py-2
//               rounded-full shadow-md hover:bg-green-600 hover:text-white transition cursor-pointer"
//               onClick={() => router.push('/register')}
//             >
//               Register
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }










// 'use client';
// import Image from 'next/image';
// import { useState, useEffect } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { useRouter } from 'next/navigation';

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const router = useRouter();

//   // ✅ Inject Google Translate Script
//   useEffect(() => {
//     const addGoogleTranslateScript = () => {
//       if (!document.getElementById("google-translate-script")) {
//         const script = document.createElement("script");
//         script.id = "google-translate-script";
//         script.src =
//           "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//         document.body.appendChild(script);
//       }
//     };

//     window.googleTranslateElementInit = () => {
//       new window.google.translate.TranslateElement(
//         {
//           pageLanguage: "en",
//           includedLanguages: "en,hi", 
//           layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
//         },
//         "google_translate_element"
//       );
//     };

//     addGoogleTranslateScript();
//   }, []);

//   return (
//     <header className="bg-white shadow-md fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
//         {/* ✅ Logo */}
//         <div
//           className="flex items-center gap-3 cursor-pointer"
//           onClick={() => router.push('/')}
//         >
//           <Image
//             src="/jayte.jpg"
//             alt="e-Panchayat Logo"
//             width={60}
//             height={60}
//             className="rounded-md"
//           />
//           <span className="text-green-700 font-bold text-lg md:text-xl">
//             e-Panchayat Digital Library
//           </span>
//         </div>

//         {/* ✅ Desktop Menu */}
//         <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
//           <button
//             className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full"
//             onClick={() => router.push('/login')}
//           >
//             Login
//           </button>
//           <button
//             className="border border-green-600 text-green-600 px-5 py-2 rounded-full hover:bg-green-600 hover:text-white"
//             onClick={() => router.push('/register')}
//           >
//             Register
//           </button>

//           {/* ✅ Auto Translate Dropdown */}
//           <div id="google_translate_element" className="ml-4"></div>
//         </nav>

//         {/* ✅ Mobile Button */}
//         <button
//           className="md:hidden text-2xl text-green-700"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* ✅ Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-md absolute w-full left-0 top-16 px-6 py-4 flex flex-col gap-4 text-gray-700 font-medium">
//           <button
//             className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full"
//             onClick={() => router.push('/login')}
//           >
//             Login
//           </button>
//           <button
//             className="border border-green-600 text-green-600 px-5 py-2 rounded-full hover:bg-green-600 hover:text-white"
//             onClick={() => router.push('/register')}
//           >
//             Register
//           </button>
//           <div id="google_translate_element" className="mt-2"></div>
//         </div>
//       )}
//     </header>
//   );
// }









'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // ✅ Inject Google Translate Script
  useEffect(() => {
  const addGoogleTranslateScript = () => {
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    }
  };

  window.googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,hi",
        layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
      },
      "google_translate_element"
    );
  };

  addGoogleTranslateScript();

  // ✅ Custom style for Google Translate
  const style = document.createElement("style");
  style.innerHTML = `
    /* Hide "Powered by" text and logo */
    .goog-logo-link { display: none !important; }
    .goog-te-gadget { color: black !important; }
    .goog-te-gadget span { display: none !important; }
    .goog-te-banner-frame.skiptranslate,
    .goog-te-gadget-simple img { display: none !important; }

    /* ✅ Style dropdown text color */
    .goog-te-gadget-simple {
      background-color: #ffffff !important;
      border: 1px solid #d1d5db !important; /* light gray border */
      color: #000000 !important; /* black text */
      border-radius: 6px !important;
      font-size: 14px !important;
      padding: 4px 8px !important;
      cursor: pointer;
    }

    .goog-te-gadget-simple span {
      color: #000000 !important; /* force black text */
    }

    /* Hover effect */
    .goog-te-gadget-simple:hover {
      background-color: #f3f4f6 !important; /* light gray hover */
    }
  `;
  document.head.appendChild(style);
}, []);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* ✅ Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => router.push('/')}
        >
          <Image
            src="/jayte.jpg"
            alt="e-Panchayat Logo"
            width={60}
            height={60}
            className="rounded-md"
          />
          <span className="text-green-700 font-bold text-lg md:text-xl">
            e-Panchayat Digital Library
          </span>
        </div>

        {/* ✅ Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full"
            onClick={() => router.push('/login')}
          >
            Login
          </button>
          <button
            className="border border-green-600 text-green-600 px-5 py-2 rounded-full hover:bg-green-600 hover:text-white"
            onClick={() => router.push('/register')}
          >
            Register
          </button>

          {/* ✅ Language Switcher Only */}
          <div id="google_translate_element" className="ml-4"></div>
        </nav>

        {/* ✅ Mobile Button */}
        <button
          className="md:hidden text-2xl text-green-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute w-full left-0 top-16 px-6 py-4 flex flex-col gap-4 text-gray-700 font-medium">
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full"
            onClick={() => router.push('/login')}
          >
            Login
          </button>
          <button
            className="border border-green-600 text-green-600 px-5 py-2 rounded-full hover:bg-green-600 hover:text-white"
            onClick={() => router.push('/register')}
          >
            Register
          </button>

          {/* ✅ Language Switcher Only */}
          <div id="google_translate_element" className="mt-2 text-gray-800"></div>
        </div>
      )}
    </header>
  );
}
