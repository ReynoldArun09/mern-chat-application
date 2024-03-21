import { useEffect, useState } from "react";
import Axios from '../axios/Axios'
import { useMessageContext } from "@/context/ConversationContext";
import { useToast } from "@/components/ui/use-toast";

export default function useGetMessages() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useMessageContext();
  const {toast} = useToast()
  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const response = await Axios.get(
          `message/${selectedConversation?._id}`,
          { withCredentials: true }
        );
        if (response.status === 200) {
          setMessages(response.data);
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
    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return {
    loading,
    messages,
  };
}
