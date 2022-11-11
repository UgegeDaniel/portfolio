import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { FaGoogle } from 'react-icons/fa'
import profile from '../public/img/profile3.png'
import goq from '../public/img/goq.png'
import jakk from '../public/img/jakk.png'
import { useState } from 'react';
const projects = [{
 id: 1,
 img: goq,
 text: `This is a React app that displays 
 notable quotes by our favorite characters
 from the HBO series &apos;Game of Thrones&apos;.
 Its a simple app that demostrates the basic 
 features of the React library.`,
 title: 'Game of Quotes',
 githubUrl: 'https://github.com/UgegeDaniel/game-of-quotes',
 deployedUrl: 'https://game-of-quotes.pages.dev/'
},{
 id: 1,
 img: goq,
 text: `This is a React app that displays 
 notable quotes by our favorite characters
 from the HBO series &apos;Game of Thrones&apos;.
 Its a simple app that demostrates the basic 
 features of the React library.`,
 title: 'Game of Quotes',
 githubUrl: 'https://github.com/UgegeDaniel/game-of-quotes',
 deployedUrl: 'https://game-of-quotes.pages.dev/'
}           
]
export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>UGEGE DANIEL PORTFOLIO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-teal-300"> &#60; UDanny / &#62;</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl dark:text-white" onClick={() => setDarkMode(!darkMode)} />
              </li>
              <li><a href="#" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>RESUME</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-300'>Ugege Daniel</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Frontend web developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl mx-auto max-w-xl dark:text-teal-300'>I am passionate about writing clean code that is reuseable, centred around user-friendliness and folows the DRY principle</p>
          </div>
          <div className='text-5xl py-3 flex justify-center align-center gap-16 text-center px-2'>
            <a href=""  rel="noreferrer" target="_blank" className='text-google-red flex flex-col justify-center align-center'>
              <FaGoogle className='text-center mx-auto' /><p className='text-xs'>ugege62@gmail.com</p></a>
            <a href="https://github.com/ugegedaniel" rel="noreferrer" target="_blank" className='text-github-blue mx-auto flex flex-col justify-center align-center'>
              <AiFillGithub /><p className='text-xs'>Ugege Daniel</p></a>
            <a href="https://www.linkedin.com/in/daniel-ugege-50a499227" rel="noreferrer" target="_blank" className='text-linkedin-blue mx-auto flex flex-col justify-center align-center'>
              <AiFillLinkedin /><p className='text-xs'>Ugege Daniel</p></a>
            <a href="https://twitter.com/ugege_daniel" rel="noreferrer" target="_blank" className='text-twitter-blue mx-auto flex flex-col justify-center align-center'>
              <AiFillTwitterCircle /><p className='text-xs'>@U_Danny</p></a>
          </div>
        </section>
     
        <section >
          <h3 className="text-3xl py-1 dark:text-white text-center">WEB DEVELOPMENT PROJECTS</h3>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">

            {/* GAME OF Quotes */}
         {projects.map((project, index)=>(
           <div className="text-center shadow-lg p-10 rounded-xl my-1 basis-1/3 flex-1">
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="p-2">
                  <Image className="rounded-t-xs mx-auto m-1" src={project.img} alt="" height={200} width={"100%"} />
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-goq-orange">{project.title}</h5>
                    <h6 className="mb-2 font-bold tracking-tight text-goq-orange">{project.catogory}</h6>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.text}</p>
                  <figcaption class="font-medium flex gap-2 justify-center">
                    <a href={project.githubUrl} rel="noreferrer" target="_blank">
                      <div class="text-goq-orange cursor-pointer "> Source Code
                      </div>
                    </a>
                    <a href={project.deployedUrl} rel="noreferrer" target="_blank">
                      <div class="text-slate-700 dark:text-goq-orange-light">
                        Deployed site
                      </div>
                    </a>
                  </figcaption>
                </div>
              </div>
            </div>
))}
            

            {/* JAKK FRONTEND*/}
            <div className="text-center shadow-lg p-10 rounded-xl my-1 basis-1/3 flex-1">
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="p-2">
                  <Image className="rounded-t-xs mx-auto m-1" src={jakk} alt="" height={200} width={"100%"} />
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-jakk-green">JAKK</h5>
                    <h6 className="mb-2 font-bold tracking-tight text-jakk-green">FULL STACK PROJECT</h6>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">JAKK is a simple full stack application geared towards aiding students sitting for various O - Level Examinations with a progressive and accessible means of practicising. Students are required to sign up for a free account, take tests in over 17 subjects as their records over time are being displayed on a chart for a visual representation of their progress.</p>
                  <figcaption class="font-medium flex gap-2 justify-center">
                    <a href="https://github.com/UgegeDaniel/jakk-frontend" rel="noreferrer" target="_blank">
                      <div class="text-jakk-green cursor-pointer "> Source Code
                      </div>
                    </a>
                    <a href="https://jakk-frontend.pages.dev/" rel="noreferrer" target="_blank">
                      <div class="text-slate-700 dark:text-jakk-green-light">
                        Deployed site
                      </div>
                    </a>
                  </figcaption>
                </div>
              </div>
            </div>


            {/* JAKK BACKEND*/}
            <div className="text-center shadow-lg p-10 rounded-xl my-1 basis-1/3 flex-1">
              <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="p-2">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-jakk-green">JAKK BACKEND </h5>
                    <h6 className="mb-2 font-bold tracking-tight text-jakk-green">BACKEND PROJECT</h6>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This is an authentication API with signup and login routes. Built with Express, Node and Mongoose (Mongo DB) This API gives allows for sign up, login and update history post requests.</p>
                  <figcaption class="font-medium flex gap-2 justify-center">
                    <a href="https://github.com/UgegeDaniel/jakk-backend" rel="noreferrer" target="_blank">
                      <div class="text-jakk-green cursor-pointer "> Source Code
                      </div>
                    </a>
                    <a href="https://jakk-backend.herokuapp.com" rel="noreferrer" target="_blank">
                      <div class="text-slate-700 dark:text-jakk-green-light">
                        Deployed site
                      </div>
                    </a>
                  </figcaption>
                </div>
              </div>
            </div>


          </div>
        </section>
      </main>
    </div>
  )
}
