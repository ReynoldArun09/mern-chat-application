import { RefreshCcw, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import useSendMessage from "@/hooks/useSendMessage";

export default function MessageInput() {
  const [input, setInput] = useState("");
  const inputLength = input.trim().length;
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMessage(input);
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-3 items-center px-2 py-4">
        <Input
          placeholder="Type your message..."
          className=""
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          type="submit"
          size={"icon"}
          className="w-16 h-10 text-white font-bold"
          disabled={inputLength === 0}
        >
          {loading ? (
            <RefreshCcw className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
        </Button>
      </div>
    </form>
  );
}
