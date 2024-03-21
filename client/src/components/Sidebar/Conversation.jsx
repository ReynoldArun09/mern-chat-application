/* eslint-disable react/prop-types */
import { useMessageContext } from "@/context/ConversationContext";
import { useSocketContext } from "@/context/SocketContext";

export default function Conversation({ conversation }) {
  const { selectedConversation, setSelectedConversation } = useMessageContext();
  const isSelected = selectedConversation?._id === conversation?._id;
  const { onlineUser } = useSocketContext();
  const isOnline = onlineUser.includes(conversation._id);
  return (
    <>
      <div
        className={`flex gap-5 items-center px-2 py-2 cursor-pointer rounded-xl hover:bg-muted ${
          isSelected ? "bg-muted" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div>
          <div className="w-12 rounded-full relative">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-3 items-center justify-between">
            <p>{conversation.fullName}</p>

            {isOnline ? (
              <>
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </>
            ) : (
              <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-500"></span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
