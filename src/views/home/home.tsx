import ChatInput from "@/components/chatBox";
import Chatlist from "./components/Chatlist";
import { mockMessages } from "@/data/messages";
import Layout1 from "@/layouts/layout-1";

const Chat = () => {
  return (
    <Layout1>
      <div
        className="flex flex-col w-full"
        style={{ height: "calc(100vh - 60px)" }}
      >
        <div className="flex-1 p-4 overflow-y-auto w-full">
          <div className="mx-auto max-w-4xl">
            <Chatlist messages={mockMessages} />
          </div>
        </div>
        <div className="p-4 border-t w-full mx-auto max-w-4xl">
          <ChatInput />
        </div>
      </div>
    </Layout1>
  );
};

export default Chat;
