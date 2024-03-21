import { LogOut } from "lucide-react";
import { Button } from "../ui/button";
import useLogout from "@/hooks/useLogout";

export default function LogoutButton() {
  const { loading, LogoutUser } = useLogout();
  const handleLogout = async () => {
    await LogoutUser();
  };

  return (
    <section>
      <Button
        className="gap-2 text-white font-bold rounded-3xl"
        onClick={handleLogout}
        disabled={loading}
      >
        <LogOut /> Logout
      </Button>
    </section>
  );
}
