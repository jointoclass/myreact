import React, { useRef, useState } from "react";
import styled from "styled-components";
import { IconEmail, IconPassword } from "./Icons";
import { create } from "zustand"; /* 반드시 필요함 */
import { createJSONStorage, persist } from "zustand/middleware";

const Container = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(218deg 50% 91%);
`;
const Box = styled.div`
  width: 300px;
  height: auto;
  background-color: hsl(213deg 85% 97%);
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  box-shadow: 0 0 2em hsl(231deg 62% 94%);
`;
const Smallbox = styled.div`
  width: 100%;
  background: hsl(0deg 0% 100%);
  box-shadow: 0 0 2em hsl(231deg 62% 94%);
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  border-radius: 20px;
  color: hsl(0deg 0% 30%);
`;
const Icon = styled.div`
  display: flex;
  gap: 10px;
`;
const Input = styled.input`
  outline: none;
  border: none;
  &::placeholder {
    color: hsl(0deg 0% 0%);
    font-size: 0.9em;
  }
`;
const Button = styled.button`
  width: 100%;
  padding: 1em;
  margin-top: 10px;
  background-color: hsl(233deg 36% 38%);
  color: hsl(0 0 100);
  border: none;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(2px);
  }
`;

// 1. Zustand를 이용한 글로벌 상태관리 기본 사용법
// export const useUserStore = create((set) => ({
//   user: null,
//   login: (email) => set({ user: { email } }), // 로그인 처리
//   logout: () => set({ user: null }), // 로그아웃 처리
// }));

// 2. Zustand로 데이터를 스토리지에 저장하는 옵션 사용법(세션/로컬 스토리지에 자동으로 저장)
export const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      login: (email) => set({ user: { email } }), // 로그인 처리
      logout: () => set({ user: null }), // 로그아웃 처리
    }),
    {
      name: "user-storage", // sessionStorage에 저장될 키 이름
      storage: createJSONStorage(() => sessionStorage), // sessionStorage에 저장
    }
  )
);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const buttonRef = useRef(null);
  const { user, login, logout } = useUserStore();

  function handleSubmit() {
    console.log("click " + email + " " + password);
    login(email);
    setEmail("");
    setPassword("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      buttonRef.current.click();
    }
  }

  return (
    <div>
      <Container>
        <Box>
          <h1>LOGIN</h1>
          <br />
          <Smallbox>
            <label>Email Address</label>
            <Icon>
              <IconEmail />
              <Input
                type="text"
                value={email}
                onKeyDown={handleKeyDown}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Username@gmail.com"
              />
            </Icon>
          </Smallbox>
          <Smallbox>
            <label>Password</label>
            <Icon>
              <IconPassword />
              <Input
                type="password"
                autoComplete="off"
                value={password}
                onKeyDown={handleKeyDown}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="· · · · · · · · · · · ·"
              />
            </Icon>
          </Smallbox>
          <Button ref={buttonRef} onClick={handleSubmit}>
            로그인
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default Login;
