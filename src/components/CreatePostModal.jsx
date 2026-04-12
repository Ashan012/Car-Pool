"use client";

import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
});

export default function CreatePostModal({ setOpen, value, setValue }) {
  const handlePost = () => {
    if (!value.trim()) return;

    console.log(value); // yahan DB ya state mein save karna
    setOpen(false);
    setValue("");
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      {/* Modal Box */}
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-semibold text-lg">Create Post</h2>
          <button onClick={() => setOpen(false)}>✖</button>
        </div>

        {/* User */}
        <div className="flex items-center gap-3 p-4">
          <img
            src="https://i.pravatar.cc/40"
            className="w-10 h-10 rounded-full"
          />
          <h3 className="font-medium">Ashan</h3>
        </div>

        {/* Editor */}
        <div className="px-4 pb-2">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            placeholder="What's on your mind?"
            className="custom-quill"
          />
        </div>

        {/* Button */}
        <div className="p-4">
          <button
            onClick={handlePost}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
