// import React, { useEffect, useRef, useState } from "react";

// import {
//   CarouselButton,
//   CarouselButtonDot,
//   CarouselButtons,
//   CarouselContainer,
//   CarouselItem,
//   CarouselItemImg,
//   CarouselItemText,
//   CarouselItemTitle,
//   CarouselMobileScrollNode,
// } from "./TimeLineStyles";
// import {
//   Section,
//   SectionDivider,
//   SectionText,
//   SectionTitle,
// } from "../../styles/GlobalComponents";
// import { TimeLineData } from "../../constants/constants";

// const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

// const Timeline = () => {
//   const [activeItem, setActiveItem] = useState(0);
//   const carouselRef = useRef();

//   const scroll = (node, left) => {
//     return node.scrollTo({ left, behavior: "smooth" });
//   };

//   const handleClick = (e, i) => {
//     e.preventDefault();

//     if (carouselRef.current) {
//       const scrollLeft = Math.floor(
//         carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
//       );

//       scroll(carouselRef.current, scrollLeft);
//     }
//   };

//   const handleScroll = () => {
//     if (carouselRef.current) {
//       const index = Math.round(
//         (carouselRef.current.scrollLeft /
//           (carouselRef.current.scrollWidth * 0.7)) *
//           TimeLineData.length
//       );

//       setActiveItem(index);
//     }
//   };

//   // snap back to beginning of scroll when window is resized
//   // avoids a bug where content is covered up if coming from smaller screen
//   useEffect(() => {
//     const handleResize = () => {
//       scroll(carouselRef.current, 0);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <Section id="about">
//       <SectionDivider divider />
//       <SectionTitle>About Me</SectionTitle>
//       <SectionText>
//         Hi, I'm Infvyr - a passionate frontend developer. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cum cumque dolorem earum est harum impedit laborum, nobis odit porro quibusdam saepe suscipit! Accusamus adipisci aliquam amet consectetur dolore doloremque eaque earum eius, est eveniet fuga, id itaque laudantium natus nesciunt nihil obcaecati omnis possimus quibusdam repellat sed velit vero. A, accusamus, adipisci aliquam dolorem eveniet excepturi fuga incidunt libero minima nisi obcaecati quae saepe! Consectetur maiores natus reiciendis rem!
//       </SectionText>
//       <SectionText>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus amet, beatae commodi consequuntur corporis cumque dicta doloremque eaque earum enim ex excepturi exercitationem fuga inventore ipsam, iste itaque laboriosam libero maiores, maxime nisi nulla odio odit omnis possimus quaerat quam quasi rerum sequi tempore temporibus vitae voluptates. Autem doloribus, veritatis! Atque aut inventore natus nulla quaerat suscipit tempore voluptates?
//       </SectionText>
//       <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
//         <>
//           {TimeLineData.map((item, index) => (
//             <CarouselMobileScrollNode
//               key={index}
//               final={index === TOTAL_CAROUSEL_COUNT - 1}
//             >
//               <CarouselItem
//                 index={index}
//                 id={`carousel__item-${index}`}
//                 active={activeItem}
//                 onClick={(e) => handleClick(e, index)}
//               >
//                 <CarouselItemTitle>
//                   {`${item.year}`}
//                   <CarouselItemImg
//                     width="208"
//                     height="6"
//                     viewBox="0 0 208 6"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       clipRule="evenodd"
//                       d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
//                       fillOpacity="0.5"
//                     />
//                     <defs>
//                       <linearGradient
//                         id="paint0_linear"
//                         x1="-4.30412e-10"
//                         y1="0.5"
//                         x2="208"
//                         y2="0.500295"
//                         gradientUnits="userSpaceOnUse"
//                       >
//                         <stop stopColor="#fff" />
//                         <stop
//                           offset="0.79478"
//                           stopColor="#fff"
//                           stopOpacity="0"
//                         />
//                       </linearGradient>
//                     </defs>
//                   </CarouselItemImg>
//                 </CarouselItemTitle>
//                 <CarouselItemText>{item.text}</CarouselItemText>
//               </CarouselItem>
//             </CarouselMobileScrollNode>
//           ))}
//         </>
//       </CarouselContainer>
//       <CarouselButtons>
//         {TimeLineData.map((item, index) => {
//           return (
//             <CarouselButton
//               key={index}
//               index={index}
//               active={activeItem}
//               onClick={(e) => handleClick(e, index)}
//               type="button"
//               name={`slide-${index}`}
//               aria-label={`slide ${index} was selected`}
//             >
//               <CarouselButtonDot active={activeItem} />
//             </CarouselButton>
//           );
//         })}
//       </CarouselButtons>
//     </Section>
//   );
// };

// export default Timeline;


import React, { useEffect, useRef, useState } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

// Updated with your actual data
const TimeLineData = [
  {
    year: "May 2024 - April 2024",
    text: "Started internship at Bridgeon Solutions. Developed responsive interfaces using React, integrated RESTful APIs, and collaborated with the team using Git.",
  },
  {
    year: "Nov 2024 - Dec 2024",
    text: "Built a Spotify Clone – full-stack music streaming app using React, Node.js, MongoDB, Redux, and Cloudinary for media storage.",
  },
  {
    year: "Jan 2025 - Feb 2025",
    text: "Created Vital-Aid – a real-time health support platform with Next.js, Node.js, Socket.IO, AWS S3, Google Auth, and TanStack Query + Redux for state management.",
  },
];

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Section id="about">
      <SectionDivider divider />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Hi, I'm Mohammed Shahid - a passionate full-stack developer. I enjoy building scalable applications using modern technologies like React, Next.js, and Node.js. I'm committed to writing clean, maintainable code and continuously expanding my skills.
      </SectionText>
      <SectionText>
        My journey includes hands-on experience with real-time systems, custom backend APIs, and cloud integrations. I’ve worked with tools like Socket.IO, AWS S3, Google Authentication, and modern state managers like Redux and TanStack Query.
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>
                  {`${item.year}`}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fillOpacity="0.5"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop
                          offset="0.79478"
                          stopColor="#fff"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => {
          return (
            <CarouselButton
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              type="button"
              name={`slide-${index}`}
              aria-label={`slide ${index} was selected`}
            >
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
          );
        })}
      </CarouselButtons>
    </Section>
  );
};

export default Timeline;
