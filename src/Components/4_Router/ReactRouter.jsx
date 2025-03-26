import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import styled from "styled-components";
import Button from "../3_Props/Button";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Menu = styled.div`
  display: flex;
  gap: 50px;
`;
const Body = styled.div``;

const ReactRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Menu>
          <Link to="/">
            <Button name="HOME" />
          </Link>
          <Link to="/about">
            <Button name="ABOUT" />
          </Link>
          <Link to="/about/1000">
            <Button name="ABOUT ID" />
          </Link>
          <Link to="/contact">
            <Button name="CONTACT" />
          </Link>
        </Menu>
        <Body>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}>
              <Route path=":id" element={<About />} />
            </Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </Body>
      </BrowserRouter>
    </div>
  );
};

export default ReactRouter;
