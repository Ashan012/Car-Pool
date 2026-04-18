"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import parse from "html-react-parser";

function PostSection() {
  const [posts, setPosts] = useState([]);
  const fetchPost = async () => {
    try {
      const { data } = await axios.get("/api/get-posts");
      console.log("post data===>", data.posts.content);
      setPosts(data.posts);
    } catch (error) {
      console.error(error);
      toast.error(error?.message);
    }
  };
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <section className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"></div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {posts.map((content, index) => (
          <article
            className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
            key={index}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="mt-1 text-lg font-semibold text-slate-900">
                  {content.owner.username}
                </p>
              </div>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                3h ago
              </span>
            </div>
            <div className="mt-5 space-y-2 text-slate-600">
              {parse(content.content)}
              {/* dangerouslySetInnerHTML={{ __html: content.content }} */}
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
        ))}
      </div>
    </section>
  );
}

export default PostSection;

// <article className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
//             <div className="flex items-center justify-between gap-3">
//               <div>
//                 <p className="mt-1 text-lg font-semibold text-slate-900">
//                   Kloudxel
//                 </p>
//               </div>
//               <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
//                 3h ago
//               </span>
//             </div>
//             <div className="mt-5 space-y-2 text-slate-600">
//               <p>🚗 Route: Surjani → Shahrah e Faisal</p>
//               <p>🕒 Time: 8:30 AM</p>
//               <p>💺 Seats: 3</p>
//               <p className="text-lg font-semibold text-emerald-600">200 PKR</p>
//             </div>
//             <div className="mt-5 flex gap-3 text-slate-700">
//               <button className="rounded-2xl bg-white px-4 py-2 text-sm font-medium border border-slate-200 hover:bg-slate-100">
//                 Like
//               </button>
//               <button className="rounded-2xl bg-white px-4 py-2 text-sm font-medium border border-slate-200 hover:bg-slate-100">
//                 Comment
//               </button>
//             </div>
//           </article>
