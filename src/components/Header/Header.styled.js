import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 24px;
  &.active {
    color: orange;
    text-decoration: underline;
  }
  :not(.active) {
    :hover {
      color: red;
    }
  }
  :not(:last-child) {
    margin-right: 12px;
  }
`;

export const Wraper = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  height: 30px;
  width: 120px;
  margin-left: 12px;
  border-radius: 10px;
  border: none;
  background-color: red;
  color: white;
  font-size: 16px;

  :hover {
    background-color: orange;
  }
`;
