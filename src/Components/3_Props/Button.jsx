import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100px;
  height: 40px;
  font-family: Poppins;
  background-color: dodgerblue;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #8282ee;
  }
`;
const Button = ({ name, onClick }) => {
  return (
    <Box onClick={onClick}>
      <p>{name}</p>
    </Box>
  );
};

// const Button = (props) => {
//   return (
//     <Box>
//       <p>{props.name}</p>
//     </Box>
//   );
// };

export default Button;
