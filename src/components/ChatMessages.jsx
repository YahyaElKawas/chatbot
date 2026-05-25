import { useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import "./ChatMessages.css";
function ChatMessages({ chatMessages }) {
  // React state that is connected to the HTML, when we update it the HTML will be updated

  //const [chatMessages, setChatMessages] = array;
  //const chatMessages = array[0]; // In react we shouldn't update the data instantly we should copy it first and then update it
  //const setChatMessages = array[1]; // Updater function
  const chatMessagesRef = useRef(null); // In react we shouldn't use dom to access html elements
  // To access html elements stored in react ref we have to go to useEffect
  useEffect(() => {
    const containerElement = chatMessagesRef.current;
    if (containerElement) {
      containerElement.scrollTop = containerElement.scrollHeight;
    }
  }, [chatMessages]); // Dependency array: The thing that will change
  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;
