"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
});

export default function CreatePost() {
  const [value, setValue] = useState("");
  const [posts, setPosts] = useState([]);

  const handlePost = () => {
    if (!value.trim()) return;

    const newPost = {
      id: Date.now(),
      content: value,
      user: "Ashan",
      time: new Date().toLocaleString(),
    };

    setPosts([newPost, ...posts]);
    setValue("");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 space-y-6">
      {/* Create Post Box */}
      <div className="bg-white shadow-lg rounded-2xl p-4">
        {/* User */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src="https://i.pravatar.cc/40"
            className="w-10 h-10 rounded-full"
          />
          <h3 className="font-semibold text-gray-800">Ashan</h3>
        </div>

        {/* Editor Wrapper */}
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            placeholder="What's on your mind, Ashan?"
            className="custom-quill"
          />
        </div>

        {/* Button */}
        <button
          onClick={handlePost}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-xl font-medium"
        >
          Post
        </button>
      </div>

      {/* Feed */}
      {posts.map((post) => (
        <div key={post.id} className="bg-white shadow rounded-2xl p-4">
          <div className="flex items-center gap-3 mb-2">
            <img
              src="https://i.pravatar.cc/40"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h4 className="font-semibold">{post.user}</h4>
              <p className="text-sm text-gray-500">{post.time}</p>
            </div>
          </div>

          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      ))}
    </div>
  );
}
