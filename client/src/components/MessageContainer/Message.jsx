/* eslint-disable react/prop-types */
import { extractTime } from "@/lib/helper";
import { useAuthContext } from "@/context/AuthContext";
import { useMessageContext } from "@/context/ConversationContext";

export default function Message({ message }) {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useMessageContext();
  const fromMe = message.senderId === authUser?._id;
  const formattedTime = extractTime(message.createdAt);
  const profilePic = fromMe
    ? authUser?.profilePic
    : selectedConversation?.profilePic;
  const chatClass = fromMe ? "items-start" : "items-end";
  const bubbleBgColor = fromMe
    ? "bg-primary rounded-xl break-words px-5 py-2 text-sm ml-auto text-white"
    : "bg-muted w-fit px-5 text-white rounded-xl py-2";
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`flex ${chatClass} flex-col pl-2`}>
      <div
        className={`flex gap-3 space-y-2 items-center ${
          fromMe ? "" : "flex-row-reverse"
        }`}
      >
        <div className="w-10 rounded-full">
          <img alt="img" src={profilePic} />
        </div>
        <div className={`${bubbleBgColor} ${shakeClass} break-normal`}>
          {message.message}
        </div>
      </div>

      <div className="opacity-50 text-xs py-1 pb-3 pl-2">{formattedTime}</div>
    </div>
  );
}
