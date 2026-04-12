"use client";

import { Home, Route, PlusCircle, MessageCircle, User } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BottomNav() {
  const router = useRouter();

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t shadow-lg">
      <div className="flex justify-around items-center h-16 text-gray-600">
        <div
          onClick={() => router.push("/")}
          className="flex flex-col items-center text-xs cursor-pointer hover:text-indigo-600"
        >
          <Home size={22} />
          Home
        </div>

        <div
          onClick={() => router.push("/routes")}
          className="flex flex-col items-center text-xs cursor-pointer hover:text-indigo-600"
        >
          <Route size={22} />
          Routes
        </div>

        {/* Center Button */}

        <div
          onClick={() => router.push("/add-route")}
          className="bg-indigo-600 text-white p-3 rounded-full -mt-8 shadow-lg cursor-pointer"
        >
          <PlusCircle size={26} />
        </div>

        <div className="flex flex-col items-center text-xs cursor-pointer hover:text-indigo-600">
          <MessageCircle size={22} />
          Chat
        </div>

        <div className="flex flex-col items-center text-xs cursor-pointer hover:text-indigo-600">
          <User size={22} />
          Profile
        </div>
      </div>
    </div>
  );
}
