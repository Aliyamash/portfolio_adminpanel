import Image from "next/image";
import dollarIcon from '@/public/img/icons8-dollar-64.png'
export default function Header () {
    return (
        <>
            <div className="flex justify-between rounded-xl border text-lg mb-5 shadow shadow-lg bg-gray-200 z-50">
             
             <div className="flex items-center gap-10 px-10 py-5">
                <button className="transition  duration-500 hover:text-red-600 ">Exit</button>
                <span className="text-2xl">|</span>
                <button className="transition  duration-500 hover:text-green-600">User</button>
             </div>

            <div className="flex items-center gap-2 bg-gray-300 px-36 py-5 rounded ">
                <Image width={50} src={dollarIcon}/>
             <h1 className="font-bold text-xl" >Dollar Team</h1>
            </div>
            </div>
        </>
    )
}