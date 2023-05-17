import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center m-2">
      <img
        src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
        alt="profile-icon"
        className="h-10"
      />
      <span className="font-bold px-4 text-gray-600">{name}</span>
      <span className="">{message}</span>
    </div>
  );
};

export default ChatMessage;
