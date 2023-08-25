import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      
{/* 
      main footer */}
      <footer>
        <div className="container grid grid-four-column">
            <div className="footer-social">
                {/* <h3>Follow us</h3> */}
                <div className="footer-social--icons">
                    <div>
                    <a href="https://www.linkedin.com/company/hcltech/" target="_blank">
                        <FaLinkedin className="icons"/>
                        </a>
                    </div>
                    <div>
                    <a href="https://instagram.com/hcltech" target="_blank">
                        <FaInstagram className="icons"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.youtube.com" target="_blank">
                            <FaYoutube className="icons"/>
                        </a>
                    </div>
                    <div>
                      <a href="https://twitter.com/hcltech" target="_blank">
                        <FaTwitter className="icons"/>
                      </a>
                    </div>
                </div>
            </div>
            <ul className="f1">
        <img style={{width: '150px'}}  src="https://www.hcltech.com/sites/default/files/images/special-pages/supercharging-progress/supercharging-logo.svg" alt="" />
        </ul>
        </div>
        
      </footer>
      
    </Wrapper>
    
    
  );
};

const Wrapper = styled.section`

  .iSIFGq {
    margin: 0;
  }
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  .f1{
    text-align: right;
    padding: 1rem 0 1rem 0;
  }
  footer {
    padding: 1rem 0 1rem 0;
    // padding: 4.1rem 0 1rem 0;
    background: transparent linear-gradient(90deg, #5F1EBE 0%, #2874F0 67%, #0F5FDC 100%) 0% 0% no-repeat;
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 1.5rem;
      div {
        padding: 0.5rem;
        border-radius: 100%;
        border: 0.5px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 1.8rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  .footer-bottom--section {
    padding-top: 5rem;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }
    footer {
      padding: 2rem 0 2rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;
