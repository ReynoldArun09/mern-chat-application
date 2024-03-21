import { useMessageContext } from "@/context/ConversationContext";
import { useEffect } from "react";
import NoChatSelected from "../shared/NoChatSelected";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { Separator } from "../ui/separator";

export default function MessageContainer() {
  const { selectedConversation, setSelectedConversation } = useMessageContext();

  useEffect(() => {
    return () => {
      setSelectedConversation(null);
    };
  }, []);

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="px-4 py-2 mb-2">
            <span className="label-text">To :</span>{" "}
            <span className="font-bold capitalize">
              {selectedConversation.fullName}
            </span>
          </div>
          <Separator />
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}
