import Chat from "../../../components/Chat";
import ChatInput from "../../../components/ChatInput";

function ChatPage() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Chat />
      <ChatInput />
    </div>
  );
}

export default ChatPage;
