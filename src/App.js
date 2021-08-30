import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="db1d5bcf-0837-4e44-8329-6e9042e07a85"
      userName="ismailcileli"
      userSecret="123123"
      renderChatFeed= {(chatAppProps) => <ChatFeed {...chatAppProps }/>}
    />
  );
}

export default App;














