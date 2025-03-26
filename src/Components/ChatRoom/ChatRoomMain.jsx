import React from "react";
import UserPage from "./UserPage";

function ChatRoomMain() {
  const url = "http://localhost:8081"; //개발용 URL. 개발완료시기에는 변경필요
  return (
    <>
      <UserPage url={url} />
    </>
  );
}

export default ChatRoomMain;
