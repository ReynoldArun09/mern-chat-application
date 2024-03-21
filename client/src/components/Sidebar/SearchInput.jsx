import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { useMessageContext } from "@/context/ConversationContext";
import { useToast } from "../ui/use-toast";
import useGetConversations from "@/hooks/useGetConversation";

export default function SearchInput() {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useMessageContext();
  const { conversations } = useGetConversations();
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      toast({
        variant: "destructive",
        title: "Search term must be at least 3 characters long",
      });
      return;
    }
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast({
        variant: "destructive",
        title: "User not found!!",
      });
    }
  };

  return (
    <form className="flex items-center gap-3 pr-2" onSubmit={handleSubmit}>
      <Input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button type="submit" className="h-8 text-white font-bold">
        <Search />
      </Button>
    </form>
  );
}
