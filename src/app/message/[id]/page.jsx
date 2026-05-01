"use client";
import { useEffect, useState } from "react";
import MessageLeftSec from "@/components/MessageLeftSec";
import MessageRightSec from "@/components/MessageRightSec";
import { useParams } from "next/navigation";
import { useAppContext } from "@/context/AppContext";
import axios from "axios";

function Message() {
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [showChatList, setShowChatList] = useState(true);
  const [draft, setDraft] = useState("");
  const [loading, setLoading] = useState(false);
  const [msgLoading, setMsgLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const { user } = useAppContext();

  const { id } = useParams();
  const handleSendMessage = async () => {
    try {
      if (!draft.trim()) return;

      setMessages([
        ...messages,
        {
          message: draft,
          senderId: user._id,
        },
      ]);

      const updatedChat = chats.map((item) =>
        item.participants[0]._id == activeChat.participants[0]._id
          ? { ...item, lastMessage: draft }
          : item,
      );
      setChats(updatedChat);
      const { data } = await axios.post("/api/send-message", {
        senderId: user._id,
        reciverId: activeChat.participants[0]._id,
        message: draft,
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setDraft("");
    }
  };

  const fetchConversation = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/get-chats");
      if (data) {
        console.log(data.conversation);
        setChats([...chats, ...data.conversation]);
      }
    } catch (error) {
      console.error(error?.message || "failed to fetch conversation");
    } finally {
      setLoading(false);
    }
  };
  const fetchChat = async (reciverId) => {
    console.log("reciverId===>", reciverId);
    try {
      setMsgLoading(true);
      const { data } = await axios.get(
        `/api/get-single-chat?reciverId=${reciverId}`,
      );

      if (data) {
        setMessages([...data.messages]);
      }
      console.log(data);
    } catch (error) {
      console.error(error?.message || "failed to get chats");
    } finally {
      setMsgLoading(false);
    }
  };

  useEffect(() => {
    fetchConversation();
  }, []);

  return loading ? (
    "loading...."
  ) : (
    <div className="h-full min-h-0 bg-slate-50 py-6">
      <div className="mx-auto flex h-full min-h-0 max-w-7xl flex-col gap-6 px-4 py-2 sm:px-6 lg:px-8 md:flex-row">
        <MessageLeftSec
          chats={chats}
          setActiveChat={setActiveChat}
          setShowChatList={setShowChatList}
          showChatList={showChatList}
          activeChat={activeChat}
          fetchChat={fetchChat}
        />

        <MessageRightSec
          msgLoading={msgLoading}
          handleSendMessage={handleSendMessage}
          messages={messages}
          setShowChatList={setShowChatList}
          showChatList={showChatList}
          activeChat={activeChat}
          draft={draft}
          setDraft={setDraft}
          user={user}
        />
      </div>
    </div>
  );
}

export default Message;
