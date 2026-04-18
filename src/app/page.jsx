"use client";
import Image from "next/image";
import { Settings, LogOut, Heart, MessageSquare, Send } from "lucide-react";
import CreatePostModal from "@/components/CreatePostModal";
import { useState } from "react";

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-[300px_1fr]">
          <aside className="space-y-6">
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

                <button
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                  <Send size={18} /> Create Post
                </button>
              </div>
            </div>

            {open && (
              <CreatePostModal
                setOpen={setOpen}
                value={value}
                setValue={setValue}
              />
            )}

            <section className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-slate-500">Latest ride post</p>
                  <h2 className="text-xl font-semibold text-slate-900">
                    Surjani to Shahrah e Faisal
                  </h2>
                </div>
                <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-indigo-600">
                  View all rides
                </button>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <article className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-slate-700">
                        Driver
                      </p>
                      <p className="mt-1 text-lg font-semibold text-slate-900">
                        Kloudxel
                      </p>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      3h ago
                    </span>
                  </div>
                  <div className="mt-5 space-y-2 text-slate-600">
                    <p>🚗 Route: Surjani → Shahrah e Faisal</p>
                    <p>🕒 Time: 8:30 AM</p>
                    <p>💺 Seats: 3</p>
                    <p className="text-lg font-semibold text-emerald-600">
                      200 PKR
                    </p>
                  </div>
                  <div className="mt-5 flex gap-3 text-slate-700">
                    <button className="rounded-2xl bg-white px-4 py-2 text-sm font-medium border border-slate-200 hover:bg-slate-100">
                      Like
                    </button>
                    <button className="rounded-2xl bg-white px-4 py-2 text-sm font-medium border border-slate-200 hover:bg-slate-100">
                      Comment
                    </button>
                  </div>
                </article>

                <article className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-slate-700">
                        Driver
                      </p>
                      <p className="mt-1 text-lg font-semibold text-slate-900">
                        Ashan Jameel
                      </p>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      1d ago
                    </span>
                  </div>
                  <div className="mt-5 space-y-2 text-slate-600">
                    <p>🏍 Vehicle: Bike</p>
                    <p>📍 Start: Surjani</p>
                    <p>📍 End: Malir</p>
                    <p className="text-lg font-semibold text-emerald-600">
                      150 PKR
                    </p>
                  </div>
                  <div className="mt-5 flex gap-3 text-slate-700">
                    <button className="rounded-2xl bg-white px-4 py-2 text-sm font-medium border border-slate-200 hover:bg-slate-100">
                      View Ride
                    </button>
                  </div>
                </article>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
