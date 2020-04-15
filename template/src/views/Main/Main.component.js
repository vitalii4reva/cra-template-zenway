import React from "react";
import logo from "../../assets/images/logo.svg";
import { MainStyled, Logo, HeaderStyled, Link } from "./Main.styled";

const Main = () => {
  return (
    <MainStyled>
      <HeaderStyled>
        <Logo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </HeaderStyled>
    </MainStyled>
  );
};

export default Main;
