import React from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: dodgerblue;
  position: relative;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 5px;
  &:hover {
    background-color: blue;
  }
`;

function Navbar() {
  return (
    <div>
      <Container>
        <StyledLink to="/">
          <NavItem icon="fa-solid fa-house" name="HOME" />
        </StyledLink>
        <StyledLink to="/movie">
          <NavItem icon="fa-solid fa-film" name="MOVIE" />
        </StyledLink>
        <StyledLink to="/search">
          <NavItem icon="fa-solid fa-magnifying-glass" name="SEARCH" />
        </StyledLink>
        <StyledLink to="/mypage">
          <NavItem icon="fa-solid fa-user" name="MYPAGE" />
        </StyledLink>
        <StyledLink to="/login">
          <NavItem icon="fa-solid fa-right-to-bracket" name="LOGIN" />
        </StyledLink>
      </Container>
    </div>
  );
}

export default Navbar;
