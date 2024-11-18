import Header from "../header/header";
import Footer from "../footer/footer";
// import Form from "next/form";

export default function About(){
    return(
        <div className="bg-slate-950">
          <div className="w-5/6 lg:w-[90%] xl:w-[85%] 2xl:w-4/6 m-auto">
          <Header />

          {/* Contact Section */}
          <h1 className="text-center text-yellow-400 text-4xl font-bold my-20">Contact Me</h1>
          <div className="rounded-[30px] md:rounded-[60px] bg-zinc-900 text-white p-5 md:p-10 my-10 text-xl">
          <form className="lg:w-3/5 flex flex-col m-auto gap-5">
            <input type="text" placeholder="Name" className="bg-zinc-800 p-5 rounded-[25px] border-none"></input>
            <input type="email" placeholder="Email" className="bg-zinc-800 p-5 rounded-[25px] border-none"></input>
            <input type="tel" placeholder="Number" className="bg-zinc-800 p-5 rounded-[25px] border-none"></input>
            <textarea rows={5} placeholder="Message" className="bg-zinc-800 p-5 rounded-[30px] border-none"></textarea>
            <input type="submit" value="Submit" className="w-4/4 md:w-3/6 xl:w-2/6 border border-yellow-500 rounded-full m-auto text-yellow-400 text-center px-16 py-4 mt-5 bg-yellow-400/15 text-2xl hover:bg-yellow-500 hover:text-black"></input>
          </form>
          </div>

          <Footer />
          </div>
        </div>
    )
}
