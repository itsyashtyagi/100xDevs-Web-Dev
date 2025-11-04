import { useEffect, useRef, useState } from "react";

function ScrollBottom() {
  const [messages, setMessages] = useState(["How, are you doing?"]);
  const chatBoxRef = useRef();
  const [newMessage, setNewMessage] = useState("");

  function saveMessage(e) {
    setNewMessage(e.target.value);
  }

  function sendMessage() {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  }

  useEffect(() => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [messages]);
  return (
    <div>
      <div
        ref={chatBoxRef}
        style={{
          height: "200px",
          overflow: "scroll",
          border: "1px solid black",
        }}
      >
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="message"
          onChange={saveMessage}
          value={newMessage}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ScrollBottom;
