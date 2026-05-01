"use client";
import { useState } from "react";
import { ChevronLeft, Clock, MessageCircle } from "lucide-react";

function MessageRightSec({
  messages,
  showChatList,
  setShowChatList,
  handleSendMessage,
  activeChat,
  draft,
  setDraft,
  user,
  msgLoading,
}) {
  if (!activeChat) {
    return (
      <section
        className={`flex h-full min-h-0 flex-1 flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-sm ${showChatList ? "hidden md:flex" : "flex"}`}
      >
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <MessageCircle size={48} className="text-slate-300" />
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              No chat selected
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Select a chat to start messaging
            </p>
          </div>
        </div>
      </section>
    );
  }

  return msgLoading ? (
    "loading...."
  ) : (
    <section
      className={`flex h-full min-h-0 flex-1 flex-col rounded-3xl border border-slate-200 bg-white shadow-sm ${showChatList ? "hidden md:flex" : "flex"}`}
    >
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-slate-600 transition hover:bg-slate-100"
            onClick={() => setShowChatList(true)}
          >
            <ChevronLeft size={20} />
          </button>
          <div>
            <p className="text-sm font-semibold text-slate-900">
              {activeChat.participants[0].username}
            </p>
            <p className="text-xs text-slate-500">Active now • Online</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-slate-500">
          <Clock size={18} />
          <MessageCircle size={18} />
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto px-4 py-4 sm:px-6 sm:py-6 space-y-4">
        {messages.map((messageItem, index) => (
          <div
            key={index}
            className={`flex ${messageItem.senderId == user._id ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-3xl px-4 py-3 text-sm leading-6 ${messageItem.senderId == user._id ? "bg-indigo-600 text-white rounded-br-none" : "bg-slate-100 text-slate-900 rounded-bl-none"}`}
            >
              {messageItem.message}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-200 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Write a message..."
            className="flex-1 rounded-full border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
          <button
            type="button"
            onClick={handleSendMessage}
            className="rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
}

export default MessageRightSec;
