import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLogin from "@/hooks/useLogin";

export default function Loginpage() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
      username: "",
      password: "",
    });
  
    const {loading, LoginUser} = useLogin()
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await LoginUser(inputs)
    };
  return (
    <section className="flex h-screen">
     <Card className="w-[500px] px-5 py-2 m-auto">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>
          By continuing, you agree to our User Agreement and acknowledge that
          you understand the Privacy Policy.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Input
                placeholder="Enter your user name..."
                type="text"
                value={inputs.username}
                onChange={(e) =>
                  setInputs({ ...inputs, username: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Input
                type="password"
                placeholder="Enter your password..."
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Button className="w-full" type="submit">
                {loading ? "Loading..." : "Sign In"}
              </Button>
              <Button
                variant={"link"}
                type="button"
                onClick={() => navigate("/register")}
              >
                Are you new? Sign up{" "}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
   </section>
  )
}
