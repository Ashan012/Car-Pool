"use client";
import { useState } from "react";
import { Search } from "lucide-react";

function MessageLeftSec({
  chats,
  setActiveChat,
  setShowChatList,
  showChatList,
  activeChat,
  fetchChat,
}) {
  return (
    <aside
      className={`w-full md:w-80 h-full rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 ${showChatList ? "flex" : "hidden md:flex"}`}
    >
      <div className="flex h-full min-h-0 flex-col">
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4 sm:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">
              Chats
            </p>
            <h1 className="mt-2 text-xl font-semibold text-slate-900">
              Messaging
            </h1>
          </div>
          <button className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-slate-500 transition hover:bg-slate-100">
            <Search size={18} />
          </button>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto px-4 py-3 sm:px-6 space-y-2">
          {chats.map((chat, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setActiveChat(chat);
                setShowChatList(false);
                fetchChat(chat.participants[0]._id);
              }}
              className={`w-full rounded-3xl px-4 py-4 text-left transition hover:bg-slate-50 ${activeChat?._id === chat._id ? "bg-indigo-50" : "bg-white"}`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-3xl text-sm font-semibold text-white ${activeChat?.id === chat.id ? "bg-indigo-600" : "bg-slate-400"}`}
                >
                  {"AK"}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="truncate text-sm font-semibold text-slate-900">
                      {chat.participants[0].username}
                    </h2>
                    <span className="text-xs text-slate-500">{"2m"}</span>
                  </div>
                  <p className="mt-1 truncate text-sm text-slate-600">
                    {chat.lastMessage}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default MessageLeftSec;
