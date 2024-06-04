"use client"


import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar(){
    const pathname = usePathname();
    return(
        <nav className="">
        <div className="absolute right-0 top-0 block bg-gray-100 border-l-2 h-full -z-10">
            <ul className="flex-col mt-32 ">
                <li className="nav-item border-b-2 pb-5 rounded-lg">
                    <Link className=" px-48 py-4 text-3xl focus:text-gray-400" href="/users">
                        Users
                    </Link>
                </li>
             
            </ul>
        </div>
    </nav>
    )
}