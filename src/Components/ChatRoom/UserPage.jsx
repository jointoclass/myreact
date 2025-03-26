import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import SockJS from "sockjs-client";
import * as Stomp from "@stomp/stompjs";
import ChatPage from "./ChatPage";

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  min-height: 250px;
  background-color: white;
  box-shadow: 0 1px 11px rgba(0, 0, 0, 0.27);
  border-radius: 2px;
  padding: 35px 55px 35px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
const Input = styled.input`
  width: 100%;
  height: 40px;
  margin: 20px 0 10px;
`;
const Button = styled.button`
  display: inline-block;
  margin: 10px 0;
  padding: 10px 10px;
  color: white;
  background-color: dodgerblue;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function UserPage({ url }) {
  const [username, setUsername] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [message, setMessage] = useState(null);
  // client 연결객체는 상태관리는 필요하나 화면 렌더링과
  // 무관하므로 useRef로 생성
  // useRef로 만드는 변수는 화면렌더링을 일으키지 않아서 성능에 유리
  const stompClientRef = useRef(null);

  function connect(e) {
    e.preventDefault();
    if (username && !stompClientRef.current) {
      // 웹소켓 연결(=엔드포인트) 설정
      const client = new Stomp.Client({
        webSocketFactory: () => new SockJS(`${url}/ws`),
        onConnect: () => {
          console.log("Connected as", username);
          stompClientRef.current = client;
          setIsConnected(true);

          // 구독
          client.subscribe("/topic/public", onMessageReceived);
          // JOIN 전송
          client.publish({
            destination: "/app/chat.addUser",
            body: JSON.stringify({ sender: username, type: "JOIN" }),
          });
        },
        onStompError: (frame) => {
          console.error("Broker error", frame.headers["message"]);
        },
      });

      client.activate();
    }
  }

  function onMessageReceived(message) {
    const body = JSON.parse(message.body);
    setMessage(body);
    console.log("Received:", body);
  }

  useEffect(() => {
    return () => {
      if (stompClientRef.current) {
        stompClientRef.current.deactivate();
        console.log("WebSocket disconnected");
      }
    };
  }, []);

  return (
    <>
      {!isConnected ? (
        <Container>
          <h2>Type your username to enter the Chatroom</h2>
          <form onSubmit={connect}>
            <Input
              type="text"
              placeholder="Username"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button type="submit">Start Chatting</Button>
          </form>
        </Container>
      ) : (
        <ChatPage
          username={username}
          message={message}
          stompClientRef={stompClientRef}
        />
      )}
    </>
  );
}

export default UserPage;
