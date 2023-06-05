import React from "react";

import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Sai Surya Teja",
    text: "Lorum ipsum theatre",
    replies: [
      {
        name: "Sai Surya Teja",
        text: "Lorum ipsum theatre",
        replies: [
          { name: "Sai Surya Teja", text: "Lorum ipsum theatre", replies: [] },
          { name: "Sai Surya Teja", text: "Lorum ipsum theatre", replies: [] },
          { name: "Sai Surya Teja", text: "Lorum ipsum theatre", replies: [] },
        ],
      },
      { name: "Sai Surya Teja", text: "Lorum ipsum theatre", replies: [] },
      { name: "Sai Surya Teja", text: "Lorum ipsum theatre", replies: [] },
    ],
  },
  { name: "Sai Surya Teja", text: "Lorum ipsum theatre", replies: [] },
  { name: "Sai Surya Teja", text: "Lorum ipsum theatre", replies: [] },
  { name: "Sai Surya Teja", text: "Lorum ipsum theatre", replies: [] },
  { name: "Sai Surya Teja", text: "Lorum ipsum theatre", replies: [] },
  { name: "Sai Surya Teja", text: "Lorum ipsum theatre", replies: [] },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 w-2/3">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
      <div>
        <input />
      </div>
    </div>
  );
};

export default CommentsContainer;
