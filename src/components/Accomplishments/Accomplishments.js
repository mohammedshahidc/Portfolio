// import React from 'react';

// import {Section, SectionDivider, SectionTitle} from '../../styles/GlobalComponents';
// import {Box, Boxes, BoxNum, BoxText} from './AcomplishmentsStyles';

// const data = [
//   { number: 20, text: 'Open Source Projects'},
//   { number: 1000, text: 'Students', },
//   { number: 1900, text: 'Github Followers', },
//   { number: 5000, text: 'Github Stars', }
// ];

// const Accomplishments = () => (
//   <Section>
//     <SectionTitle>Personal Achievements</SectionTitle>
//     <Boxes>
//       {data.map((card, index) => (
//         <Box key={index}>
//           <BoxNum>{`${card.number}+`}</BoxNum>
//           <BoxText>{card.text}</BoxText>
//         </Box>
//       ))}
//     </Boxes>
//     <SectionDivider/>
//   </Section>
// );

// export default Accomplishments;

import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2, text: 'Full-Stack Projects (Spotify Clone & Vital-Aid)' },
  { number: 10, text: 'Technologies Mastered (MERN, AWS S3, Socket.IO, etc.)' },
  { number: 3, text: 'Real-Time Features Implemented (Chat, Booking System)' },
  { number: 1, text: 'AI Integration (JemniAI for Health Validation)' }
];

const Accomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Accomplishments;
