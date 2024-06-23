import { getFetch } from "@/utils/fetch";
import Link from "next/link";

export default async function usersPage (){
    const data = await getFetch('/admin/team');

    return(
       <div className="w-4/5">
         <div className="mx-12 mt-16 text-xl ">
            <div className="">
                <div className="mb-5 flex justify-between">
                    <p className="text-5xl ml-5 ">Users</p>
                    <Link className="transition duration-500 bg-gray-600 text-white border p-4 rounded-2xl focus:bg-white focus:text-black cursor-pointer" href={'/users/create'}>Create User</Link>
                    
                </div>
                <hr />
                <div className="flex justify-between mb-4 mt-12 w-11/12 ml-auto text-2xl font-medium">
                                <p>Profile</p>
                                <p>Name</p>
                                <p>CV</p>    
                                <p>Bio</p>
                                <p>Edit</p>
                </div>
                <hr className="border-black border-1 rounded-full"/>
                {data.data.map((user) => (
                    <div key={user.id} className="border-b" >
                       <div className="flex justify-between px-4 py-2  ml-auto text-xl font-medium  items-center w-11/12">
                       <div className="w-16 h-16">
                       <img className="rounded-full shadow shadow-lg object-cover w-full h-full" src={`https://back.pishro.art${user.profile}`} alt="profile" />
                       </div>
                        <p>{user.name}</p>
                        <Link href={'/users/cv'}>cv</Link>
                        <h1 className="font-bold">...</h1>
                        <div className="flex justify-between gap-4">
                        <Link href='#' className="transition duration-500 border border-black hover:bg-white hover:text-black bg-black text-white rounded-2xl text-lg py-1 px-3">edit</Link>
                        <Link href='#' className="transition duration-500 border border-black hover:bg-black hover:text-white rounded-2xl text-lg py-1 px-3">show</Link>
                        </div>
                        
                       </div>
                    </div>
                ))}
            </div>
        </div>
       </div>
    )
}