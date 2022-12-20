import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import styles from "../styles/Home.module.css";
import { AiFillLinkedIn, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useState } from "react";
import dynamic from "next/dynamic";

const Projectinformation = dynamic(
  () => import("./projectcomponents/Projectinformation"),
  { ssr: false }
); //Avoid hydration error by telling next to
//render this dynamic component on the server (for darkmode), watch htis: https://www.youtube.com/watch?v=9U1UG-bY8Cw if forget.

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div id="scrollable-div" className={darkMode ? "" : "dark"}>
      <Head>
        <title>Richard Zhang</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-slate-800 ">
        <section className=" min-h-screen ">
          <nav className=" pt-10 mb-12 flex justify-evenly">
            <ul className="flex items-center justify-evenly ">
              <li className="">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-xl"
                />
              </li>
              <li>
                <a
                  href="/websiteResume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className=" bg-gradient-to-r from-violet-400 to-purple-600 text-white px-4 py-2 rounded-md mx-8 dark:text-gray-200 font-mono"
                >
                  resume
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/notzree"
                  className="cursor-pointer text-2"
                >
                  <AiFillGithub className="text-2xl " />
                </a>
              </li>
              <li>
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
            <h1 className="mb-2 font-mono text-4xl text-slate-900 dark:text-gray-100 md:text-6xl">
              hi, I&apos;m <br className="block md:hidden" />
              <span className="relative">
                <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent">
                  Richard <span className="text-3xl md:text-5xl"></span>
                </span>
                <span className="{`${styles.cursor} absolute -bottom-0 right-0 -top-1 inline-block bg-white dark:bg-slate-800 w-96 animate-type will-change`}"></span>
              </span>
            </h1>
          </div>
          <div>
            <p className="flex justify-start text-slate-900 dark:text-gray-100 font-mono pl-24  ">
              Im studying&nbsp;
              <span class="underline decoration-violet-400 h-5">
                Systems Design Engineering
              </span>
              &nbsp;at the University of Waterloo with interests in software development and consulting. 
            </p>
            <br></br>
            <p className="flex justify-start text-slate-900 dark:text-gray-100  font-mono pl-24">
              Recently I've been...
            </p>
            <ul class="list-disc text-slate-900 dark:text-gray-100 font-mono pl-32">
              <li>expanding my full-stack skills with Next.js, Primsa, and PostgreSQL</li>
              <li>Learing how to deploy to Azure</li>
            </ul>
            <br></br>
            <p class = "flex justify-start text-slate-900 dark:text-gray-100  font-mono pl-24"> 
              and away from work, I've been...
            </p>
            <ul class="list-disc text-slate-900 dark:text-gray-100 font-mono pl-32 ">
              <li>Cultivating my passion for rock climbing</li>
              <li>Training to a 185 benchpress (25 pounds away)</li>
            </ul>
            <br></br>
            <p class = "flex justify-start text-slate-900 dark:text-gray-100  font-mono pl-24 mb-14">
              Here are some of my recent projects
            </p>
          </div>
          <div class="flex justify-start  ">
          <Projectinformation
              name="Restaurant Finder App"
              photo="/rzFoodAppPhoto.png"
              skills={[
                "React",
                "Javacsript",
                "Axios",
                "Material UI",
                "google-maps API",
              ]}
              projDescrip="Fetched restaurant and location data using Axios.js from google-maps API. 
                            Utilized react and Material-UI to develop a mobile-responsive web app. "
              link="https://github.com/notzree/uwfoodmap"
            />
            <Projectinformation
              name="Market research Paper "
              photo="/rzBusinessIAphoto.png"
              skills={["Research", "Business Management"]}
              projDescrip={[
                "Researched and analyzed ",
                // eslint-disable-next-line react/jsx-key
                <u>
                  <a href="https://www.rhmuaythai.com/">
                    Richmond Hill Muay Thais
                  </a>
                </u>,
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
