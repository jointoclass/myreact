import React, { useState } from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import styled from "styled-components";
import Button from "../3_Props/Button";

const Menu = styled.div`
  display: flex;
  gap: 50px;
`;
const Body = styled.div``;

const BasicRouter = () => {
  const [view, setView] = useState("home");
  function renderView() {
    switch (view) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  }
  return (
    <div>
      <Menu>
        <Button name="HOME" onClick={() => setView("home")}></Button>
        <Button name="ABOUT" onClick={() => setView("about")}></Button>
        <Button name="CONTACT" onClick={() => setView("contact")}></Button>
      </Menu>
      <Body>{renderView()}</Body>
    </div>
  );
};

export default BasicRouter;
Button;
