"use client";

import { useAppContext } from "@/context/AppContext";
import axios from "axios";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
});

export default function CreatePostModal({ setOpen, value, setValue }) {
  const { user } = useAppContext();

  const handlePost = async () => {
    if (!value.trim()) return;

    try {
      await axios.post("/api/add-post", {
        content: value,
        owner: user?._id,
      });
    } catch (error) {
      console.error(error);
    }

    setOpen(false);
    setValue("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 px-4">
      <div className="w-full max-w-2xl overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-indigo-600">
              Create post
            </p>
            <h2 className="mt-2 text-xl font-semibold text-slate-900">
              Share your latest ride
            </h2>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="rounded-full border border-slate-200 px-3 py-2 text-slate-600 transition hover:bg-slate-100"
          >
            ✕
          </button>
        </div>

        <div className="px-6 py-5">
          <div className="mb-5 flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/40"
              className="h-12 w-12 rounded-full"
            />
            <div>
              <p className="font-semibold text-slate-900">
                {user?.username || "Ashan"}
              </p>
              <p className="text-sm text-slate-500">What's your ride plan?</p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden">
            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              placeholder="Tell your community about the route..."
              className="custom-quill"
            />
          </div>

          <button
            onClick={handlePost}
            className="mt-6 w-full rounded-3xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
