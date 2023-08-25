import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
    <NavLink to="https://www.myhcl.com/bprhome/Home/Index">
      <img style={{width: '230px'}}  src="https://www.hcltech.com/sites/default/files/images/special-pages/supercharging-progress/supercharging-logo.svg" alt="" />
      
    </NavLink>
    {/* <NavLink to="/" className="nav-logo">
            <img src="https://www.hcltech.com/sites/default/files/images/special-pages/supercharging-progress/supercharging-logo.svg" alt="" />
            {/* <i className="fas fa-code"></i> */}
          {/* </NavLink> */}
    <Nav/>
    </MainHeader>
  )
};

const MainHeader = styled.header`
padding: 0 4.8rem;
height: 6rem;
background: transparent linear-gradient(90deg, #5F1EBE 0%, #2874F0 67%, #0F5FDC 100%) 0% 0% no-repeat;
display: flex;
justify-content: space-between;
align-items: center;
position: relative;

.logo {
    height: 5rem;
}
`;

export default Header