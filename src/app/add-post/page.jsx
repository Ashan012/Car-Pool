"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import axios from "axios";
import { useAppContext } from "@/context/AppContext";

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
});

export default function CreatePost() {
  const { user } = useAppContext();
  const [value, setValue] = useState("");
  const [posts, setPosts] = useState([]);

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

    const newPost = {
      id: Date.now(),
      content: value,
      owner: user?.username || "Ashan",
      time: new Date().toLocaleString(),
    };

    setPosts([newPost, ...posts]);
    setValue("");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4 pb-4">
            <img
              src="https://i.pravatar.cc/40"
              className="h-12 w-12 rounded-full"
            />
            <div>
              <p className="text-lg font-semibold text-slate-900">
                {user?.username || "Ashan"}
              </p>
              <p className="text-sm text-slate-500">
                Share a new post with the community.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden">
            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              placeholder="What's on your mind?"
              className="custom-quill"
            />
          </div>

          <button
            onClick={handlePost}
            className="mt-4 w-full rounded-3xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Post
          </button>
        </div>

        <div className="mt-8 space-y-4">
          {posts.map((post) => (
            <article
              key={post.id}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-4 pb-4">
                <img
                  src="https://i.pravatar.cc/40"
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <p className="text-base font-semibold text-slate-900">
                    {post.owner}
                  </p>
                  <p className="text-sm text-slate-500">{post.time}</p>
                </div>
              </div>
              <div
                className="prose max-w-none text-slate-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
