'use client';
import { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminNavbar from './AdminNavbar';

const dummyComplaints = [
  {
    id: '1',
    name: 'Mr. Mahipal ',
    mobile: '9756658024',
    subject: 'पानी की आपूर्ति समस्या',
    description:
      'रविदास नगर क्षेत्र में पिछले 3 दिनों से पानी की आपूर्ति अनियमित है। निवासियों को गंभीर समस्याओं का सामना करना पड़ रहा है। कृपया इसे जल्द से जल्द हल करें।',
    zone: 'Ravidas Nagar',
    address: 'वार्ड नंबर 1, रविदास नगर के पास',
  },
  {
    id: '2',
    name: 'Mrs. Shayra',
    mobile: '9149355150',
    subject: 'नाले की जाम समस्या',
    description:
      'गांधी नगर कॉलोनी में नाले जमे हुए हैं और पानी भरने के कारण मच्छर पैदा हो रहे हैं। कृपया नाले की सफाई तुरंत करें।',
    zone: 'Brahmapuri',
    address: 'वार्ड नंबर 19, ब्रह्मपुरी के पास',
  },
  {
    id: '3',
    name: 'Mr. Imran',
    mobile: '9045869945',
    subject: 'सड़क की लाइट काम नहीं कर रही',
    description:
      'स्टेशन रोड पर सरकारी स्कूल के सामने की स्ट्रीटलाइट एक सप्ताह से काम नहीं कर रही है। यह रात में सुरक्षा और असुविधा का कारण बन रही है। कृपया इसे तुरंत ठीक करें।',
    zone: 'Hazrat Nagar',
    address: 'वार्ड नंबर 11, हज़रत नगर के पास',
  },
  {
    id: '4',
    name: 'Mr. Dinesh ',
    mobile: '9410433043',
    subject: 'कचरा संग्रहण समस्या',
    description:
      'वार्ड नंबर 5, शाहिद नगर के पास पिछले 4 दिनों से कचरा नहीं उठाया गया है। इससे बदबू और स्वास्थ्य संबंधी खतरे पैदा हो रहे हैं। कृपया तुरंत कचरा उठाने की व्यवस्था करें।',
    zone: 'Shahid Nagar',
    address: 'वार्ड नंबर 5, शाहिद नगर के पास',
  },
];

export default function ComplaintsList() {
  const [complaints, setComplaints] = useState(dummyComplaints);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <AdminNavbar username="Admin User" />
        <div className="p-6 bg-gray-100 min-h-screen">
          <h1 className="text-2xl font-bold text-green-700 mb-6">
            Complaints List
          </h1>

          <div className="bg-white p-4 rounded-xl shadow overflow-x-auto">
            <table className="min-w-full border">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">Mobile</th>
                  {/* <th className="py-2 px-4 text-left">Email</th> */}
                  <th className="py-2 px-4 text-left">Subject</th>
                  <th className="py-2 px-4 text-left">Description</th>
                  <th className="py-2 px-4 text-left">Zone</th>
                  <th className="py-2 px-4 text-left">Address</th>
                  <th className="py-2 px-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {complaints.map((complaint) => (
                  <tr
                    key={complaint.id}
                    className="border-b hover:bg-gray-50 align-top"
                  >
                    <td className="py-2 px-4">{complaint.name}</td>
                    <td className="py-2 px-4">{complaint.mobile}</td>
                    {/* <td className="py-2 px-4">{complaint.email}</td> */}
                    <td className="py-2 px-4">{complaint.subject}</td>
                    <td className="py-2 px-4 max-w-xs truncate">
                      {complaint.description}
                    </td>
                    <td className="py-2 px-4">{complaint.zone}</td>
                    <td className="py-2 px-4">{complaint.address}</td>
                    <td className="py-2 px-4 flex gap-2">
                      <button className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                        View
                      </button>
                      <button className="px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700">
                        Resolve
                      </button>
                    </td>
                  </tr>
                ))}
                {complaints.length === 0 && (
                  <tr>
                    <td colSpan={8} className="py-4 text-center text-gray-500">
                      No complaints found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
