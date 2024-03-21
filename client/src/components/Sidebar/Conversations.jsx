import useGetConversations from "@/hooks/useGetConversation";
import Conversation from "./Conversation";
import { Loader2 } from "lucide-react";

export default function Conversations() {
  const { conversations, loading } = useGetConversations();

  return (
    <div className="overflow-auto h-full py-5">
      {conversations?.map((conversation) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
        />
      ))}

      {loading ? <Loader2 className={loading ? "animate-spin" : ""} /> : ""}
    </div>
  );
}