import { useSocketContext } from "@/context/SocketContext";
import { useEffect } from "react";
import notificationSound from "../assets/sounds/notification.mp3";
import { useMessageContext } from "@/context/ConversationContext";

export default function useListenMessage() {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useMessageContext();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
      sound.play();
      setMessages([...messages, newMessage]);
    });
    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages]);
}
