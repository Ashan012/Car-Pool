"use client";
import Image from "next/image";
import { Settings, LogOut, Send, Menu } from "lucide-react";
import CreatePostModal from "@/components/CreatePostModal";
import { useState } from "react";
import PostSection from "@/components/PostSection";

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-[300px_1fr]">
          {sidebarOpen && (
            <div className="fixed inset-0 z-50 flex sm:hidden">
              <div
                className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
                onClick={() => setSidebarOpen(false)}
              />
              <aside className="relative z-10 w-full max-w-xs overflow-y-auto bg-white p-6 shadow-2xl">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <Image
                      src="/man.jpeg"
                      alt="user"
                      width={56}
                      height={56}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-lg font-semibold text-slate-900">
                        Ashan Jameel
                      </p>
                      <p className="text-sm text-slate-500">Driver</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
                  >
                    Close
                  </button>
                </div>

                <div className="mt-6 space-y-3 text-slate-600">
                  <button className="flex w-full items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-100">
                    <Settings size={18} /> Settings
                  </button>
                  <button className="flex w-full items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-100">
                    <LogOut size={18} /> Logout
                  </button>
                </div>

                <div className="mt-6 rounded-3xl bg-slate-50 p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-indigo-600">
                    Quick stats
                  </p>
                  <div className="mt-4 space-y-4">
                    <div className="rounded-3xl bg-white p-4 shadow-sm">
                      <p className="text-sm text-slate-500">Rides shared</p>
                      <p className="mt-2 text-2xl font-semibold text-slate-900">
                        14
                      </p>
                    </div>
                    <div className="rounded-3xl bg-white p-4 shadow-sm">
                      <p className="text-sm text-slate-500">
                        Passengers helped
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-slate-900">
                        42
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          )}

          <aside className="hidden xl:block space-y-6">
            <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <Image
                  src="/man.jpeg"
                  alt="user"
                  width={56}
                  height={56}
                  className="rounded-full"
                />
                <div>
                  <p className="text-lg font-semibold text-slate-900">
                    Ashan Jameel
                  </p>
                  <p className="text-sm text-slate-500">Driver</p>
                </div>
              </div>

              <div className="mt-6 space-y-3 text-slate-600">
                <button className="flex w-full items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-100">
                  <Settings size={18} /> Settings
                </button>
                <button className="flex w-full items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-100">
                  <LogOut size={18} /> Logout
                </button>
              </div>
            </div>

            <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.24em] text-indigo-600">
                Quick stats
              </p>
              <div className="mt-4 space-y-4">
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Rides shared</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">
                    14
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Passengers helped</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">
                    42
                  </p>
                </div>
              </div>
            </div>
          </aside>

          <main className="space-y-6">
            <div className="rounded-3xl bg-white border border-slate-200 p-4 shadow-sm sm:hidden">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">
                    Quick access
                  </p>
                  <p className="text-lg font-semibold text-slate-900">
                    Ride dashboard
                  </p>
                </div>
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  <Menu size={18} /> Menu
                </button>
              </div>
            </div>

            <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">
                    Create ride
                  </p>
                  <h1 className="mt-2 text-2xl font-semibold text-slate-900">
                    Share your ride plan
                  </h1>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Publish a ride and let others join your trip easily.
                  </p>
                </div>

                <div>
                  <button
                    onClick={() => setOpen(true)}
                    className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                  >
                    <Send size={18} /> Create Post
                  </button>
                </div>
              </div>
            </div>

            {open && (
              <CreatePostModal
                setOpen={setOpen}
                value={value}
                setValue={setValue}
              />
            )}

            <PostSection />
          </main>
        </div>
      </div>
    </div>
  );
}
