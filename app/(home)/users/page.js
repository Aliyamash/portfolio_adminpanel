import Link from "next/link";

export default function usersPage (){
    return(
       <div className="w-4/5">
         <div className="mx-12 mt-16 text-xl ">
            <div className="">
                <div className="mb-5 flex justify-between">
                    <p className="text-5xl ml-5">Users</p>
                    <Link className="transition duration-500 bg-gray-600 text-white border p-4 rounded-2xl focus:bg-white focus:text-black" href={'/users/create'}>Create User</Link>
                    
                </div>
                <hr />
                <div className="flex justify-between mb-2 mt-12 w-11/12 ml-auto text-2xl font-medium">
                                <p>Edit</p>
                                <p>CV</p>    
                                <p>Bio</p>
                                <p>Profile</p>
                                <p className="mr-5">Full Name</p>
                </div>
                <hr className="border-black border-1 rounded-full"/>
            </div>
        </div>
       </div>
    )
}