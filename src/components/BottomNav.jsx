"use client";

import { Home, Route, PlusCircle, MessageCircle, User, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BottomNav() {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="relative z-10 w-full max-w-xs bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">
                  Profile
                </p>
                <p className="text-lg font-semibold text-slate-900">
                  Quick access
                </p>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-slate-100 p-2 text-slate-700 transition hover:bg-slate-200"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-6 rounded-3xl bg-slate-50 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                  <User size={20} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">View profile</p>
                  <p className="text-sm text-slate-500">
                    Open settings and profile actions
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-slate-700">
              <button
                onClick={() => {
                  router.push("/");
                  setDrawerOpen(false);
                }}
                className="flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-medium transition hover:border-indigo-300 hover:bg-slate-100"
              >
                <Home size={18} /> Home
              </button>
              <button
                onClick={() => {
                  router.push("/routes");
                  setDrawerOpen(false);
                }}
                className="flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-medium transition hover:border-indigo-300 hover:bg-slate-100"
              >
                <Route size={18} /> Routes
              </button>
              <button
                onClick={() => {
                  router.push("/message");
                  setDrawerOpen(false);
                }}
                className="flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-medium transition hover:border-indigo-300 hover:bg-slate-100"
              >
                <MessageCircle size={18} /> Chat
              </button>
              <button
                onClick={() => {
                  router.push("/add-route");
                  setDrawerOpen(false);
                }}
                className="flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-medium transition hover:border-indigo-300 hover:bg-slate-100"
              >
                <PlusCircle size={18} /> Post Ride
              </button>
            </div>
          </div>
        </div>
      )}

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
            onClick={() => setDrawerOpen(true)}
            className="flex flex-col items-center text-[11px] font-medium uppercase tracking-[0.08em] transition hover:text-indigo-600"
          >
            <User size={20} />
            Profile
          </button>
        </div>
      </div>
    </>
  );
}
