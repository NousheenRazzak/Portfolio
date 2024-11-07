// import Header from "../header/header";
// import Footer from "../footer/footer";

// export default function About(){
//     return(
//         <div className="bg-slate-950">
//           <div className="w-4/6 m-auto">
//           <Header />

//           {/* Contact Section */}
//           <h1 className="text-center text-yellow-400 text-5xl font-bold my-20">Contact Me</h1>
//           <div className="rounded-[60px] bg-zinc-900 text-white p-10 my-10 text-xl"></div>

//           <Footer />
//           </div>
//         </div>
//     )
// }

import Image from "next/image";
import Header from "./header/header";
import Gesture from "@/public/Waving-hand-gestures.png.png";
import Profile from "@/public/Waving-hand-gestures.png.png";
import NextJS from "@/public/nextjs.png";
import Tailwind from "@/public/tailwind-css.png";
import ReactJS from "@/public/react.png";
import JavaScript from "@/public/javascript.png";
import Figma from "@/public/figma.png";
import VSCode from "@/public/visual-studio.png";
import Traveling from "@/public/airplane.png";
import Beach from "@/public/beach.png";
import Code from "@/public/code.png";
import Pizza from "@/public/pizza.png";
import Girl from "@/public/girl.png";
import Facebook from "@/public/facebook.png";
import LinkedIn from "@/public/linkedin.png";
import Twitter from "@/public/twitter.png";
import Gmail from "@/public/gmail.png";
import Footer from "./footer/footer";
import Html from "@/public/html.png";
import Css from "@/public/css.png";
import Bootstrap from "@/public/bootstrap.png";
import Git from "@/public/git.png";
import Github from "@/public/github.png";
import Vercel from "@/public/vercel.png";
import Calender from "@/public/calender1.png";
import Graduation from "@/public/graduation.png";
import College from "@/public/college.png";
import City from "@/public/city.png";
import Wordpress from '@/public/wordpress.png';
import Hosting from "@/public/hosting.png";
import Caching from "@/public/cache.png";
import Theme from "@/public/theme.png";
import Elementor from "@/public/elementor.png";
import Positivus from "@/public/Positivus.png";
import Nousheen from "@/public/Nousheen.png";
import Recognify from "@/public/Recognify.png";
import Profilee from "@/public/profile.jpg";
import Linking from "@/public/link.png";
import Typescript from "@/public/typescript.png";

