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
    <div id ="scrollable-div" className={darkMode ? "" : "dark"}>
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
                    onClick={
                      ()=> setDarkMode(!darkMode)
                    }
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
            <div className="flex justify-center">
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
              <p className="flex justify-center text-slate-900 dark:text-gray-100 mb-44 ">
                Im a first year Systems Design Engineering student at the
                University of Waterloo currently searching for winter 2023
                co-ops.
                <br />
                Im currently
              </p>
            </div>
            <div class="flex justify-start  ">
              <Projectinformation
                name="Market research Paper "
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
                photo="/rzBusinessIAphoto.png"
                skills={["Research", "Business Managemnt"]}
              />
              <Projectinformation
                name="Restaurant Finder App"
                projDescrip="Restaurant mapping web application"
                link="https://github.com/notzree/uwfoodmap"
                photo="/rzFoodAppPhoto.png"
              ></Projectinformation>
            </div>
          </section>
        </main>  
    </div>

  );
}
