"use client";

import styles from "./about.module.css";
import AnimatedElement from "@/components/AnimatedElement";

interface Certificate {
  year: number | string;
  title: string;
  description: string;
}

const certificates: Certificate[] = [
  // Data sertifikat Anda...
  {
    year: 2025,
    title: "C Programming Bootcamp",
    description:
      "This certification demonstrates a solid foundation in C Programming, covering fundamental concepts and practical application.",
  },
  {
    year: 2025,
    title: "Cross Platform Application Development",
    description:
      "This certification validates my ability to develop cross-platform applications, essential for reaching diverse user bases.",
  },
  {
    year: 2025,
    title: "Introduction Data Science With R",
    description:
      "This certification highlights my foundational understanding of Data Science concepts using R, crucial for data analysis and statistical modeling.",
  },
  {
    year: 2025,
    title: "Introduction to Software Engineer",
    description:
      "This certificate establishes my understanding of software engineering principles, from design to deployment.",
  },
  {
    year: 2025,
    title: "Self-Paced Azure AI Basic Fundamental",
    description:
      "This certification showcases my understanding of Azure AI fundamentals, including machine learning and cognitive services.",
  },
  {
    year: 2025,
    title: "Website Development - Back End",
    description:
      "This certification confirms my expertise in back-end web development, focusing on server-side logic, databases, and APIs.",
  },
  {
    year: 2025,
    title: "Data Visualization",
    description:
      "This certification solidifies my expertise in transforming complex data into clear, impactful visual stories, enabling better insights and decision-making.",
  },
  {
    year: 2025,
    title: "React Front End",
    description:
      "This certificate demonstrates my proficiency in building dynamic and responsive user interfaces using React, focusing on modern web development practices.",
  },
  {
    year: 2025,
    title: "Python Programming",
    description:
      "This certificate signifies my strong foundation in Python programming, essential for data analysis, web development, and automation tasks.",
  },
  {
    year: 2025,
    title: "Responsive Website Design",
    description:
      "With this certification, I've honed my skills in creating websites that seamlessly adapt to any screen size, ensuring an optimal user experience across devices.",
  },
  {
    year: 2025,
    title: "Web Development: Front End",
    description:
      "This certification demonstrates my proficiency in front-end web development, focusing on user interfaces and experiences.",
  },
  {
    year: 2025,
    title: "Introduction to Programming",
    description:
      "A fundamental certification establishing my core understanding of programming concepts and logic, crucial for any development path.",
  },
  {
    year: 2025,
    title: "Introduction to UX Research",
    description:
      "This certificate highlights my ability to conduct effective UX research, gathering insights to create user-centric designs.",
  },
  {
    year: "2023/2024",
    title: "Del English Club",
    description:
      "My engagement and achievement in the Del English Club reflect my commitment to enhancing communication and language skills.",
  },
];

export default function About() {
  return (
    <div className={styles.container}>
      <AnimatedElement>
        <section className={styles.section}>
          <h1 className={styles.mainHeading}>About Me</h1>
          {/* Perbaikan: 'I'm' diubah menjadi 'I&apos;m' */}
          <p className={styles.bio}>
            I&apos;m a 5th-semester Information Systems student at the Del
            Institute of Technology with a strong passion for website design,
            UI/UX, data analysis, and software engineering. I enjoy turning
            ideas into intuitive digital experiences and am currently deepening
            my knowledge in designing user-centered websites and interfaces.
          </p>
        </section>
      </AnimatedElement>

      <AnimatedElement delay={0.1}>
        <section className={styles.section}>
          <h2 className={styles.subheading}>Education</h2>
          <div className={styles.educationEntry}>
            <h3>Del Institute of Technology</h3>
            <p>Bachelor&apos;s degree, Information Systems</p>
            <p className={styles.date}>Aug 2023 - Oct 2027</p>
          </div>
          <div className={styles.educationEntry}>
            <h3>SMA Negeri 1 Batam</h3>
            <p>Science</p>
            <p className={styles.date}>Jul 2020 - Jul 2023</p>
          </div>
        </section>
      </AnimatedElement>

      <AnimatedElement delay={0.2}>
        <section className={styles.section}>
          <h2 className={styles.subheading}>My Certificates & Achievements</h2>
          {/* Perbaikan: "Here's" dan "I've" diubah */}
          <p className={styles.description}>
            Here&apos;s a look at the certifications I&apos;ve earned, marking
            key achievements in my learning journey.
          </p>
          <ul className={styles.certificateList}>
            {certificates.map((cert) => (
              <li key={cert.title} className={styles.certificateItem}>
                <strong>
                  {cert.year} - {cert.title}
                </strong>
                <p>{cert.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </AnimatedElement>
    </div>
  );
}
