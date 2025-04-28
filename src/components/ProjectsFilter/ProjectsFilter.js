// import React from "react";
// import { FilterContainer, Button, FilterHeading } from "./ProjectsFilterStyles";
// import { SiReact, SiJavascript } from "react-icons/si";
// import { FaPhp } from "react-icons/fa";

// const ProjectsFilter = ({ filter, filterBy }) => (
//   <section>
//     <FilterHeading>
//       Filtered by: <b>{filterBy}</b>
//     </FilterHeading>
//     <FilterContainer>
//       <Button
//         type="button"
//         className={filterBy === "All" ? "active" : null}
//         aria-label="Filter by All"
//         onClick={() => filter("All")}
//       >
//         All
//       </Button>
//       <Button
//         type="button"
//         className={filterBy === "JavaScript" ? "active" : null}
//         aria-label="Filter by JS"
//         onClick={() => filter("javascript")}
//       >
//         <SiJavascript />
//       </Button>
//       <Button
//         type="button"
//         className={filterBy === "React" ? "active" : null}
//         aria-label="Filter by ReactJS"
//         onClick={() => filter("react")}
//       >
//         <SiReact />
//       </Button>
//       <Button
//         type="button"
//         className={filterBy === "PHP" ? "active" : null}
//         aria-label="Filter by PHP"
//         onClick={() => filter("php")}
//       >
//         <FaPhp />
//       </Button>
//     </FilterContainer>
//   </section>
// );

// export default ProjectsFilter;

import React from "react";
import { FilterContainer, Button, FilterHeading } from "./ProjectsFilterStyles";
import { SiReact, SiJavascript, SiNodedotjs, SiMongodb, SiNextdotjs } from "react-icons/si";

const ProjectsFilter = ({ filter, filterBy }) => (
  <section>
    <FilterHeading>
      Filtered by: <b>{filterBy}</b>
    </FilterHeading>
    <FilterContainer>
      <Button
        type="button"
        className={filterBy === "All" ? "active" : null}
        aria-label="Filter by All"
        onClick={() => filter("All")}
      >
        All
      </Button>
      <Button
        type="button"
        className={filterBy === "JavaScript" ? "active" : null}
        aria-label="Filter by JavaScript"
        onClick={() => filter("JavaScript")}
      >
        <SiJavascript />
      </Button>
      <Button
        type="button"
        className={filterBy === "React" ? "active" : null}
        aria-label="Filter by React"
        onClick={() => filter("React")}
      >
        <SiReact />
      </Button>
      <Button
        type="button"
        className={filterBy === "Node.js" ? "active" : null}
        aria-label="Filter by Node.js"
        onClick={() => filter("Node.js")}
      >
        <SiNodedotjs />
      </Button>
      <Button
        type="button"
        className={filterBy === "MongoDB" ? "active" : null}
        aria-label="Filter by MongoDB"
        onClick={() => filter("MongoDB")}
      >
        <SiMongodb />
      </Button>
      <Button
        type="button"
        className={filterBy === "Next.js" ? "active" : null}
        aria-label="Filter by Next.js"
        onClick={() => filter("Next.js")}
      >
        <SiNextdotjs />
      </Button>
    </FilterContainer>
  </section>
);

export default ProjectsFilter;