export default function Home() {
  return (
    <div className="bg-slate-950 w-full">
      <div className="w-5/6 lg:w-[90%] xl:w-[85%] 2xl:w-4/6 m-auto">
      <Header />

      {/* Hero Section */}
      <div className="text-center my-14">
      <div className="rounded-full border border-yellow-500 w-[85%] md:w-[60%] lg:w-[47%] xl:w-[35%] 2xl:w-2/6 p-3 md:p-4 bg-yellow-400/15 m-auto flex justify-between items-center mt-20 mb-5">
      <Image src={Gesture} width={40} alt="Hand Gesture" />
        <h2 className="text-white text-center text-md md:text-xl lg:text-2xl">Hello! I'm <span className="text-yellow-400">Nousheen A-Razzak</span></h2>
      </div>
      
      <h1 className="text-white text-3xl mt-3lg:mt-0 sm:text-4xl md:text-5xl lg:text-[54px] font-bold dark:text-theme-white text-theme-secondary lg:!leading-[60px]">Expert <span className="text-yellow-400 text-theme-primary inline-block">Web Designer</span> &amp; <span className="text-yellow-400 text-theme-primary inline-block">Front-End Developer</span></h1>
      
      <p className="text-base my-5 sm:my-10 sm:text-lg md:text-xl lg:text-2xl text-white leading-7 lg:!leading-[40px]">I'm an <span className="font-bold">Expert frontend developer</span> with <br className="block md:hidden" /> <span className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold px-3 md:px-5 py-1 rounded-full bg-opacity-5 border transition backdrop-blur-sm text-yellow-400 border-yellow-500">1+ Year</span> of expertise in ReactJS and NextJS. I create <br className="md:block hidden" /> responsive, user-centric web solutions, specializing in <span className="font-bold">SaaS</span> and <span className="font-bold">eCommerce</span> development.</p>

      <div className="mt-6 sm:mb-20 flex items-center justify-center flex-wrap gap-3 lg:gap-5 text-xl sm:text-2xl font-medium"><a href="#" className="border border-yellow-500 rounded-full text-yellow-400 px-8 py-4 bg-yellow-400/15  hover:bg-yellow-500 hover:text-black">Download CV</a><a href="/#contact-me" className="bg-yellow-500 rounded-full text-black border border-transparent py-4 px-8 hover:bg-transparent hover:text-yellow-500 hover:border-yellow-500 hover:border">Hire Me</a></div>

      <div className="relative">
        <div className="bg-yellow-500 rounded-full w-60 h-60 sm:w-96 sm:h-96 m-auto mt-60 flex items-center">
        <Image src={Girl} width={350} alt="Profile Image" className="max-sm:w-[250px]"/>
        </div>
        <div className="rounded-full bg-white flex items-center justify-between px-2 md:p-4 lg:p-6 absolute top-[0%] sm:top-[20%] md:top-[15%] sm:left-10 xl:-left-[-15%]">
        <Image src={NextJS} width={40} alt="NextJS"/>
        <p className="text-base md:text-xl lg:text-3xl font-bold">NextJS</p>
        </div>
        <div className="rounded-full bg-white flex items-center justify-between px-2 md:p-4 lg:p-6 absolute top-[40%] sm:top-[45%] md:top-[55%] -left-[5%] lg:-left-[5%] xl:-left-[0%]">
        <Image src={Tailwind} width={40} alt="Tailwind CSS"/>
        <p className="text-base md:text-xl lg:text-3xl font-bold">Tailwind CSS</p>
        </div>
        <div className="rounded-full bg-white flex items-center justify-between px-2 md:p-4 lg:p-6 absolute top-[80%] sm:top-[70%] md:top-[95%] left-[5%] lg:-left-[0%] xl:-left-[-15%]">
        <Image src={ReactJS} width={40} alt="ReactJS"/>
        <p className="text-base md:text-xl lg:text-3xl font-bold">React JS</p>
        </div>
        <div className="rounded-full bg-white flex items-center justify-between px-2 md:p-4 lg:p-6 absolute top-[0%] sm:top-[20%] md:top-[15%] right-[0%] xl:-right-[-10%] 2xl:-right-[-15%]">
        <Image src={JavaScript} width={40} alt="JavaScript"/>
        <p className="text-base md:text-xl lg:text-3xl font-bold">JavaScript</p>
        </div>
        <div className="rounded-full bg-white flex items-center justify-between px-2 md:p-4 lg:p-6 absolute top-[45%] md:top-[55%] -right-[5%] lg:-right-[5%] xl:-right-[0%]">
        <Image src={Typescript} width={40} alt="Figma"/>
        <p className="text-base md:text-xl lg:text-3xl font-bold">TypeScript</p>
        </div>
        <div className="rounded-full bg-white flex items-center justify-between px-2 md:p-4 lg:p-6 absolute top-[80%] sm:top-[60%] md:top-[95%] right-[0%] sm:right-[10%] lg:-right-[0%] xl:-right-[-15%]">
        <Image src={VSCode} width={40} alt="VS Code"/>
        <p className="text-base md:text-xl lg:text-3xl font-bold">VS Code</p>
        </div>
      </div>

      {/* About Section */}
      <div className="my-28 xl:my-64">
        <h1 className="text-center text-yellow-400 text-4xl sm:text-5xl font-bold my-5 sm:my-20">About Me</h1>
        <div className="flex flex-col lg:flex-row justify-between">
          <div>
            <h1 className="text-start text-yellow-400 text-3xl sm:text-5xl font-bold">I Love</h1>
            <div>
              <div className="flex my-7 sm:my-10 max-sm:gap-5">
                <div className="rounded-full bg-white flex justify-between px-2 sm:p-4 items-center">
                  <Image src={Traveling} width={40} alt="Traveling"/>
                  <p className="text-base sm:text-2xl font-bold text-blue-500 sm:mx-6">Traveling</p>
                </div>
                <div className="rounded-full bg-white flex justify-between px-2 sm:p-4 sm:mx-5 items-center">
                  <Image src={Code} width={40} alt="Code"/>
                  <p className="text-base sm:text-2xl font-bold text-green-500 sm:mx-6">Code</p></div>
                </div>
                <div className="flex my-7 sm:my-10 max-sm:gap-5">
                  <div className="rounded-full bg-white flex justify-between px-2 sm:p-4 items-center">
                  <Image src={Pizza} width={40} alt="Pizza"/>
                  <p className="text-base sm:text-2xl font-bold text-red-500 sm:mx-6">Pizza</p></div>
                  <div className="rounded-full bg-white flex justify-between px-2 sm:p-4 sm:mx-5 items-center">
                  <Image src={Beach} width={40} alt="Beach"/>
                  <p className="text-base sm:text-2xl font-bold text-yellow-500 sm:mx-6">Beach</p></div>
                </div>
            </div>
          </div>
          <div className="flex">
            <div className="rounded-[40px] sm:rounded-[60px] bg-yellow-400/15 p-7 xl:p-14 m-2 sm:m-4">
              <h1 className="text-5xl sm:text-7xl text-yellow-500 font-bold">2+</h1>
              <p className="text-xl sm:text-3xl text-white font-semibold">Years
                <br />
                Experience
              </p>
            </div>
            <div className="rounded-[40px] sm:rounded-[60px] bg-yellow-400/15 p-7 xl:p-14 m-2 sm:m-4">
              <h1 className="text-5xl sm:text-7xl text-yellow-500 font-bold">10+</h1>
              <p className="text-xl sm:text-3xl text-white font-semibold">Project
                <br />
                Completed
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-[60px] bg-zinc-900 text-white p-6 sm:p-10 my-10 text-base sm:text-xl">
          <p>I am a dedicated Front End Developer with a Master in Web Applications and over 1 year of experience in building dynamic digital experiences. My expertise centers around using advanced technologies like ReactJS, NextJS, Shadcn, and a variety of UI frameworks, including Material UI, NextUI, SCSS, Tailwind CSS, Chakra UI, and Bootstrap. I specialize in designing intuitive user interfaces and components that align seamlessly with intended aesthetics, creating responsive websites that adapt effortlessly across devices. My skills also include proficient API integration, enabling smooth data flow between front-end and back-end systems. Known for writing clean, well-structured code that is both reliable and easy to maintain, I have contributed to well-known projects like Zeektech, SudsWindows, and Krpan. I am passionate about advancing web development and delivering standout digital solutions.</p>
        </div>
        <button className="border border-yellow-500 rounded-full text-yellow-400 px-8 py-4 bg-yellow-400/15 text-xl sm:text-2xl hover:bg-yellow-500 hover:text-black">Contact Me</button>
      </div>

      {/* Education Section */}
      <h1 className="text-center text-yellow-400 text-4xl sm:text-5xl font-bold mb-10 sm:my-14">Education</h1>
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="bg-gradient-to-l from-gray-500 via-gray-400 to-gray-300 p-5 sm:p-10 lg:p-7 xl:p-10 w-full lg:w-2/4 sm:m-3 rounded-[40px] sm:rounded-[60px]">
          <div className="flex justify-between mb-8">
            <div className="rounded-full bg-black flex px-6 py-2 items-center">
              <Image src={Calender} width={30} alt="Calender"/>
              <p className="text-base sm:text-2xl lg:text-xl xl:text-2xl font-bold text-yellow-500 pl-3">2013</p>
            </div>
            <div className="rounded-full bg-white flex px-6 py-2 items-center">
              <Image src={Graduation} width={40} alt="Graduation cap"/>
              <p className="text-base sm:text-2xl lg:text-xl xl:text-2xl font-bold text-black pl-3">Intermediate</p>
            </div>
          </div>
          <div className="flex">
            <div className="rounded-full bg-white flex px-6 py-2 items-center mb-5 mx-1">
              <p className="text-base sm:text-2xl lg:text-xl xl:text-2xl font-bold text-black">Intermediate</p>
            </div>
            <div className="rounded-full bg-white flex px-6 py-2 items-center mb-5 mx-1">
              <p className="text-base sm:text-2xl lg:text-xl xl:text-2xl font-bold text-black">Commerce</p>
            </div>
            </div>
          <h3 className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-bold text-start">Intermediate in Commerce</h3>
          <div>
            <div className="flex my-2">
              <div className="rounded-full bg-white flex p-3 sm:p-5 items-center">
              <Image src={College} width={20} alt="College"/>
              </div>
              <div className="px-6 py-2 flex items-center">
                <p className="text-lg sm:text-xl lg:text-lg xl:text-xl font-medium text-black">Govt. Commerce College</p>
              </div>
            </div>
            <div className="flex my-2">
            <div className="rounded-full bg-white flex p-3 sm:p-5 items-center">
            <Image src={City} width={20} alt="Location"/>
            </div>
              <div className="px-6 py-2 flex items-center">
                <p className="text-lg sm:text-xl lg:text-lg xl:text-xl font-medium text-black">Karachi</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-l from-gray-500 via-gray-400 to-gray-300 p-5 sm:p-10 lg:p-7 xl:p-10 w-full lg:w-2/4 sm:m-3 rounded-[40px] sm:rounded-[60px]">
          <div className="flex justify-between mb-8">
            <div className="rounded-full bg-black flex px-6 py-2 items-center">
              <Image src={Calender} width={30} alt="Calender"/>
              <p className="text-base sm:text-2xl lg:text-xl xl:text-2xl font-bold text-yellow-500 pl-3">2016</p>
            </div>
            <div className="rounded-full bg-white flex px-6 py-2 items-center">
              <Image src={Graduation} width={40} alt="Graduation cap"/>
              <p className="text-base sm:text-2xl lg:text-xl xl:text-2xl font-bold text-black pl-3">Graduation</p>
            </div>
          </div>
            <div className="flex">
            <div className="rounded-full bg-white flex px-6 py-2 items-center mb-5 mx-1">
              <p className="text-base sm:text-2xl lg:text-xl xl:text-2xl font-bold text-black">Bachelor Degree</p>
            </div>
            <div className="rounded-full bg-white flex px-6 py-2 items-center mb-5 mx-1">
              <p className="text-base sm:text-2xl lg:text-xl xl:text-2xl font-bold text-black">B.com</p>
            </div>
            </div>
          <h3 className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-bold text-start">Bachelor's in Commerce</h3>
          <div>
            <div className="flex my-2">
              <div className="rounded-full bg-white flex p-3 sm:p-5 items-center">
              <Image src={College} width={20} alt="College"/>
              </div>
              <div className="px-6 py-2 flex items-center">
                <p className="text-lg sm:text-xl lg:text-lg xl:text-xl font-medium text-black">Govt. Commerce College</p>
              </div>
            </div>
            <div className="flex my-2">
            <div className="rounded-full bg-white flex p-3 sm:p-5 items-center">
            <Image src={City} width={20} alt="Location"/>
            </div>
              <div className="px-6 py-2 flex items-center">
                <p className="text-lg sm:text-xl lg:text-lg xl:text-xl font-medium text-black">Karachi</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Project Section */}
      <div className="mt-40 mb-10">
      <h1 className="text-center text-yellow-400 text-4xl sm:text-5xl font-bold my-14">Projects I've Worked on</h1>
        <div className="bg-[#102762] p-5 sm:p-10 m-3 rounded-[40px] xl:rounded-[60px] flex flex-col lg:flex-row gap-5">
          <div className="w-full xl:w-1/2 bg-[#405281] rounded-[30px] xl:rounded-[60px] flex justify-center overflow-hidden">
          <Image src={Positivus} width={500} alt="Positivus"/>
          </div>
          <div className="w-full xl:w-1/2">
          <div>
          <h1 className="text-start text-4xl sm:text-5xl text-white font-bold">Positivus</h1>
          <p className="text-start text-base sm:text-lg font-semibold text-white my-2">Worked on</p>
          <div className="w-2/4 xl:w-1/4 rounded-full bg-[#405281] p-2 my-2">
        <p className="text-base text-white font-bold text-center">Landing Page</p>
        </div>
          <p className="text-start text-base sm:text-lg font-semibold text-white my-2">Technologies I've Used</p>
          <div className="flex justify-start flex-wrap sm:flex-nowrap">
       <div className="rounded-full bg-white flex justify-between items-center p-1 m-1 sm:p-2 sm:m-2 max-lg:p-1 max-lg:m-1">
        <Image src={Figma} width={30} alt="Figma"/>
        <p className="text-base font-bold">Figma</p>
        </div>
        <div className="rounded-full bg-white flex justify-between items-center p-1 m-1 sm:p-2 sm:m-2 max-lg:p-1 max-lg:m-1">
        <Image src={VSCode} width={30} alt="VS Code"/>
        <p className="text-base font-bold">VS Code</p>
        </div>
        <div className="rounded-full bg-white flex justify-between items-center p-1 m-1 sm:p-2 sm:m-2 max-lg:p-1 max-lg:m-1">
        <Image src={JavaScript} width={30} alt="Javascript"/>
        <p className="text-base font-bold pl-2">JavaScript</p>
        </div>
      </div>
          
      <div className="flex justify-start flex-wrap sm:flex-nowrap lg:flex-wrap">
        <div className="rounded-full bg-white flex justify-between items-center p-1 m-1 sm:p-2 sm:m-2">
        <Image src={NextJS} width={30} alt="NextJS"/>
        <p className="text-base font-bold pl-2">NextJS</p>
        </div>
        <div className="rounded-full bg-white flex justify-between items-center p-1 m-1 sm:p-2 sm:m-2">
        <Image src={Tailwind} width={30} alt="Tailwind CSS"/>
        <p className="text-base font-bold pl-2">Tailwind CSS</p>
        </div>
        <div className="rounded-full bg-white flex justify-between items-center p-1 m-1 sm:p-2 sm:m-2">
        <Image src={Github} width={30} alt="Github"/>
        <p className="text-base font-bold pl-2">Github</p>
        </div>
      </div>
          <button className="rounded-full border-2 bg-[#405281] border-white py-4 px-6 text-lg sm:text-xl font-bold text-white mt-5 flex justify-start"><a href="https://positivus-landing-page-p29.vercel.app/" target="_blank" className="flex"><Image src={Linking} width={40} alt="Linking" className="pr-2"/>View Landing Page</a></button>
          </div>
          </div>
        </div>

        <div className="bg-[#3f031b] p-5 sm:p-10 m-3 rounded-[40px] xl:rounded-[60px] flex flex-col lg:flex-row gap-5">
          <div className="w-full xl:w-1/2 bg-[#653549] rounded-[30px] xl:rounded-[60px] flex justify-center overflow-hidden">
          <Image src={Recognify} width={500} alt="Recognify"/>
          </div>
          <div className="w-full xl:w-1/2">
          <div>
          <h1 className="text-start text-4xl sm:text-5xl text-white font-bold">Recognify</h1>
          <p className="text-start text-base sm:text-lg font-semibold text-white my-2">Worked on</p>
          <div className="w-2/4 xl:w-1/4 rounded-full bg-[#653549] p-2 my-2">
        <p className="text-base text-white font-bold text-center">Website</p>
        </div>
          <p className="text-start text-base sm:text-lg font-semibold text-white my-2">Technologies I've Used</p>
          <div className="flex justify-start flex-wrap sm:flex-nowrap">
       <div className="rounded-full bg-white flex justify-between items-center p-1 m-1 sm:p-2 sm:m-2">
        <Image src={Figma} width={30} alt="Figma"/>
        <p className="text-base font-bold">Figma</p>
        </div>
        <div className="rounded-full bg-white flex justify-between items-center p-1 m-1 sm:p-2 sm:m-2">
        <Image src={JavaScript} width={30} alt="Javascript"/>
        <p className="text-base font-bold">JavaScript</p>
        </div>
        <div className="rounded-full bg-white flex justify-between items-center p-1 m-1 sm:p-2 sm:m-2">
        <Image src={Typescript} width={30} alt="Typescript"/>
        <p className="text-base font-bold pl-2">TypeScript</p>
        </div>
      </div>
          
      <div className="flex justify-start flex-wrap sm:flex-nowrap lg:flex-wrap">
        <div className="rounded-full bg-white flex justify-between items-center p-1 m-1 sm:p-2 sm:m-2">
        <Image src={NextJS} width={30} alt="NextJS"/>
        <p className="text-base font-bold pl-2">NextJS</p>
        </div>
        <div className="rounded-full bg-white flex justify-between items-center p-1 m-1 sm:p-2 sm:m-2">
        <Image src={Css} width={30} alt="Tailwind CSS"/>
        <p className="text-base font-bold pl-2">Custom CSS</p>
        </div>
        <div className="rounded-full bg-white flex justify-between items-center p-1 m-1 sm:p-2 sm:m-2">
        <Image src={Github} width={30} alt="Github"/>
        <p className="text-base font-bold pl-2">Github</p>
        </div>
      </div>
          <button className="rounded-full border-2 bg-[#653549] border-white py-4 px-6 text-lg sm:text-xl font-bold text-white mt-5 flex justify-start"><a href="#" className="flex"><Image src={Linking} width={40} alt="Linking" className="pr-2"/>View Website</a></button>
          </div>
          </div>
        </div>

        <div className="bg-[#830332] p-5 sm:p-10 m-3 rounded-[40px] xl:rounded-[60px] flex flex-col lg:flex-row gap-5">
          <div className="w-full xl:w-1/2 bg-[#9c355b] rounded-[30px] xl:rounded-[60px] flex justify-center overflow-hidden">
          <Image src={Nousheen} width={500} alt="Nousheen"/>
          </div>
          <div className="w-full xl:w-1/2">
          <div>
          <h1 className="text-start text-4xl sm:text-5xl text-white font-bold">I'm Nousheen</h1>
          <p className="text-start text-base sm:text-lg font-semibold text-white my-2">Worked on</p>
          <div className="w-2/4 xl:w-1/4 rounded-full bg-[#9c355b] p-2 my-2">
        <p className="text-base text-white font-bold text-center">Portfolio</p>
        </div>
          <p className="text-start text-base sm:text-lg font-semibold text-white my-2">Technologies I've Used</p>
          <div className="flex justify-start flex-wrap sm:flex-nowrap">
       <div className="rounded-full bg-white flex justify-between items-center p-1 m-1 sm:p-2 sm:m-2">
        <Image src={Wordpress} width={30} alt="Wordpress"/>
        <p className="text-base font-bold">WordPress</p>
        </div>
        <div className="rounded-full bg-white flex justify-between items-center p-1 m-1 sm:p-2 sm:m-2">
        <Image src={Elementor} width={30} alt="Elementor"/>
        <p className="text-base font-bold">Elementor</p>
        </div>
        <div className="rounded-full bg-white flex justify-between items-center p-1 m-1 sm:p-2 sm:m-2">
        <Image src={Theme} width={30} alt="Theme"/>
        <p className="text-base font-bold pl-2">Theme</p>
        </div>
      </div>
          
      <div className="flex justify-start flex-wrap sm:flex-nowrap">
        <div className="rounded-full bg-white flex justify-between items-center p-1 m-1 sm:p-2 sm:m-2">
        <Image src={Caching} width={30} alt="Plugins"/>
        <p className="text-base font-bold pl-2">Plugins</p>
        </div>
        <div className="rounded-full bg-white flex justify-between items-center p-1 m-1 sm:p-2 sm:m-2">
        <Image src={Hosting} width={30} alt="Hosting"/>
        <p className="text-base font-bold pl-2">Hosting</p>
        </div>
      </div>
          <button className="rounded-full border-2 bg-[#9c355b] border-white py-4 px-6 text-lg sm:text-xl font-bold text-white mt-5 flex justify-start"><a href="https://iamnousheen.com/" target="_blank" className="flex"><Image src={Linking} width={40} alt="Linking" className="pr-2"/>View Portfolio</a></button>
          </div>
        </div>
          </div>
      </div>

      <div className="flex items-center justify-center text-xl sm:text-2xl"><a href="https://github.com/NousheenRazzak" target="_blank" className="bg-yellow-500 rounded-full text-black border border-transparent py-4 px-8 hover:bg-transparent hover:text-yellow-500 hover:border-yellow-500 hover:border flex items-center p-2 font-medium"><Image src={Github} width={50} alt="Github" className="pr-2"/>See Github</a></div>

      {/* Technology Section */}
      <div className="my-28 sm:my-40">
      <h1 className="text-center text-yellow-400 text-4xl sm:text-5xl font-bold my-7 sm:my-14">Technologies I Use</h1>
      <div className="flex justify-center flex-wrap lg:flex-nowrap gap-2 max-sm:my-2">
        <div className="rounded-full bg-white flex justify-between px-2 sm:p-7 lg:p-3 xl:p-7 items-center sm:m-2">
        <Image src={Html} width={40} alt="HTML"/>
        <p className="text-base sm:text-2xl lg:text-lg xl:text-2xl font-bold pl-2">HTML</p>
        </div>
        <div className="rounded-full bg-white flex justify-between px-2 sm:p-7 lg:p-3 xl:p-7 items-center sm:m-2">
        <Image src={Css} width={40} alt="CSS"/>
        <p className="text-base sm:text-2xl lg:text-lg xl:text-2xl font-bold pl-2">CSS</p>
        </div>
        <div className="rounded-full bg-white flex justify-between px-2 sm:p-7 lg:p-3 xl:p-7 items-center sm:m-2">
        <Image src={ReactJS} width={40} alt="ReactJS" className="w-7"/>
        <p className="text-base sm:text-2xl lg:text-lg xl:text-2xl font-bold pl-2">React JS</p>
        </div>
        <div className="rounded-full bg-white flex justify-between px-2 sm:p-7 lg:p-3 xl:p-7 items-center sm:m-2">
        <Image src={JavaScript} width={40} alt="JavaScript"/>
        <p className="text-base sm:text-2xl lg:text-lg xl:text-2xl font-bold pl-2">JavaScript</p>
        </div>
      </div>
      
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-2 max-sm:my-2">
        <div className="rounded-full bg-white flex justify-between px-2 sm:p-7 lg:p-3 xl:p-7 items-center sm:m-2">
        <Image src={NextJS} width={40} alt="NextJS" />
        <p className="text-base sm:text-2xl lg:text-lg xl:text-2xl font-bold pl-2">NextJS</p>
        </div>
        <div className="rounded-full bg-white flex justify-between px-2 sm:p-7 lg:p-3 xl:p-7 items-center sm:m-2">
        <Image src={Tailwind} width={40} alt="Tailwind CSS"/>
        <p className="text-base sm:text-2xl lg:text-lg xl:text-2xl font-bold pl-2">Tailwind CSS</p>
        </div>
        <div className="rounded-full bg-white flex justify-between px-2 sm:p-7 lg:p-3 xl:p-7 items-center sm:m-2">
        <Image src={Bootstrap} width={40} alt="Bootstrap"/>
        <p className="text-base sm:text-2xl lg:text-lg xl:text-2xl font-bold pl-2">Bootstrap</p>
        </div>
        <div className="rounded-full bg-white flex justify-between px-2 sm:p-7 lg:p-3 xl:p-7 items-center sm:m-2">
        <Image src={Git} width={40} alt="Git"/>
        <p className="text-base sm:text-2xl lg:text-lg xl:text-2xl font-bold pl-2">Git</p>
        </div>
        <div className="rounded-full bg-white flex justify-between px-2 sm:p-7 lg:p-3 xl:p-7 items-center sm:m-2">
        <Image src={Github} width={40} alt="Github"/>
        <p className="text-base sm:text-2xl lg:text-lg xl:text-2xl font-bold pl-2">Github</p>
        </div>
      </div>

      <div className="flex justify-center flex-wrap lg:flex-nowrap gap-2 max-sm:my-2">
       <div className="rounded-full bg-white flex justify-between px-2 sm:p-7 lg:p-4 xl:p-7 items-center sm:m-2">
        <Image src={Figma} width={40} alt="Figma" className="w-7"/>
        <p className="text-base sm:text-2xl lg:text-lg xl:text-2xl font-bold">Figma</p>
        </div>
        <div className="rounded-full bg-white flex justify-between px-2 sm:p-7 lg:p-4 xl:p-7 items-center sm:m-2">
        <Image src={Typescript} width={40} alt="Typescript" />
        <p className="text-base sm:text-2xl lg:text-lg xl:text-2xl font-bold">TypeScript</p>
        </div>
        <div className="rounded-full bg-white flex justify-between px-2 sm:p-7 lg:p-4 xl:p-7 items-center sm:m-2">
        <Image src={Vercel} width={30} alt="Vercel"/>
        <p className="text-base sm:text-2xl lg:text-lg xl:text-2xl font-bold pl-2">Vercel</p>
        </div>
      </div>
      </div>

      {/* Call To Action */}
      <div className="my-40">
      <h1 className="text-center text-yellow-400 text-4xl sm:text-5xl font-bold my-14">Discuss Project</h1>
      <div className="rounded-[60px] bg-zinc-900 text-white p-6 sm:p-10 my-10 text-xl">
        <div className="flex justify-center">
        <div className="border border-yellow-500 p-2 rounded-[50%] overflow-hidden">
          <Image src={Profilee} width={100} alt="Profile Image" className="rounded-[50%]"/>
        </div>
        </div>
        <h1 className="text-center text-yellow-400 text-3xl lg:text-5xl font-bold my-5 sm:my-7">Nousheen A-Razzak</h1>
        <p className="text-base md:text-xl">Frontend Developer / WordPress Developer / Web Designer</p>
        <div className="mt-6 flex items-center justify-center flex-wrap gap-3 lg:gap-5 text-xl font-medium"><a href="#" className="border border-yellow-500 rounded-full text-yellow-400 px-8 py-4 bg-yellow-400/15  hover:bg-yellow-500 hover:text-black">Resume</a><a href="/#contact-me" className="bg-yellow-500 rounded-full text-black border border-transparent py-4 px-8 hover:bg-transparent hover:text-yellow-500 hover:border-yellow-500 hover:border">Discuss Project</a></div>
      </div>
      </div>

      {/* Social Links */}
      <div className="mt-40">
      <h1 className="text-center text-yellow-400 text-4xl sm:text-5xl font-bold my-7 sm:my-14">Connect With Me</h1>
      <div className="flex max-sm:flex-wrap max-sm:items-center justify-center max-sm:w-full gap-2">
        <div className="rounded-full bg-white flex justify-between p-3 sm:p-7 items-center sm:m-2">
        <Image src={Facebook} width={40} alt="Facebook"/>
        <p className="text-base sm:text-2xl font-bold pl-2"><a href="#" target="_blank">Facebook</a></p>
        </div>
        <div className="rounded-full bg-white flex justify-between p-3 sm:p-7 items-center sm:m-2">
        <Image src={LinkedIn} width={40} alt="Linkedin"/>
        <p className="text-base sm:text-2xl font-bold pl-2"><a href="https://www.linkedin.com/in/nousheen-a-razzak/" target="_blank">LinkedIn</a></p>
        </div>
        <div className="rounded-full bg-white flex justify-between p-3 sm:p-7 items-center sm:m-2">
        <Image src={Twitter} width={40} alt="Twitter"/>
        <p className="text-base sm:text-2xl font-bold pl-2"><a href="#" target="_blank">Twitter</a></p>
        </div>
      </div>
      
      <div className="flex justify-center">
        <div className="rounded-full bg-white flex justify-between p-3 sm:p-7 items-center m-2">
        <Image src={Gmail} width={40} alt="Email"/>
        <p className="text-base sm:text-2xl font-bold pl-2">hello@iamnousheen.com</p>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <Image src={Girl} width={250} alt="Girl Image" />
      </div>
      </div>

      {/* Contact */}
      {/* <div className="rounded-[60px] bg-white text-black p-10 text-xl">
      <h1 className="text-center text-black text-5xl font-bold my-14">Contact Me</h1>
      <form className="mt-6 sm:mt-8 md:mt-10 lg:mt-14 w-full flex flex-col items-start gap-8"><div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-5"><div className="w-full flex flex-col items-start gap-2"><div className="w-full flex items-center dark:bg-theme-secondary bg-theme-white dark:bg-opacity-5 bg-opacity-5 dark:text-theme-secondary text-theme-white gap-2 sm:gap-3 md:gap-4 lg:gap-5 border border-theme-secondary border-opacity-5 rounded-full px-4 sm:px-6 md:px-6 lg:px-9 text-sm sm:text-base md:text-lg lg:text-xl undefined"><div><path stroke-linecap="round" stroke-linejoin="round"></path></div><input[type='text'] placeholder="Full Name *" className="bg-transparent py-3.5 sm:py-4 md:py-5 lg:py-6 w-full outline-none" name="fullName"></div></div><div className="w-full flex flex-col items-start gap-2"><div className="w-full flex items-center dark:bg-theme-secondary bg-theme-white dark:bg-opacity-5 bg-opacity-5 dark:text-theme-secondary text-theme-white gap-2 sm:gap-3 md:gap-4 lg:gap-5 border border-theme-secondary border-opacity-5 rounded-full px-4 sm:px-6 md:px-6 lg:px-9 text-sm sm:text-base md:text-lg lg:text-xl undefined"><div><path stroke-linecap="round" stroke-linejoin="round"></path></div><input type="text" placeholder="Email *" className="bg-transparent py-3.5 sm:py-4 md:py-5 lg:py-6 w-full outline-none" name="email"></div></div><div className="w-full flex flex-col items-start gap-2"><div className="w-full flex items-center dark:bg-theme-secondary bg-theme-white dark:bg-opacity-5 bg-opacity-5 dark:text-theme-secondary text-theme-white gap-2 sm:gap-3 md:gap-4 lg:gap-5 border border-theme-secondary border-opacity-5 rounded-full px-4 sm:px-6 md:px-6 lg:px-9 text-sm sm:text-base md:text-lg lg:text-xl undefined"><div><path stroke-linecap="round" stroke-linejoin="round"></path></div><input type="text" placeholder="Mobile No." className="bg-transparent py-3.5 sm:py-4 md:py-5 lg:py-6 w-full outline-none" name="mobile"></div></div><div className="w-full flex flex-col items-start gap-2"><div className="w-full flex items-center dark:bg-theme-secondary bg-theme-white dark:bg-opacity-5 bg-opacity-5 dark:text-theme-secondary text-theme-white gap-2 sm:gap-3 md:gap-4 lg:gap-5 border border-theme-secondary border-opacity-5 rounded-full px-4 sm:px-6 md:px-6 lg:px-9 text-sm sm:text-base md:text-lg lg:text-xl undefined"><input type="text" placeholder="Subject *" className="bg-transparent py-3.5 sm:py-4 md:py-5 lg:py-6 w-full outline-none" name="subject"></div></div><div className="md:col-span-2 w-full flex flex-col items-start gap-2"><textarea class="w-full flex items-center dark:bg-theme-secondary bg-theme-white dark:bg-opacity-5 bg-opacity-5 dark:text-theme-secondary text-theme-white gap-5 border border-theme-secondary border-opacity-5 rounded-3xl px-4 sm:px-6 md:px-6 lg:px-9 text-sm sm:text-base md:text-lg lg:text-xl py-3.5 sm:py-4 md:py-5 lg:py-6 outline-none undefined" rows="7" name="message" placeholder="Message *"></textarea></div></div><button type="submit" className="btn-theme-primary"><span>Send</span><div><path stroke-linecap="round" stroke-linejoin="round"></path></div></button></form>
      </div> */}

      </div>

      {/* Footer */}
      <Footer />

      </div>
    </div>
  );
}
