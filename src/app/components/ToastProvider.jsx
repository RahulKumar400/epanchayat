"use client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Reusable function to show toast
export const showToast = (type, message) => {
  switch (type) {
    case "success":
      toast.success(message, { position: "top-right", autoClose: 3000 });
      break;
    case "error":
      toast.error(message, { position: "top-right", autoClose: 3000 });
      break;
    case "info":
      toast.info(message, { position: "top-right", autoClose: 3000 });
      break;
    case "warning":
      toast.warn(message, { position: "top-right", autoClose: 3000 });
      break;
    default:
      toast(message, { position: "top-right", autoClose: 3000 });
  }
};

// Toast Provider Component
export default function ToastProvider() {
  return <ToastContainer newestOnTop />;
}
