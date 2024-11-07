import Image from "next/image";
import Header from "../header/header";
import Footer from "../footer/footer";
import Nousheen from "@/public/Nousheen.png";
import Positivus from "@/public/Positivus.png";
import Recognify from "@/public/Recognify.png";

export default function About(){
    return(
        <main className=" bg-slate-950">
          {/* <div className="bg-slate-950"> */}
          <div className="w-5/6 lg:w-[90%] xl:w-[85%] 2xl:w-4/6 m-auto">
          <Header />

          {/* About Section */}
          <h1 className="text-center text-yellow-400 text-5xl font-bold my-10 sm:my-20">About Me</h1>
          <div className="rounded-[60px] bg-zinc-900 text-white p-5 sm:p-10 my-10 text-xl text-center">
          <p>Hello, I am Nousheen. I am a Frontend developer and WordPress developer with two immersive years of experience in the ever-evolving world of web development. But beyond the years, I am defined by my passion for creating, my dedication to innovation, and my relentless pursuit of excellence.</p>
          <h3 className="text-yellow-500 font-bold text-3xl mt-8 mb-6">My Journey</h3>
          <p>For the past two years, I have delved deep into the realm of Web development. It is been a journey of transforming ideas into tangible, functional websites. VS Code has been my canvas, and I have painted digital masterpieces for clients from diverse industries.</p>

          <p>But as the digital landscape advances, so does my hunger to learn and grow. While Web development remains my love, I have set my sights on expanding my skill set on latest technologies. My latest adventure? Becoming an AI Engineer.</p>
          <h3 className="text-yellow-500 font-bold text-3xl mt-8 mb-6">Why Choose Me</h3>
          <p><span className="text-yellow-500 font-semibold">Passion: </span>For me, web development is not just a job; it is my passion. It is the joy of bringing digital dreams to life, one project at a time.</p>

          <p><span className="text-yellow-500 font-semibold">Dedication: </span>Whether it is WordPress or frontend development, I approach each project with unwavering dedication, ensuring it exceeds expectations.</p>

          <p><span className="text-yellow-500 font-semibold">Creativity: </span>My approach is fueled by creativity. I do not just code; I design experiences that resonate.</p>

          <h3 className="text-yellow-500 font-bold text-3xl mt-8 mb-6">Join Me on This Journey</h3>
          <p>I am on a path of continuous learning and improvement, and I would love for you to be a part of this journey. Let us collaborate to create digital solutions that not only meet your needs but also exceed them.</p>

          <p className="mt-5">Thank you for taking the time to get to know me. I look forward to the possibility of working together to turn your digital dreams into reality.</p>
          </div>

          {/* My Services */}
          <h1 className="text-center text-yellow-400 text-5xl font-bold my-20">My Services</h1>
          <div className="flex max-lg:flex-col gap-10 md:max-lg:items-center lg:max-xl:justify-center lg:max-xl:flex-wrap">
            <div className="w-full lg:w-[46%] xl:w-2/6 md:w-4/6 rounded-[60px] bg-white p-5 md:max-lg-m-10">
              <div>
              <Image src={Nousheen} width={500} alt="Nousheen" className="rounded-[40px]"/>
              </div>
              <div>
                <h3 className="font-bold text-2xl sm:text-3xl mt-8">WordPress Website / SEO Friendly / Speed Optimization</h3>
                <div className="flex mt-10">
                <div className="flex items-center justify-center text-xl sm:text-2xl bg-black rounded-full text-white border border-transparent py-4 px-8 font-medium xl:max-2xl:text-xl">$200</div>
                <div className="w-full flex items-center justify-center text-xl sm:text-2xl xl:max-2xl:text-xl"><a href="/contact" className="bg-yellow-500 rounded-full text-black border border-transparent py-4 px-4 hover:bg-transparent hover:text-yellow-500 hover:border-yellow-500 hover:border flex items-center p-2 font-medium">Buy My Service</a></div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/6 lg:w-[46%] xl:w-2/6 rounded-[60px] bg-white p-5">
              <div>
              <Image src={Positivus} width={500} alt="Positivus" className="rounded-[40px]"/>
              </div>
              <div>
                <h3 className="font-bold text-2xl sm:text-3xl mt-8">Landing Page / Next JS / Responsive / Fully Optimized</h3>
                <div className="flex mt-10">
                <div className="flex items-center justify-center text-xl sm:text-2xl bg-black rounded-full text-white border border-transparent py-4 px-8 p-2 font-medium xl:text-xl 2xl:text-2xl">$400</div>
                <div className="w-full flex items-center justify-center text-xl sm:text-2xl xl:max-2xl:text-xl"><a href="/contact" className="bg-yellow-500 rounded-full text-black border border-transparent py-4 px-4 hover:bg-transparent hover:text-yellow-500 hover:border-yellow-500 hover:border flex items-center p-2 font-medium">Buy My Service</a></div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/6 lg:w-[46%] xl:w-2/6 rounded-[60px] bg-white p-5">
              <div>
              <Image src={Recognify} width={500} alt="Recognify" className="rounded-[40px]"/>
              </div>
              <div>
                <h3 className="font-bold text-2xl sm:text-3xl mt-8">MultiPage Website / Next JS / Responsive / Fully Optimized</h3>
                <div className="flex mt-10">
                <div className="flex items-center justify-center text-xl sm:text-2xl bg-black rounded-full text-white border border-transparent py-4 px-8 p-2 font-medium xl:max-2xl:text-xl">$800</div>
                <div className="w-full flex items-center justify-center text-xl sm:text-2xl xl:max-2xl:text-xl"><a href="/contact" className="bg-yellow-500 rounded-full text-black border border-transparent py-4 px-4 hover:bg-transparent hover:text-yellow-500 hover:border-yellow-500 hover:border flex items-center p-2 font-medium">Buy My Service</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-20">
          <button className="border border-yellow-500 rounded-full text-yellow-400 px-16 py-4 bg-yellow-400/15 text-2xl hover:bg-yellow-500 hover:text-black"><a href="/contact">Hire Me</a></button>
          </div>

          <Footer />
          </div>
        {/* </div> */}
        </main>
    )
}