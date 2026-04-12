"use client";
import React, { useState } from "react";
import {
  Home,
  Route,
  MessageCircle,
  Bell,
  LogOut,
  Plus,
  Menu,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-white border-b">
      {/* Top Navbar */}

      <div className="h-16 flex justify-between items-center px-6">
        {/* Logo */}

        <div
          className="font-bold text-xl text-indigo-600 cursor-pointer"
          onClick={() => router.push("/")}
        >
          CarPool
        </div>

        {/* Desktop Menu */}

        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li
            className="flex items-center gap-2 cursor-pointer hover:text-indigo-600"
            onClick={() => router.push("/")}
          >
            <Home size={18} /> Home
          </li>

          <li
            className="flex items-center gap-2 cursor-pointer hover:text-indigo-600"
            onClick={() => router.push("/routes")}
          >
            <Route size={18} /> Routes
          </li>

          <li className="flex items-center gap-2 cursor-pointer hover:text-indigo-600">
            <MessageCircle size={18} /> Messages
          </li>

          <li className="flex items-center gap-2 cursor-pointer hover:text-indigo-600">
            <Bell size={18} /> Notifications
          </li>
        </ul>

        {/* Right Side */}

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => router.push("/add-route")}
            className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-1.5 rounded-lg hover:bg-indigo-700"
          >
            <Plus size={16} />
            Post Ride
          </button>

          <div className="flex items-center gap-2 cursor-pointer hover:text-red-500">
            <LogOut size={18} />
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
