/* eslint-disable react/prop-types */

import { UserAuth } from "../context/AuthContext";

// eslint-disable-next-line react/prop-types
const Message = ({ message }) => {
  const { currentUser } = UserAuth();
  return (
    // eslint-disable-next-line react/prop-types
    <div>
      <div
        className={`chat ${
          message.uid === currentUser.uid ? "chat-end" : "chat-start"
        }`}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={message.avatar} />
          </div>
        </div>
        <div className="chat-header">{message.name}</div>
        <div className="chat-bubble">{message.text}</div>
      </div>
    </div>
  );
};

export default Message;
