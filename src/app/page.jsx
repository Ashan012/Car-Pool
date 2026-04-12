"use client";
import Image from "next/image";
import { Settings, LogOut, Heart, MessageSquare, Send } from "lucide-react";
import CreatePostModal from "@/components/CreatePostModal";
import { useState } from "react";

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* ================= MAIN LAYOUT ================= */}

      <section className="flex">
        {/* ================= SIDEBAR ================= */}

        <section className="w-1/4 h-[92vh] bg-white border-r flex flex-col justify-between p-6">
          {/* Profile */}

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <Image
                src="/man.jpeg"
                alt="user"
                width={40}
                height={40}
                className="rounded-full"
              />

              <div>
                <p className="font-semibold text-gray-800">Ashan Jameel</p>
                <p className="text-sm text-gray-500">Driver</p>
              </div>
            </div>
          </div>

          {/* Bottom Menu */}

          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-2 cursor-pointer hover:text-indigo-600">
              <Settings size={18} /> Settings
            </p>

            <p className="flex items-center gap-2 cursor-pointer hover:text-red-500">
              <LogOut size={18} /> Logout
            </p>
          </div>
        </section>

        {/* ================= MAIN FEED ================= */}

        <section className="w-3/4 min-h-screen p-10">
          {/* Create Post */}

          <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border">
            <Image
              src="/man.jpeg"
              alt="user"
              width={40}
              height={40}
              className="rounded-full"
            />

            <div
              onClick={() => setOpen(true)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-gray-500 cursor-pointer hover:bg-gray-50"
            >
              Share your ride plan...
            </div>

            {/* Send Icon */}
            <Send
              size={20}
              onClick={() => setOpen(true)}
              className="cursor-pointer text-indigo-600 hover:scale-110 transition"
            />
          </div>

          {/* Modal */}
          {open && (
            <CreatePostModal
              setOpen={setOpen}
              value={value}
              setValue={setValue}
            />
          )}

          {/* ================= POST ================= */}

          <div className="mt-10 bg-white p-6 rounded-lg shadow-sm border">
            {/* Post Header */}

            <div className="flex items-center gap-3">
              <Image
                src="/man.jpeg"
                alt="user"
                width={40}
                height={40}
                className="rounded-full"
              />

              <div>
                <h3 className="font-semibold text-gray-800">Kloudxel</h3>

                <p className="text-sm text-gray-500">3 hours ago</p>
              </div>
            </div>

            {/* Post Content */}

            <div className="mt-4 text-gray-700 leading-relaxed">
              <p>🚗 Route: Surjani → Shahrah e Faisal</p>

              <p>🕒 Time: 8:30 AM</p>

              <p>💺 Seats Available: 3</p>

              <p>💰 Price: 200 PKR</p>
            </div>

            {/* Post Reaction */}

            <div className="mt-5 flex gap-6 text-gray-600">
              <button className="flex items-center gap-2 hover:text-indigo-600">
                <Heart size={18} /> Like
              </button>

              <button className="flex items-center gap-2 hover:text-indigo-600">
                <MessageSquare size={18} /> Comment
              </button>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
