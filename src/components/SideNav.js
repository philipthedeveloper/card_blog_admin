import React, { useRef, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./SideNav.module.css";
import { ContextApi } from "./Context";

function SideNav() {
  const nightbtnRef = useRef(null);
  const navRef = useRef(null);
  const { handleTheme, setModalOpen } = useContext(ContextApi);

  const handleNightMode = () => {
    handleTheme();
    nightbtnRef.current.classList.toggle("active");
  };

  const handleHidePanel = () => {
    navRef.current.classList.toggle("hide");
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  return (
    <SideNavContainer ref={navRef}>
      <NavHeader>
        <LogoContainer>
          <Logo src="/favicon.png" />
          <LogoText id="logoTextCont">
            <span className="logoText">Bloom Admin</span>
          </LogoText>
        </LogoContainer>
        <Icon
          style={{
            color: "var(--primary-color)",
            cursor: "pointer",
            width: "auto",
          }}
          onClick={handleHidePanel}
          id="hideIcon"
        >
          <i className="fa-solid fa-arrow-left-long"></i>
        </Icon>
      </NavHeader>
      <NavList>
        <NavItem>
          <Link to={"/"} title="Dashboard">
            <Icon>
              <i className="fa-solid fa-folder"></i>
            </Icon>
            <span className="navTextCont">
              <span className="navtext">Dashboard</span>
            </span>
          </Link>
        </NavItem>
        <NavItem>
          <NewButton
            title="Create Post"
            className="newButton"
            onClick={handleOpenModal}
          >
            <Icon>
              <i className="fa-solid fa-pen"></i>
            </Icon>
            <span className="navTextCont">
              <span className="navtext">Add New</span>
            </span>
          </NewButton>
        </NavItem>
        <NavItem>
          <Link to={"/posts"} title="All Posts">
            <Icon>
              <i className="fi fi-br-calendar-lines-pen"></i>
            </Icon>
            <span className="navTextCont">
              <span className="navtext">All Posts</span>
            </span>
          </Link>
        </NavItem>

        <NavItem>
          <Link to={"/settings"} title="Settings">
            <Icon>
              <i className="fa-solid fa-gear"></i>
            </Icon>
            <span className="navTextCont">
              <span className="navtext">Settings</span>
            </span>
          </Link>
        </NavItem>
        <NightMode id="nightModeItem">
          <span id="nightMode">
            <Icon id="nightIcon">
              <i className="fa-brands fa-ethereum"></i>
            </Icon>
            <span className="navTextCont">
              <span className="navtext">Dark Mode</span>
            </span>
          </span>
          <NightModeContainer ref={nightbtnRef} onClick={handleNightMode}>
            <NightModeCircle></NightModeCircle>
            <i className="fi fi-rs-moon-stars" style={{ opacity: 0 }}></i>
            <i className="fi fi-ss-moon-stars" style={{ opacity: 0 }}></i>
          </NightModeContainer>
        </NightMode>
      </NavList>
      <SideFooter>
        <Link to={"/logout"} title="Logout">
          <Icon>
            <i className="fa-solid fa-right-from-bracket"></i>
          </Icon>
          <span className="navTextCont">
            <span className="navtext">Logout</span>
          </span>
        </Link>
      </SideFooter>
    </SideNavContainer>
  );
}

const SideNavContainer = styled.nav`
  background-color: var(--main-background);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 4px 0px 10px var(--shadow);
  padding: 1rem;
  transition: 0.4s ease;

  span.navTextCont,
  #logoTextCont {
    white-space: nowrap;
    display: inline-block;
    transition: 0.4s ease;
  }

  &.hide span.navTextCont,
  &.hide #logoTextCont,
  &.hide #nightMode {
    transform: translateX(200px);
  }

  &.hide {
    width: 100px;
  }

  &.hide #nightMode {
    display: none;
  }

  &.hide #nightModeItem {
    padding-left: 0;
  }

  &.hide header {
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 0 1rem;
    align-items: flex-start;

    img {
      width: 30px;
    }
  }

  &.hide #hideIcon {
    transform: rotate(180deg);
  }
`;

const NavHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding-left: 1rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  width: auto;
`;
const Logo = styled.img`
  width: 40px;
`;
const LogoText = styled.h2`
  font-style: italic;
  margin-left: 1rem;
  font-weight: 400;
  font-size: 1.2rem;
  color: var(--primary-color);
  white-space: nowrap;
`;
const NavList = styled.ul`
  list-style: none;
  margin-top: 1.5rem;
`;
const NavItem = styled.li`
  color: var(--primary-color);
  margin-bottom: 0.3rem;
  font-size: 0.85rem;
`;
const SideFooter = styled.footer`
  margin-top: auto;
  font-size: 0.85rem;
`;
const Icon = styled.span`
  margin-right: 1rem;
  display: inline-block;
  width: 10px;
`;

const NightModeContainer = styled.button`
  border: none;
  box-shadow: 0px 2px 6px var(--shadow);
  padding: 0.3rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--main-background);
  border-radius: 1.5rem;
  min-width: 60px;
  cursor: pointer;
  transition: 0.3s ease;
  position: relative;

  & > i {
    position: relative;
    z-index: 2;
    color: var(--textColor);
  }
  &.active {
    background-color: var(--primary-color);
  }

  &.active span {
    transform: translate(calc(65px - 2.2rem), -50%);
    background-color: var(--main-background);
  }
`;
const NightModeCircle = styled.span`
  position: absolute;
  height: 70%;
  aspect-ratio: 1;
  background-color: var(--primary-color);
  border-radius: 50%;
  z-index: 0;
  top: 50%;
  transform: translate(0, -50%);
  transition: 0.3s ease;
  left: 0.4rem;
  right: 0rem;
  pointer-event: none;
`;

const NightMode = styled.div`
  padding: 0.8rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--primary-color);
  font-size: 0.85rem;
  overflow: hidden;
  white-space: nowrap;
`;

const NewButton = styled.button`
  border: none;
  outline: none;
  text-decoration: none;
  color: var(--primary-color);
  display: inline-block;
  padding: 0.8rem 1rem;
  width: 100%;
  border-radius: 0.8rem;
  transition: 0.4s ease;
  overflow: hidden;
  white-space: nowrap;
  font-family: inherit;
  cursor: pointer;
  background-color: transparent;
  text-align: left;

  &:hover {
    background-color: var(--primary-color);
    color: var(--white);
  }
`;

export default SideNav;
