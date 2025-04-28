// import React from "react";
// import { DiFirebase, DiReact, DiZend } from "react-icons/di";
// import { AiOutlineTool } from "react-icons/ai";
// import {
//   Section,
//   SectionDivider,
//   SectionText,
//   SectionTitle,
// } from "../../styles/GlobalComponents";
// import {
//   List,
//   ListContainer,
//   ListItem,
//   ListParagraph,
//   ListTitle,
// } from "./TechnologiesStyles";

// const Technologies = () => (
//   <Section id="tech">
//     <SectionDivider divider />
//     <SectionTitle>Technologies</SectionTitle>
//     <SectionText>
//       I've worked with the following technologies in the web development world. Now I'm focused towards React and Next.js.
//     </SectionText>
//     <List>
//       <ListItem>
//         <picture>
//           <DiReact size="6rem" />
//         </picture>
//         <ListContainer>
//           <ListTitle>Front-End</ListTitle>
//           <ListParagraph>
//             Experience with <br />
//             HTML, CSS, JavaScript, React, Next.js
//           </ListParagraph>
//         </ListContainer>
//       </ListItem>
//       <ListItem>
//         <picture>
//           <DiFirebase size="6rem" />
//         </picture>
//         <ListContainer>
//           <ListTitle>Back-End</ListTitle>
//           <ListParagraph>
//             Experience with <br />
//             Next.js
//           </ListParagraph>
//         </ListContainer>
//       </ListItem>
//       <ListItem>
//         <picture>
//           <DiZend size="6rem" />
//         </picture>
//         <ListContainer>
//           <ListTitle>UI/UX</ListTitle>
//           <ListParagraph>
//             Experience with <br />
//             PS, XD, Zeplin, Figma, Avocode
//           </ListParagraph>
//         </ListContainer>
//       </ListItem>
//       <ListItem>
//         <picture>
//           <AiOutlineTool size="5.5rem" />
//         </picture>
//         <ListContainer>
//           <ListTitle>Other Tools</ListTitle>
//           <ListParagraph>
//             Experience with <br />
//             WordPress CMS, Jira, Trello, Git
//           </ListParagraph>
//         </ListContainer>
//       </ListItem>
//     </List>
//   </Section>
// );

// export default Technologies;
import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { AiOutlineTool } from "react-icons/ai";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a variety of technologies in the web development world. My current focus is on building full-stack applications using React, Next.js, and Express.js.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML, CSS, JavaScript, React.js, Next.js, TypeScript, Tailwind CSS, Material UI
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, Express.js, MongoDB, Mongoose
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>State Management</ListTitle>
          <ListParagraph>
            Experience with <br />
            Redux, Zustand, TanStack Query
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <AiOutlineTool size="5.5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Tools & Integrations</ListTitle>
          <ListParagraph>
            Experience with <br />
            Git, GitHub, Postman, Socket.IO, AWS S3, Multer, Nodemailer, Stripe, Razorpay, Cloudinary, Google Auth
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

