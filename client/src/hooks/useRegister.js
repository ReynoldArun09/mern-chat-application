import { useToast } from "@/components/ui/use-toast";
import { useAuthContext } from "@/context/AuthContext";

import Axios from "../axios/Axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useRegister() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setAuthUser } = useAuthContext();
  const { toast } = useToast();

  const RegisterUser = async (inputs) => {
    setLoading(true);
    try {
      const response = await Axios.post(
        `auth/register`,
        {
          username: inputs.username,
          fullName: inputs.fullName,
          gender: inputs.gender,
          password: inputs.password,
          confirmPassword: inputs.confirmPassword,
        },
        { withCredentials: true }
      );
      if (response.status === 201) {
        toast({
          variant: "default",
          title: "You have successfully Created your Account.",
        });
        localStorage.setItem("chat-app", JSON.stringify(response.data));
        setAuthUser(response.data);
        navigate("/");
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
    RegisterUser,
  };
}
