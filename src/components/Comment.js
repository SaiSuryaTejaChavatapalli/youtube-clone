import React from "react";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex items-center shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-10 h-10"
        src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
        alt="comment-img"
      />
      <div>
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
