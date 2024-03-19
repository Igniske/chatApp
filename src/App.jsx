import './App.css'
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'
function App() {

  return (
    <>
      <ChatEngine
        height="100vh"
        projectID="a236cce0-aa92-49ce-8847-871b20f4253e"
        userName="Igniske"
        userSecret="electrum13"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </>
  )
}

export default App
