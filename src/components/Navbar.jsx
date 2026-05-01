"use client";
import {
  Home,
  Route,
  MessageCircle,
  Bell,
  LogOut,
  Plus,
  LogIn,
} from "lucide-react";
import { useAppContext } from "@/context/AppContext";

function Navbar() {
  const { user, handleLogout, router } = useAppContext();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div
          className="cursor-pointer text-xl font-semibold tracking-tight text-slate-900"
          onClick={() => router.push("/")}
        >
          CarPool
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 hover:text-indigo-600 transition"
          >
            <Home size={18} /> Home
          </button>
          <button
            onClick={() => router.push("/routes")}
            className="flex items-center gap-2 hover:text-indigo-600 transition"
          >
            <Route size={18} /> Routes
          </button>
          <button
            onClick={() => router.push("/message/all-message")}
            className="flex items-center gap-2 hover:text-indigo-600 transition"
          >
            <MessageCircle size={18} /> Messages
          </button>
          <button className="flex items-center gap-2 hover:text-indigo-600 transition">
            <Bell size={18} /> Notifications
          </button>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => router.push("/add-route")}
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            <Plus size={16} />
            Post Ride
          </button>

          <button
            onClick={user ? handleLogout : () => router.push("/sign-in")}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-indigo-600"
          >
            {user ? <LogOut size={18} /> : <LogIn size={18} />}
            {user ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
