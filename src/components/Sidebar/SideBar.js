import React from 'react';
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  SideBarRoute
} from './SideBar.styled';

function SideBar({ isOpen, toggle }) {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SideBarMenu>
        <SideBarLink to='/'>Cups & Cones</SideBarLink>
        <SideBarLink to='/'>Sundays</SideBarLink>
        <SideBarLink to='/'>Full Menu</SideBarLink>
      </SideBarMenu>
      <SideBtnWrap>
        <SideBarRoute to='/'>Order Now</SideBarRoute>
      </SideBtnWrap>
    </SideBarContainer>
  );
}

export default SideBar;