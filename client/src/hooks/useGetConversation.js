import { useEffect, useState } from "react";
import Axios from '../axios/Axios'
import { useToast } from "@/components/ui/use-toast";

export default function useGetConversations() {
  const [loading, setLoading] = useState();
  const [conversations, setConversations] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const response = await Axios.get('user', {
          withCredentials: true,
        });
        setConversations(response.data);
      } catch (error) {
        console.log(error);
        toast({
          variant: "destructive",
          title: "There was a problem with your request.",
          description: error.response?.data?.message,
        });
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return {
    loading,
    conversations,
  };
}
