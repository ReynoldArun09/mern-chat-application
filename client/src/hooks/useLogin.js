import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import Axios from "../axios/Axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/context/AuthContext";

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { setAuthUser } = useAuthContext();

  const LoginUser = async ({username, password}) => {
    setLoading(true);
    try {
      const response = await Axios.post(
        'auth/login',
        {
          username,
          password,
        },
        { withCredentials: true }
      );
      if (response.status === 200) {
        toast({
          variant: "default",
          title: "You have successfully Logged In.",
        });
        localStorage.setItem("chat-app", JSON.stringify(response.data));
        setAuthUser(response.data);
        navigate("/");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Invalid Credentials. Try Again.",
        description: error.response?.data?.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    LoginUser,
  };
}
