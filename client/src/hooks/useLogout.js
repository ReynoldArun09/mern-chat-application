import { useToast } from "@/components/ui/use-toast";
import { useAuthContext } from "@/context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../axios/Axios";

export default function useLogout() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setAuthUser } = useAuthContext();
  const { toast } = useToast();
  const LogoutUser = async () => {
    setLoading(true);
    try {
      const response = await Axios.post(
        `auth/logout`
      );
      if (response.status === 200) {
        localStorage.removeItem("chat-app");
        setAuthUser(null);
        navigate("/login");
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
    LogoutUser,
  };
}
