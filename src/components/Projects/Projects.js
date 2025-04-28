
import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { GridContainer } from './ProjectsStyles';
import { ExternalLinks } from "../Cards/CardStyles";
import ProjectCard from "../Cards/ProjectCard";

// Projects data updated with Vital-Aid, Spotify Clone, and eCommerce App
const projects = [
  {
    id: 1,
    order: 1,
    title: "Vital-Aid",
    description:
      "A real-time health assistance platform built with Next.js, Node.js, Socket.IO, Google Auth, AWS S3, and TanStack Query. Features include doctor-patient chat, booking system, and admin dashboard.",
    image: "/images/vitalaid.jpg",
    tags: ["Next.js", "Node.js", "Socket.IO", "AWS S3", "Redux", "TypeScript"],
    source: "https://github.com/Vital-Aid/Vital_Aid",
    visit: "https://vitalaid-snr.vercel.app/",
  },
  {
    id: 2,
    order: 2,
    title: "Spotify Clone",
    description:
      "A full-stack music streaming application with custom backend, JWT authentication, Cloudinary media storage, and Redux for global state management.",
    image: "/images/spotify-clone.png",
    tags: ["React", "Node.js", "MongoDB", "Redux", "Cloudinary"],
    source: "https://github.com/mohammedshahidc/spotify_Clone-",
    visit: "spotify-clone-rose-seven-51.vercel.app",
  },
  {
    id: 3,
    order: 3,
    title: "eCommerce Web App",
    description:
      "A full-featured eCommerce platform with product listings, user authentication, cart management, and Stripe for payments. Built with React, Node.js, Express, and MongoDB.",
    image: "/images/ecommerce.png",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    source: "https://github.com/mohammedshahidc/Shoe-E-commerce-Web-Application",
    visit: "shoe-e-commerce-web-application.vercel.app",
  },
];

const Projects = () => {
  return (
    <Section id="projects">
      <SectionDivider divider />
      <SectionTitle>Latest Projects</SectionTitle>
      <GridContainer>
        {projects
          .sort((a, b) => a.order - b.order)
          .map(card => <ProjectCard item={card} key={card.id} />)
          .slice(0, 3)
        }
      </GridContainer>
      
    </Section>
  );
};

export default Projects;
