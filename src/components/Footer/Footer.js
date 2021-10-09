import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineDownload,
} from "react-icons/ai";
import { HiDocumentDuplicate } from "react-icons/hi";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+65-96100053">+65-96100053</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:msaif.sam@gmail.com">
            msaif.sam@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            People don't care about what you say, they care about what you
            build. <br />
            <i>-Mark Zuckerberg</i>
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/SAIF0206" download>
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/msaif02/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://drive.google.com/file/d/15rlnOJraLF7yfs99oMWdVQe2xJDOiSZd/view?usp=sharing">
            <HiDocumentDuplicate size="3rem" />
            Resume
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
