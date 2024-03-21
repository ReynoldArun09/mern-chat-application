import { useToast } from "@/components/ui/use-toast";
import { useMessageContext } from "@/context/ConversationContext";
import Axios from "../axios/Axios";
import { useState } from "react";

export default function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useMessageContext();
  const {toast} = useToast()
  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const response = await Axios.post(
        `message/send/${selectedConversation._id}`,
        { message },
        { withCredentials: true }
      );
      if (response.status === 201) {
        setMessages([...messages, response.data]);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "There was a problem with your request.",
        description: error.response?.data?.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    sendMessage,
  };
}
