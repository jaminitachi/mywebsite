"use client";

import React from "react";
import Image from "next/image";

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
            I am a{" "}
            <span className="text-blue-600 font-semibold">
              persistent developer
            </span>
            . I entered university after taking the K-SAT for the fifth time
            while serving in the military. Despite various failures, I continue
            to challenge myself with{" "}
            <span className="text-blue-600 font-semibold">resilience</span>.
          </p>
          <p className="mt-2 text-lg text-gray-700">
            I also aim for a{" "}
            <span className="text-blue-600 font-semibold">
              rapid learning curve
            </span>
            . Although I started coding in March 2023, I quickly improved my
            skills by reading papers, studying my major, and working on various
            projects with AI like GPT. I believe that a skilled developer should
            be able to do the work of someone with twice their experience.
          </p>
          <div className="flex mt-4">
            <a
              href="https://sites.google.com/view/yonsei-medisyslab/home?authuser=0"
              className="mx-2 text-gray-500 hover:text-gray-900"
            >
              🎓
            </a>
            <a
              href="https://jamintachi.tistory.com"
              className="mx-2 text-gray-500 hover:text-gray-900"
            >
              🔗
            </a>
            <a
              href="mailto:limdehan@gmail.com"
              className="mx-2 text-gray-500 hover:text-gray-900"
            >
              📧
            </a>
          </div>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Education</h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-xl font-semibold text-gray-900">
            Yonsei University, Seoul
          </h3>
          <p className="text-gray-700">March 2023 - Present</p>
          <p className="text-gray-700">B.S. in Artificial Intelligence</p>
          <p className="text-gray-700">
            B.S. in Management (Interdisciplinary Major)
          </p>
          <p className="text-gray-700 font-semibold">GPA: 3.86/4.30</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Scholarships</h3>
          <div className="mb-4">
            <p className="text-gray-700 font-semibold">
              Sinla Holdings Scholarship
            </p>
            <p className="text-gray-700">March 2024 - Present</p>
            <p className="text-gray-700">
              Full tuition scholarship from Sinla Culture Scholarship
              Foundation.
            </p>
          </div>
          <div>
            <p className="text-gray-700 font-semibold">Woonhae Scholarship</p>
            <p className="text-gray-700">March 2024 - November 2024</p>
            <p className="text-gray-700">
              Scholarship of ₩8,000,000 for living expenses from Woonhae
              Scholarship Foundation.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Research Interests
        </h2>

        <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 pr-4">
              <h3 className="text-xl font-semibold text-gray-900">
                LDCT Denoising
              </h3>
              <p className="text-gray-700 mb-2">
                Currently working on LDCT (Low-Dose Computed Tomography)
                denoising at Professor Jongwon Baek's laboratory at Yonsei
                University. The project involves:
              </p>
              <ul className="list-disc pl-5 mb-2">
                <li>
                  Comparing NDCT and LDCT using models such as Red-CNN, U-Net,
                  and U-Former
                </li>
                <li>
                  Implementing advanced denoising techniques to improve image
                  quality
                </li>
                <li>
                  Analyzing the impact of different model architectures on
                  denoising performance
                </li>
              </ul>
              <p className="text-gray-700">
                Current focus: Exploring Language-engaged Dual-space Alignment
                as described in{" "}
                <a
                  href="https://arxiv.org/pdf/2403.06128"
                  className="text-blue-500 hover:underline"
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
                alt="LDCT Denoising Example"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 pr-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Advanced RAG (Retrieval-Augmented Generation)
              </h3>
              <p className="text-gray-700 mb-2">
                Developing an interactive novel application inspired by
                Microsoft's Graph RAG. Key aspects include:
              </p>
              <ul className="list-disc pl-5 mb-2">
                <li>
                  Implementing graph-based knowledge retrieval for context-aware
                  story generation
                </li>
                <li>
                  Exploring methods to endow LLMs with long-term memory
                  capabilities
                </li>
                <li>
                  Designing user interfaces for seamless interaction with
                  AI-generated narratives
                </li>
              </ul>
              <p className="text-gray-700">
                Based on research details in{" "}
                <a
                  href="https://arxiv.org/pdf/2404.16130"
                  className="text-blue-500 hover:underline"
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
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Experience</h2>

        <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 pr-4">
              <h3 className="text-xl font-semibold text-gray-900">
                D-engine (NLP) Outsourced Project for Seoul City Government
              </h3>
              <p className="text-gray-700 mb-2">
                Role: Developer, Model Researcher (September 2023 - February
                2024)
              </p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>
                  Developed and implemented D-engine, an NLP system for keyword
                  extraction, summarization, and document similarity for Seoul
                  City Government.
                </li>
                <li>
                  Conducted research on models such as KE-T5, XLM Bert,
                  Kobigberd, and Mistral 7B to optimize NLP tasks.
                </li>
                <li>
                  Handled Docker image builds and created APIs using FastAPI
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
                    className="text-blue-600 hover:underline"
                  >
                    Version 2
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.dengine.co.kr/learn/api/v3"
                    className="text-blue-600 hover:underline"
                  >
                    Version 3
                  </a>
                  .
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
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 pr-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Kkini (Frontend) Project
              </h3>
              <p className="text-gray-700 mb-2">
                Role: Team Leader and Developer (July 2023 - November 2023)
              </p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>
                  Led a team of first-year students in developing a web and app
                  platform for delivery services in underserved areas.
                </li>
                <li>
                  Integrated Firebase for backend services and used PWA Builder
                  for Android web app development.
                </li>
                <li>
                  Created user-facing web pages using React, and established a
                  CI/CD pipeline with Github and Vercel.
                </li>
                <li>
                  Implemented a phone number-based authentication system for
                  elderly users.
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
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
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 pr-4">
              <h3 className="text-xl font-semibold text-gray-900">
                LDCT Denoising (CV) Project
              </h3>
              <p className="text-gray-700 mb-2">
                Role: Research Intern (March 2024 - Present)
              </p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>
                  Used RedCNN, U-Net, and U-Former models for denoising CT
                  images. Initial metrics (RMSE, SSIM, PSNR) did not improve
                  despite visually acceptable results.
                </li>
                <li>
                  Identified issues with windowing (vmin, vmax) and realized
                  that not combining VGG loss with L1 loss was a contributing
                  factor.
                </li>
                <li>
                  Combined VGG loss and L1 loss in an 8:2 ratio, improving
                  U-Former's RMSE from 43.5 to 26.6, and U-Net's RMSE to 26.2.
                </li>
                <li>
                  By doubling the dataset, U-Former's RMSE further improved to
                  24.4 due to its transformer architecture.
                </li>
                <li>
                  Currently researching LDCT denoising using Language-engaged
                  Dual-space Alignment.
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 mt-4 md:mt-0 relative h-65 w-full">
              <Image
                src={IMAGE_URLS.ldct}
                alt="LDCT Denoising Project"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 pr-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Yonsei AWS Competition
              </h3>
              <p className="text-gray-700 mb-2">
                Role: Product Owner and Developer Lead (August 2024 - Present)
              </p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>
                  Initially developed a generative AI tool to encourage reading
                  and discussions among teens, winning 1st place and securing
                  one year of free AWS services.
                </li>
                <li>
                  Pivoted to an interactive novel project using GraphRAG,
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
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 pr-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Yonsei Computer Club (YCC)
              </h3>
              <p className="text-gray-700 mb-2">
                Role: Executive Member (February 2024 - Present)
              </p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>
                  Led a backend study on Node.js and participated in developing
                  a diary app using React Native, currently under app store
                  review.
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
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 pr-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Prometeus AI Club (University Union Club)
              </h3>
              <p className="text-gray-700 mb-2">
                Role: Member (February 2024 - Present)
              </p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>
                  Studied foundational papers in deep learning and computer
                  vision (e.g., LSTM, Transformer, BERT, YOLO, RCNN, Vision
                  Transformer).
                </li>
                <li>
                  Currently leading the development of an LLM agent for
                  automated web scraping and information retrieval.
                </li>
                <li>
                  Developed a food classification model using an ensemble of
                  Wide ResNet and FixRes, achieving 1st place in Prometeus AI
                  Club's food classification competition.
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
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Tutor</h3>
          <p className="text-gray-700 mb-2">
            Provided tutoring in linear algebra, machine learning, and deep
            learning fundamentals to freshman students at Yonsei University,
            Prometeus Club.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Skills</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Python, JavaScript, React.js, Node.js</li>
          <li>Docker, AWS EC2, Firebase, FastAPI, GitHub, Vercel</li>
        </ul>
      </section>
    </div>
  );
}
