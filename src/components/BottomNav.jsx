"use client";

import { Home, Route, PlusCircle, MessageCircle, User } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BottomNav() {
  const router = useRouter();

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full border-t border-slate-200 bg-white/95 shadow-xl backdrop-blur">
      <div className="flex items-center justify-around h-20 px-3 text-slate-600">
        <button
          onClick={() => router.push("/")}
          className="flex flex-col items-center text-[11px] font-medium uppercase tracking-[0.08em] transition hover:text-indigo-600"
        >
          <Home size={20} />
          Home
        </button>

        <button
          onClick={() => router.push("/routes")}
          className="flex flex-col items-center text-[11px] font-medium uppercase tracking-[0.08em] transition hover:text-indigo-600"
        >
          <Route size={20} />
          Routes
        </button>

        <button
          onClick={() => router.push("/add-route")}
          className="flex items-center justify-center rounded-full bg-indigo-600 p-3 text-white shadow-xl transition hover:bg-indigo-700"
        >
          <PlusCircle size={24} />
        </button>

        <button
          onClick={() => router.push("/message")}
          className="flex flex-col items-center text-[11px] font-medium uppercase tracking-[0.08em] transition hover:text-indigo-600"
        >
          <MessageCircle size={20} />
          Chat
        </button>

        <button
          onClick={() => router.push("/sign-in")}
          className="flex flex-col items-center text-[11px] font-medium uppercase tracking-[0.08em] transition hover:text-indigo-600"
        >
          <User size={20} />
          Profile
        </button>
      </div>
    </div>
  );
}
