import Sidebar from "@/components/Sidebar/Sidebar";
import MessageContainer from "@/components/MessageContainer/MessageContainer";
import { Card } from "@/components/ui/card";

export default function Homepage() {
  return (
    <main className="h-screen flex">
      <Card className="flex sm:h-[450px] rounded-xl m-auto md:h-[550px]">
        <Sidebar />
        <MessageContainer />
      </Card>
    </main>
  );
}
