import Link from "next/link";
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

export default function Header(){
    return (
        <div className="w-full flex bg-transparent flex-col items-start z-50">
            <div className="main-container w-full flex lg:flex-row items-center text-2xl font-medium justify-between my-10 gap-10 p-5 lg:py-5 lg:px-10 bg-slate-50 sm:p-5 rounded-full">
                    <h1 className="font-bold text-lg sm:text-3xl"><a href="/">NOUSHEEN</a></h1>
                    <nav className="flex items-center">
                    <ul className="hidden md:block gap-10">
                        <li className="flex gap-10">
                        <Link href={"/"} className="hover:text-yellow-500">Home</Link>
                        <Link href={"/about"} className="hover:text-yellow-500">About</Link>
                        <Link href={"/contact"} className="hover:text-yellow-500">Contact</Link>
                        </li>
                    </ul>
                    <Sheet>
                        <SheetTrigger>
                        <Menu className="md:hidden"/>
                        </SheetTrigger>
                        <SheetContent>
                            <ul className="flex flex-col gap-6 mt-16">
                                <li className="hover:text-yellow-500 py-2 border-b-2 border-gray-200"><Link href={"/"}>Home</Link></li>
                                <li className="hover:text-yellow-500 py-2 border-b-2 border-gray-200"><Link href={"/about"}>About</Link></li>
                                <li className="hover:text-yellow-500 py-2 border-b-2 border-gray-200"><Link href={"/contact"}>Contact</Link></li>
                            </ul>
                        </SheetContent>
                    </Sheet>
                    </nav>
            </div>
        </div>
    )
}