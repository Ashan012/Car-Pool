"use client";
import { useState } from "react";
import { ChevronLeft, Search, Clock, MessageCircle } from "lucide-react";

const chats = [
  {
    id: 1,
    name: "Ali Khan",
    lastMsg: "Bro kal milte hain",
    time: "2m",
    avatar: "AK",
  },
  {
    id: 2,
    name: "Sara Ahmed",
    lastMsg: "Project done?",
    time: "10m",
    avatar: "SA",
  },
  { id: 3, name: "Usman", lastMsg: "Ok 👍", time: "1h", avatar: "U" },
];

const messages = [
  { id: 1, text: "Hello 👋", sender: "other" },
  { id: 2, text: "Hi, how are you?", sender: "self" },
  { id: 3, text: "I'm good, working on project", sender: "other" },
];

function Message() {
  const [activeChat, setActiveChat] = useState(chats[0]);
  const [showChatList, setShowChatList] = useState(true);
  const [draft, setDraft] = useState("");

  const handleSendMessage = () => {
    if (!draft.trim()) return;
    setDraft("");
  };

  return (
    <div className="h-full min-h-0 bg-slate-50 py-6">
      <div className="mx-auto flex h-full min-h-0 max-w-7xl flex-col gap-6 px-4 py-2 sm:px-6 lg:px-8 md:flex-row">
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
              {chats.map((chat) => (
                <button
                  key={chat.id}
                  type="button"
                  onClick={() => {
                    setActiveChat(chat);
                    setShowChatList(false);
                  }}
                  className={`w-full rounded-3xl px-4 py-4 text-left transition hover:bg-slate-50 ${activeChat.id === chat.id ? "bg-indigo-50" : "bg-white"}`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-3xl text-sm font-semibold text-white ${activeChat.id === chat.id ? "bg-indigo-600" : "bg-slate-400"}`}
                    >
                      {chat.avatar}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h2 className="truncate text-sm font-semibold text-slate-900">
                          {chat.name}
                        </h2>
                        <span className="text-xs text-slate-500">
                          {chat.time}
                        </span>
                      </div>
                      <p className="mt-1 truncate text-sm text-slate-600">
                        {chat.lastMsg}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </aside>

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
                  {activeChat.name}
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
            {messages.map((messageItem) => (
              <div
                key={messageItem.id}
                className={`flex ${messageItem.sender === "self" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-3xl px-4 py-3 text-sm leading-6 ${messageItem.sender === "self" ? "bg-indigo-600 text-white rounded-br-none" : "bg-slate-100 text-slate-900 rounded-bl-none"}`}
                >
                  {messageItem.text}
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
      </div>
    </div>
  );
}

export default Message;
