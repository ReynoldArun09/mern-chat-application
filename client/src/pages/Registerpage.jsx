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
import useRegister from "@/hooks/useRegister";
import GenderCheckBox from "@/components/shared/GenderCheckBox";

export default function Registerpage() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    fullName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const { loading, RegisterUser } = useRegister();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await RegisterUser(inputs);
  };

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };
  return (
    <section className="h-screen flex">
      <Card className="w-[500px] px-5 py-2 m-auto">
        <CardHeader>
          <CardTitle className="text-start">Create Your Account</CardTitle>
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
                  placeholder="Enter your fullName..."
                  type="fullName"
                  onChange={(e) =>
                    setInputs({ ...inputs, fullName: e.target.value })
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
              <div className="flex flex-col space-y-1.5">
                <Input
                  type="password"
                  placeholder="confirm password"
                  onChange={(e) =>
                    setInputs({ ...inputs, confirmPassword: e.target.value })
                  }
                />
              </div>
              <GenderCheckBox
                onCheckboxChange={handleCheckboxChange}
                selectedGender={inputs.gender}
              />
              <div className="space-y-2">
                <Button className="w-full" type="submit">
                  {loading ? "Loading..." : "Create Account"}
                </Button>
                <Button
                  variant={"link"}
                  type="button"
                  onClick={() => navigate("/login")}
                >
                  Already have an account?
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
