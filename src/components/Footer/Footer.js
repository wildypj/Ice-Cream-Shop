import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIconLink,
    SocialIcons
} from './Footer.styled'

function Footer() {
  return (
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>Gelato</SocialLogo>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" 
                        aria-label="Facebook" rel="noopener noreffer">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" 
                        aria-label="Instagram" rel="noopener noreffer">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" 
                        aria-label="Twittwer" rel="noopener noreffer">
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" 
                        aria-label="Youtube" rel="noopener noreffer">
                            <FaYoutube/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
)}

export default Footer