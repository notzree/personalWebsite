import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import styles from "../styles/Home.module.css";
import { AiFillLinkedIn, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { themeChange } from "theme-change";

const Projectinformation = dynamic(
  () => import("./projectcomponents/Projectinformation"),
  { ssr: false }
); //Avoid hydration error by telling next to
//render this dynamic component on the server (for darkmode), watch htis: https://www.youtube.com/watch?v=9U1UG-bY8Cw if forget.

export default function Home() {
  return (
    <div id="scrollable-div">
      <Head>
        <title>Richard Zhang</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-base-100 px-10  text-primary">
        <section className=" min-h-screen ">
          <nav className=" pt-10 mb-12 flex justify-evenly">
            <ul className="flex items-center justify-evenly ">
              <li className="hover:scale-125 transition ease-in-out hover:-translate-y-1 hover:rounded-md">
                <a
                  href="/websiteResume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className=" bg-gradient-to-r from-secondary to-primary text-black px-4 py-2 rounded-md mx-8 font-mono "
                >
                  resume
                </a>
              </li>
              <li className="hover:scale-125 transition ease-in-out hover:-translate-y-1 hover:rounded-md">
                <a
                  href="https://github.com/notzree"
                  className="cursor-pointer text-2"
                >
                  <AiFillGithub className="text-2xl " />
                </a>
              </li>
              <li className="hover:scale-125 transition ease-in-out hover:-translate-y-1 hover:rounded-md">
                <a
                  href="https://www.linkedin.com/in/richard-zhang-318861217/"
                  className="cursor-pointer text-2"
                >
                  {" "}
                  <AiFillLinkedin className="text-2xl mx-8" />
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex justify-start pl-24">
            <h1 className="mb-2 font-mono text-4xl text-accent  md:text-6xl">
              hi, I&apos;m Richard.
            </h1>
          </div>
          <div>
            <p className="flex justify-start text-secondary  font-mono pl-24  ">
              Im studying&nbsp;
              <span class="underline decoration-accent h-5">
                Systems Design Engineering
              </span>
              &nbsp;at the University of Waterloo with interests in fullstack
              software development and dApp development.
            </p>
            <br></br>
            <p className="flex justify-start text-secondary   font-mono pl-24">
              Recently I've been...
            </p>
            <ul class="list-disc text-secondary  font-mono pl-32">
              <li>
                expanding my full-stack skills with Next.js, Primsa, and
                Supabase
              </li>
              <li>Learing how to deploy to Azure</li>
            </ul>
            <br></br>
            <p class="flex justify-start text-secondary   font-mono pl-24">
              and away from work, I've been...
            </p>
            <ul class="list-disc text-secondary  font-mono pl-32 ">
              <li>Cultivating my passion for rock climbing</li>
              <li>Training to a 185 benchpress (25 pounds away)</li>
            </ul>
            <br></br>
            <p class="flex justify-start text-secondary   font-mono pl-24 mb-14">
              Here are some of my recent projects
            </p>
          </div>
          <div class="flex  justify-start pl-7 content-center ">
            <Projectinformation
            key = {1}
              name="Restaurant Finder App"
              photo="/rzFoodAppPhoto.png"
              skills={[
                "React",
                "Javascript",
                "Axios",
                "Material UI",
                "google-maps API",
              ]}
              projDescrip="Fetched restaurant and location data using Axios.js from google-maps API. 
                            Utilized react and Material-UI to develop a mobile-responsive web app. "
              link="https://github.com/notzree/uwfoodmap"
            />
            <Projectinformation
            key = {2}
              name="Persona Generator for Syde 161"
              photo="https://user-images.githubusercontent.com/118649285/209454385-c735ebee-7612-4e3c-b723-e01e29d8887d.png"
              skills={[
                "React",
                "Javascript",
                "Axios",
                "OpenAI API",
                "Tailwind",
              ]}
              projDescrip="Randomly generates user stories and persona's utilized in my SYDE 161 design course. Randomly generates profile, name, age, and other information, then uses Open Ai's Davinci text completion model to return an AI generated user story. "
              link = "https://github.com/notzree/personaGenerator"
            />

            <Projectinformation
            key = {3}
              name="Market research Paper "
              photo="/rzBusinessIAphoto.png"
              skills={["Research", "Business Management"]}
              projDescrip={[
                "Researched and analyzed " , 
                // eslint-disable-next-line react/jsx-key
                <u>
                  <a href="https://www.rhmuaythai.com/">
                    Richmond Hill Muay Thais
                  </a>
                </u> 
                 ,
                " online marketing strategies to optimize marketing spending in lieu of a new location opening",
              ]}
              link="/rzBusinessIA.pdf"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
