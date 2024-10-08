"use client";

import React from "react";
import Image from "next/image";
import SkillCard from "./components/SkillCard";

// 이미지 URL을 상수로 정의
const IMAGE_URLS = {
  advancedrag: "https://imgur.com/KhjCcE1.jpg",
  aws: "https://imgur.com/D8zi4ka.jpg",
  idrsoft: "https://imgur.com/Htq6vwk.jpg",
  kkini: "https://imgur.com/TeFrJ5s.jpg",
  ldct: "https://imgur.com/W3ORpPp.jpg",
  me: "https://imgur.com/89cmhJi.jpg",
  prometeus: "https://imgur.com/blH1XLa.jpg",
  ycc: "https://imgur.com/wifD4mm.jpg",
};

export default function Home() {
  return (
    <div className="container mx-auto p-6 bg-white">
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="relative w-full md:w-[300px] h-[300px] mb-6 md:mb-0 md:mr-6">
          <Image
            src={IMAGE_URLS.me}
            alt="Profile Picture"
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            style={{ objectFit: "cover" }}
            className="rounded-lg"
            quality={100}
          />
        </div>
        <div className="md:ml-6 flex-1">
          <h1 className="text-4xl font-extrabold text-gray-900">Daehan Lim</h1>
          <p className="mt-2 text-lg text-gray-700">
            I am a <strong>persistent developer</strong> with unwavering
            determination. At the age of 24, I prepared for and took the
            university entrance exam while serving in the military. Despite
            facing numerous challenges, I ultimately overcame them all. This
            journey has solidified my
            <strong> resilience</strong> and ability to bounce back from
            setbacks, traits that I bring to every aspect of my work and
            personal growth.
          </p>
          <p className="mt-2 text-lg text-gray-700">
            I also aim for a <strong>rapid learning curve</strong>. Although I
            started coding in March 2023, I quickly improved my skills by{" "}
            <em>
              reading papers, studying my major, and working on various projects
              with AI like GPT
            </em>
            . I believe that a skilled developer should be able to do the work
            of someone with <strong>twice their experience.</strong>
          </p>
          <div className="flex mt-4">
            <a
              href="https://sites.google.com/view/yonsei-medisyslab/home?authuser=0"
              className="mx-2 text-gray-500 hover:text-gray-900"
              title="University Lab"
            >
              🎓
            </a>
            <a
              href="https://jamintachi.tistory.com"
              className="mx-2 text-gray-500 hover:text-gray-900"
              title="Blog"
            >
              🔗
            </a>
            <a
              href="mailto:limdehan@gmail.com"
              className="mx-2 text-gray-500 hover:text-gray-900"
              title="Email"
            >
              📧
            </a>
          </div>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b pb-2">
          Education
        </h2>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:border-indigo-500 hover:border-2">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Yonsei University, Seoul
          </h3>
          <p className="text-sm text-gray-600 italic mb-3">
            March 2023 - Present
          </p>
          <hr className="border-t border-gray-300 my-3" />
          <p className="text-gray-700 font-medium">
            <strong>B.S. in Artificial Intelligence</strong>
          </p>
          <p className="text-gray-700 font-medium mb-3">
            <strong>B.S. in Management</strong> (Interdisciplinary Major)
          </p>
          <p className="text-gray-700 font-semibold mt-2">
            GPA: <strong>3.86/4.30</strong>
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:border-indigo-500 hover:border-2">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Scholarships
          </h3>
          <hr className="border-t border-gray-300 mb-6" />
          <div className="mb-8 bg-white p-4 rounded-lg shadow-sm transform transition duration-500 ease-in-out hover:scale-102 hover:shadow-md">
            <p className="text-gray-800 font-bold text-lg mb-2">
              Sinla Holdings Scholarship
            </p>
            <p className="text-sm text-gray-600 italic mb-3">
              March 2024 - Present
            </p>
            <p className="text-gray-700">
              <strong className="text-indigo-600">
                Full tuition scholarship
              </strong>{" "}
              from Sinla Culture Scholarship Foundation.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm transform transition duration-500 ease-in-out hover:scale-102 hover:shadow-md">
            <p className="text-gray-800 font-bold text-lg mb-2">
              Woonhae Scholarship
            </p>
            <p className="text-sm text-gray-600 italic mb-3">
              March 2024 - November 2024
            </p>
            <p className="text-gray-700">
              Scholarship of{" "}
              <strong className="text-indigo-600">
                ₩8,000,000 for living expenses
              </strong>{" "}
              from Woonhae Scholarship Foundation.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b pb-2">
          Research Interests
        </h2>

        <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:border-indigo-500 hover:border-2">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 pr-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Medical Image Processing
              </h3>
              {/* 구분선 추가 */}
              <hr className="border-t border-gray-300 mb-4" />
              <p className="text-gray-700 mb-2 font-medium">
                Currently working on{" "}
                <span className="font-semibold text-indigo-600">
                  LDCT (Low-Dose Computed Tomography) denoising
                </span>{" "}
                at Professor Jongduck Baek&apos;s laboratory at Yonsei
                University. The project involves:
              </p>
              <ul className="list-disc pl-5 mb-2 space-y-1">
                <li className="text-gray-700">
                  Implementing{" "}
                  <span className="font-semibold">
                    advanced denoising techniques
                  </span>{" "}
                  to improve image quality
                </li>
                <li className="text-gray-700">
                  Analyzing the impact of different model architectures on
                  denoising performance
                </li>
              </ul>
              <p className="text-gray-700 font-medium">
                Current focus: Exploring{" "}
                <span className="font-semibold text-indigo-600">
                  Language-engaged Dual-space Alignment
                </span>{" "}
                as described in{" "}
                <a
                  href="https://arxiv.org/pdf/2403.06128"
                  className="text-blue-500 hover:underline font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  this paper
                </a>
                .
              </p>
            </div>
            <div className="md:w-1/3 mt-4 md:mt-0 relative h-48 w-full">
              <Image
                src={IMAGE_URLS.ldct}
                alt=" Example"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:border-indigo-500 hover:border-2">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 pr-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Advanced RAG (Retrieval-Augmented Generation)
              </h3>
              {/* 구분선 추가 */}
              <hr className="border-t border-gray-300 mb-4" />
              <p className="text-gray-700 mb-2 font-medium">
                Developing an{" "}
                <span className="font-semibold text-indigo-600">
                  interactive novel application
                </span>{" "}
                inspired by Microsoft&apos;s Graph RAG. Key aspects include:
              </p>
              <ul className="list-disc pl-5 mb-2 space-y-1">
                <li className="text-gray-700">
                  Implementing{" "}
                  <span className="font-semibold">
                    graph-based knowledge retrieval
                  </span>{" "}
                  for context-aware story generation
                </li>
                <li className="text-gray-700">
                  Exploring methods to endow LLMs with{" "}
                  <span className="font-semibold text-indigo-600">
                    long-term memory capabilities
                  </span>
                </li>
                <li className="text-gray-700">
                  Designing user interfaces for seamless interaction with
                  AI-generated narratives
                </li>
              </ul>
              <p className="text-gray-700 font-medium">
                Based on research details in{" "}
                <a
                  href="https://arxiv.org/pdf/2404.16130"
                  className="text-blue-500 hover:underline font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  this research
                </a>
                .
              </p>
            </div>
            <div className="md:w-1/3 mt-4 md:mt-0 relative h-48 w-full">
              <Image
                src={IMAGE_URLS.advancedrag}
                alt="Advanced RAG"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b pb-2">
          Projects
        </h2>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:border-indigo-500 hover:border-2">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 pr-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                D-engine (NLP) Outsourced Project for Seoul City Government
              </h3>
              <p className="text-gray-700 mb-3">
                Role: <strong>Developer, Model Researcher</strong> (September
                2023 - February 2024)
              </p>
              {/* 구분선 추가 */}
              <hr className="border-t border-gray-300 mb-4" />
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  Developed and implemented{" "}
                  <strong>
                    D-engine, an NLP system for keyword extraction,
                    summarization, and document similarity
                  </strong>{" "}
                  for Seoul City Government.
                </li>
                <li>
                  Conducted research on models such as{" "}
                  <strong>KE-T5, XLM Bert, Kobigberd, and Mistral 7B</strong> to
                  optimize NLP tasks.
                </li>
                <li>
                  Handled{" "}
                  <strong>
                    Docker image builds and created APIs using FastAPI
                  </strong>{" "}
                  while optimizing the system via prompt engineering.
                </li>
                <li>
                  Enhanced keyword extraction capabilities from single words to
                  multi-word phrases.
                </li>
                <li>
                  API documentation:{" "}
                  <a
                    href="https://www.dengine.co.kr/learn/api/v2"
                    className="text-indigo-600 hover:underline font-medium"
                  >
                    Version 2
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.dengine.co.kr/learn/api/v3"
                    className="text-indigo-600 hover:underline font-medium"
                  >
                    Version 3
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 mt-4 md:mt-0 relative h-58 w-full">
              <Image
                src={IMAGE_URLS.idrsoft}
                alt="D-engine Project"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:border-indigo-500 hover:border-2">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 pr-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Kkini (Frontend) Project
              </h3>
              <p className="text-gray-700 mb-3">
                Role: <strong>Team Leader and Developer</strong> (July 2023 -
                November 2023)
              </p>
              {/* 구분선 추가 */}
              <hr className="border-t border-gray-300 mb-4" />
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  Led a team of first-year students in developing a{" "}
                  <strong>web and app platform for delivery services</strong>{" "}
                  targeting underserved areas as part of an in-school contest.
                </li>
                <li>
                  Integrated <strong>Firebase for backend services</strong> and
                  used PWA Builder for Android web app development.
                </li>
                <li>
                  Created user-facing web pages using <strong>React</strong>,
                  and established a CI/CD pipeline with Github and Vercel.
                </li>
                <li>
                  Implemented a{" "}
                  <strong>phone number-based authentication system</strong> for
                  elderly users.
                </li>
                <li>
                  <a
                    href="#"
                    className="text-indigo-600 hover:underline font-medium"
                  >
                    Project retrospective
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 mt-4 md:mt-0 relative h-58 w-full">
              <Image
                src={IMAGE_URLS.kkini}
                alt="Kkini Project"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:border-indigo-500 hover:border-2">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 pr-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Yonsei AWS Competition
              </h3>
              <p className="text-gray-700 mb-3">
                Role: <strong>Product Owner and Developer Lead</strong> (August
                2024 - Present)
              </p>
              {/* 구분선 추가 */}
              <hr className="border-t border-gray-300 mb-4" />
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  Initially developed a{" "}
                  <strong>generative AI tool to encourage reading</strong> and
                  discussions among teens, winning 1st place and securing one
                  year of free AWS services.
                </li>
                <li>
                  Pivoted to an{" "}
                  <strong>interactive novel project using GraphRAG</strong>,
                  CommonsenseGraph, and LLM where users influence the storyline
                  by interacting with characters represented as graphs.
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 mt-4 md:mt-0 relative h-48 w-full">
              <Image
                src={IMAGE_URLS.aws}
                alt="AWS Competition Project"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b pb-2">
          Clubs and Activities
        </h2>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:border-indigo-500 hover:border-2">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 pr-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Yonsei Computer Club (YCC)
              </h3>
              <p className="text-gray-700 mb-3">
                Role: <strong>Executive Member</strong> (February 2024 -
                Present)
              </p>
              {/* 구분선 추가 */}
              <hr className="border-t border-gray-300 mb-4" />
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  Led a <strong>backend study on Node.js</strong> and
                  participated in developing a diary app using React Native,
                  currently under app store review.
                </li>
                <li>
                  Contributed to building a developer community within the club
                  as an executive member.
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 mt-4 md:mt-0 relative h-48 w-full">
              <Image
                src={IMAGE_URLS.ycc}
                alt="Yonsei Computer Club"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:border-indigo-500 hover:border-2">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 pr-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Prometeus AI Club (University Union Club)
              </h3>
              <p className="text-gray-700 mb-3">
                Role: <strong>Member</strong> (February 2024 - Present)
              </p>
              {/* 구분선 추가 */}
              <hr className="border-t border-gray-300 mb-4" />
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  Studied foundational papers in deep learning and computer
                  vision (e.g.,{" "}
                  <strong>
                    LSTM, Transformer, BERT, YOLO, RCNN, Vision Transformer
                  </strong>
                  ).
                </li>
                <li>
                  Currently leading the development of an{" "}
                  <strong>LLM agent for automated web scraping</strong> and
                  information retrieval.
                </li>
                <li>
                  Developed a food classification model using an ensemble of
                  Wide ResNet and FixRes, achieving{" "}
                  <strong>
                    1st place in Prometeus AI Club&apos;s food classification
                    competition
                  </strong>
                  .
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 mt-4 md:mt-0 relative h-48 w-full">
              <Image
                src={IMAGE_URLS.prometeus}
                alt="Prometeus AI Club"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6 transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl hover:border-indigo-500 hover:border-2">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Tutor</h3>
          <p className="text-gray-700">
            Provided tutoring in{" "}
            <strong>
              linear algebra, machine learning, and deep learning fundamentals
            </strong>{" "}
            to freshman students at Yonsei University, Prometeus Club.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b pb-2">
          Skills
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Programming Languages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {["Python", "JavaScript", "TypeScript"].map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Frameworks & Libraries
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {["React.js", "FastAPI", "PyTorch"].map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Tools & Platforms
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {["Docker", "AWS", "Firebase", "GitHub", "Vercel"].map(
                (skill, index) => (
                  <SkillCard key={index} skill={skill} />
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
