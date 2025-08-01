// file: app/page.tsx

import Image from "next/image";
import Link from "next/link";
import AnimatedElement from "@/components/AnimatedElement";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-150px)] px-6 text-center">
      <AnimatedElement>
        <Image
          src="/images/my-photo.jpg"
          alt="Photo of Dina Marlina Siagian"
          width={160}
          height={160}
          className="rounded-full mb-6 border-4 border-white shadow-lg"
          priority
        />
      </AnimatedElement>
      <AnimatedElement delay={0.1}>
        <h1 className="text-3xl md:text-5xl font-bold mb-2 text-gray-900">
          Hi, welcome to my portofolio
        </h1>
      </AnimatedElement>
      <AnimatedElement delay={0.2}>
        <p className="text-xl md:text-2xl mb-4 text-gray-700">
          I&apos;m Dina Marlina Siagian
        </p>
      </AnimatedElement>
      <AnimatedElement delay={0.3}>
        <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Driven by a passion for{" "}
          {/* Diubah dari green ke rose untuk tema marun */}
          <span className="font-semibold text-rose-800">
            Web Development
          </span>,{" "}
          <span className="font-semibold text-rose-800">Data Analysis</span>,
          and <span className="font-semibold text-rose-800">UI/UX Design</span>.
        </p>
      </AnimatedElement>
      <AnimatedElement delay={0.4}>
        <Link
          href="/projects"
          // Diubah dari green ke rose untuk tema marun
          className="bg-rose-700 text-white font-bold py-3 px-8 rounded-full hover:bg-rose-800 transition-colors duration-300 shadow-lg"
        >
          View My Projects
        </Link>
      </AnimatedElement>
    </div>
  );
}
