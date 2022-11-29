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
            <p className='flex justify-center text-slate-900 dark: text-gray-100 mb-72'>
              Insert About me here 
            </p>
          </div>
          <div className='flex justify-center  '>
          <div class=" max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 ">
            <a href="" >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Project Name</h5>
            </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Project Description</p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Link
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          </div>
          </div>
        </section>
      </main>
    </div>
  )
}
