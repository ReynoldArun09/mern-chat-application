import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "../shared/LogoutButton";
import { Separator } from "@/components/ui/separator"

export default function Sidebar() {
  return (
    <section className="space-y-4 p-4 flex flex-col">
      <SearchInput />
      <Separator />
      <Conversations />
      <Separator />
      <LogoutButton />
    </section>
  );
}
