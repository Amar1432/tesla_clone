import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleSideNav = () => {
    setOpen(!open);
  };
  return (
    <Container>
      <a href="http://localhost:3000/">
        <img src="/images/logo.svg" alt="tesla logo"/>
      </a>
      <LeftMenu>
        <a href="http://localhost:3000/">Model S</a>
        <a href="http://localhost:3000/">Model 3</a>
        <a href="http://localhost:3000/">Model x</a>
        <a href="http://localhost:3000/">Model y</a>
      </LeftMenu>
      <RightMenu>
        <a href="http://localhost:3000/">Shop</a>
        <a href="http://localhost:3000/">Tesla Account</a>
        <Menu onClick={toggleSideNav} />
      </RightMenu>
      <SideBar isOpen={open}>
        <CloseWrapper>
          <CloseBtn onClick={toggleSideNav} />
        </CloseWrapper>
        <p>Existing Inventory</p>
        <p>Used Inventory</p>
        <p>Trade-in</p>
        <p>Cybertruck</p>
        <p>Roadster</p>
        <p>Tesla Models</p>
        <p>Solar Panles</p>
      </SideBar>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const LeftMenu = styled.div`
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 8px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 6px;
  }
  @media(max-width: 768px) {
    font-size: 14px;
  }
`;

const Menu = styled(MenuIcon)`
  cursor: pointer;
`;

const SideBar = styled.div`
  /* display: ${(props) => (props.isOpen ? "" : "none")}; */
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(100%)"};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  padding: 20px;
  text-align: left;
  transition: transform 0.4s ease;

  p {
    padding: 14px 0;
    font-weight: 600;
    border-bottom: 1px solid rgba(0, 0, 0, 0.45);
  }
`;

const CloseBtn = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
