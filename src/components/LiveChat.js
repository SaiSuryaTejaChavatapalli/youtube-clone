import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/redux/chatSlice";
import { generateRandomName } from "../utils/helper";
const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);
  const [liveMsg, setLiveMsg] = useState("");
  useEffect(() => {
    const id = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomName() + "🚀",
        })
      );
    }, 2000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <>
      <div className="border border-black h-[357px] w-full ml-2 p-2 bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {messages.map((chat, index) => (
          <ChatMessage name={chat.name} message={chat.message} key={index} />
        ))}
      </div>

      <form
        className="w-full p-1 m-2 border border-black rounded-lg flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Sai Surya Teja",
              message: liveMsg,
            })
          );
          setLiveMsg("");
        }}
      >
        <input
          type="text"
          className="w-full"
          value={liveMsg}
          onChange={(e) => setLiveMsg(e.target.value)}
        />
        <button className="text-2xl">⏩︎</button>
      </form>
    </>
  );
};

export default LiveChat;
