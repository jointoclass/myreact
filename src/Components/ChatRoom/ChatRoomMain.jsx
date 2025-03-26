import React from "react";
import UserPage from "./UserPage";

function ChatRoomMain() {
  const url = "http://localhost:8080";
  return (
    <>
      <UserPage url={url} />
    </>
  );
}

export default ChatRoomMain;
