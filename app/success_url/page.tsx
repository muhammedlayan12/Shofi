import { CheckCircleIcon } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function PaymentSuccess() {
  return (
    <div>
        <Navbar></Navbar>
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-sm">
        <CheckCircleIcon className="text-green-500 w-20 h-20 mx-auto" />
        <h2 className="text-2xl font-bold text-gray-800 mt-4">Order Placed Successfully!</h2>
        <p className="text-gray-600 mt-2">Thank you for your purchase.</p>
        <Link
          href="/"
          className="mt-6 inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
        <Footer></Footer>
    </div>
  );
}
