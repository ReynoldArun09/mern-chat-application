/* eslint-disable react-hooks/exhaustive-deps */
import useGetMessages from "@/hooks/useGetMessage";
import { useEffect, useRef } from "react";
import Message from "./Message";
import useListenMessage from "@/hooks/useListenMessage";

export default function Messages() {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef(null);
  useListenMessage()

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 h-full overflow-auto">
      {!loading &&
        messages?.length > 0 &&
        messages?.map((message) => (
          <div key={message?._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {!loading && messages.length === 0 && (
        <p className="ml-2 mt-5">Send a message to start the conversation</p>
      )}
    </div>
  );
}
