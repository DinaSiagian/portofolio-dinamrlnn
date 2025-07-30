"use client";

import ProjectCard from "@/components/ProjectCard";
import AnimatedElement from "@/components/AnimatedElement";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

// Data proyek yang lengkap dimasukkan kembali ke sini
const projectsData: Project[] = [
  {
    title: "HealthyDash",
    description:
      "I built HealthyDash as a solo project to simplify healthy meal ordering and boost online visibility for health businesses through a user-friendly design.",
    imageUrl: "/images/healthydash.png",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Aroma Kopi Di Sudut Kota",
    description:
      "A user-friendly landing page for online coffee ordering. This solo project empowers coffee shops to boost efficiency and sales.",
    imageUrl: "/images/aroma-kopi.png",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "agiantravel",
    description:
      "I built AgianTravel as a solo project for a client to promote tourism in Bintan. This interactive website simplifies travel ticket bookings and supports local drivers.",
    imageUrl: "/images/agiantravel.png",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "StudyBuddyku",
    description:
      "A solo project developing an intelligent study planner that helps students stay focused and organized through smart scheduling, task prioritization, and the Pomodoro Technique.",
    imageUrl: "/images/studybuddyku.png",
    tags: ["TypeScript", "React", "Tailwind CSS"],
  },
  {
    title: "Rumah Kreatif Toba",
    description:
      "Solo UI redesign of the Rumah Kreatif Toba website in Figma, aimed at enhancing functionality.",
    imageUrl: "/images/rumah-kreatif-toba.png",
    tags: ["Figma", "UI Design"],
  },
  {
    title: "Koperasi Bintang Tapanuli",
    description:
      "A team project where I designed the UI for Koperasi Bintang Tapanuli, aiming to support local business development.",
    imageUrl: "/images/koperasi-bintang.png",
    tags: ["Figma", "UI Design", "Team Project"],
  },
  {
    title: "Go Meat",
    description:
      "I contributed my UI design skills to the Go Meat team project, aiming to introduce Meat Village's stunning, yet hidden, natural beauty to a broader audience.",
    imageUrl: "/images/go-meat.png",
    tags: ["Figma", "UI Design", "Team Project"],
  },
];

export default function Projects() {
  return (
    <div className="container mx-auto px-6 py-12">
      <AnimatedElement>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">My Projects</h1>
          <p className="text-lg text-gray-600 mt-2">
            Explore a selection of my recent projects, showcasing my expertise.
          </p>
        </div>
      </AnimatedElement>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <AnimatedElement key={project.title} delay={index * 0.1}>
            <ProjectCard {...project} />
          </AnimatedElement>
        ))}
      </div>
    </div>
  );
}
