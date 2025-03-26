import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Menu = () => {
  return (
   <Container>
      <Button name="HOME"/>
      <Button name="CONTENT"/>
      <Button name="CONTACT"/>
      <Button name="SOCIAL"/>
    </Container>
  );
};

export default Menu;
