import React from 'react'
import { FaFacebook, FaInstagramSquare, FaTwitterSquare, FaYoutube } from 'react-icons/fa'
import { StyledSocialBar, StyledSocialLink } from './SocialMedia.styles'


function SocialMedia() {
  return (
    <StyledSocialBar>
      <StyledSocialLink to="https://facebook.com" target="_blank">
        <FaFacebook/>
      </StyledSocialLink>
      <StyledSocialLink to="https://instagram.com" target="_blank">
        <FaInstagramSquare />
      </StyledSocialLink>
      <StyledSocialLink to="https://twitter.com" target="_blank">
        <FaTwitterSquare />
      </StyledSocialLink>
      <StyledSocialLink to="https://youtube.com.com" target="_blank">
        <FaYoutube />
      </StyledSocialLink>
    </StyledSocialBar>
  )
}

export default SocialMedia
