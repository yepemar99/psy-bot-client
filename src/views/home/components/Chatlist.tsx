import type { IMessage } from "@/types/message.interface";
import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";

interface ChatlistProps {
  messages?: IMessage[];
}

const Chatlist = ({ messages = [] }: ChatlistProps) => {
  return (
    <div className="flex flex-col gap-3 p-4 h-full">
      {messages.length === 0 && (
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-2xl">Listo cuando tú lo estés.</h1>
        </div>
      )}
      {messages.length > 0 &&
        messages.map((message, i) => (
          <div key={message.id + "-" + i} className="mb-3">
            {message.sender === "user" ? (
              <div className="flex justify-end">
                <UserMessage message={message} />
              </div>
            ) : (
              <div className="flex justify-start">
                <BotMessage message={message} />
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default Chatlist;
