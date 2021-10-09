import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  {
    title: "NUS Makerthon -Winner",
    text: "Build a communication device for connecting grandparents and young children.",
  },
  {
    title: "Build-On SG -Finalist",
    text: "Smart Parking Application based on real-time parking info. to reduce carbon emissions.",
  },
  {
    title: "NES Student Club",
    text: "IT Consultant in NUS Entrepreneurship Society. Engaged with startup's to build MVP",
  },
  {
    title: "DSC Google",
    text: "Android Facilator for Developer Student Club Organised by Google.",
  },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.title}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
