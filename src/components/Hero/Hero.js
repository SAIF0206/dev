import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi all <br />
        I'm Mohd Saif
      </SectionTitle>
      <SectionText>
        A passionate Full Stack Web Developer and Mobile App Developer having an
        experience of building Web applications with JavaScript/ ReactJs /
        NodesJs/ NextJs
      </SectionText>
      <Button onClick={() => (window.location = "mailto:msaif.sam@gmail.com")}>
        Contact Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
