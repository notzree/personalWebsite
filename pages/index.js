import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import styles from '../styles/Home.module.css'
import {AiFillLinkedIn, AiFillGithub,AiFillLinkedin  } from "react-icons/ai"
import { useState } from 'react';

export default function Home() {
const [darkMode,setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "" : "dark"}>
      <Head>
        <title>Richard Zhang</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10 dark:bg-slate-800 '>
        <section className=" min-h-screen ">
          <nav className=" pt-10 mb-12 flex justify-evenly">
            <ul className="flex items-center justify-evenly ">
              <li className='hover:bg-violet-300' ><BsFillMoonStarsFill   onClick={ ()=> setDarkMode(!darkMode)} 
              className="cursor-pointer text-xl"/></li>
              <li><a href="/websiteResume.pdf" target="_blank" className=" bg-gradient-to-r from-violet-400 to-purple-600 text-white px-4 py-2 rounded-md mx-8 dark:text-gray-200 font-mono">resume</a></li>
              <li><a href = 'https://github.com/notzree'className='cursor-pointer text-2'><AiFillGithub className='text-2xl '/></a></li> 
              <li><a href = 'https://www.linkedin.com/in/richard-zhang-318861217/' className='cursor-pointer text-2'> <AiFillLinkedin className='text-2xl mx-8'/>
                </a></li> 
            </ul>
          </nav>
          <div className='flex justify-center'>
          <h1 className="mb-2 font-mono text-4xl text-slate-900 dark:text-gray-100 md:text-6xl">
                  hi, I&apos;m <br className="block md:hidden" />
            <span className="relative">
              <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent">
                  Richard <span className="text-3xl md:text-5xl"></span>
                </span>
              <span className="{`${styles.cursor} absolute -bottom-0 right-0 -top-1 inline-block bg-white dark:bg-slate-800 w-96 animate-type will-change`}">
              </span>
            </span>
          </h1>
          </div>
          <div>
          
          </div>
        </section>
      </main>
    </div>
  )
}
