"use client"

import { login } from "@/actions/auth";
import SubmitButton from "@/components/form/SubmitButton";
import Sidebar from "@/components/layout/Sidebar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";

export default function loginPage () {

const [state , formAction] = useFormState(login , {});
const router = useRouter()
useEffect(() => {

    toast(state?.message , {type : `${state?.status}` })
    if(state?.status === 'success'){
        router.push('/')
    }
  }, [state])

return(
    <div className="container mx-auto">
        <div className="p-32 ">
            <div className="w-2/5 mx-auto border rounded-3xl shadow-2xl text-center p-12">
               <div className="mx-auto py-16"> 
               <p className="text-3xl pb-12 font-black">login form</p>
               <form action={formAction}>
                   
                    <div className="mb-10" >
                        <p className="text-start pb-2 pl-4 text-xl">Name</p>
                        <input name="name" type="text" className="transition duration-500  border-2 focus:outline-none focus:border-3 focus:border-cyan-500 focus:bg-cyan-100  w-full py-5 px-4 bg-gray-100 border border-gray-200 rounded-lg shadow-lg shadow-inner" />
                    </div>
                    <div >
                       <p className="text-start pb-2 pl-4">Password</p>
                        <input name="password" type="password" className="transition duration-500  border-2 focus:outline-none focus:border-3 focus:border-cyan-500 focus:bg-cyan-100  w-full py-5 px-4 bg-gray-100 border border-gray-200 rounded-lg shadow-lg shadow-inner"/>
                    </div>
                   <SubmitButton title="login" style="flex justify-center mx-auto transition duration-500 w-4/5 mt-16 px-6 py-4 bg-gray-700 text-white focus:text-black border-2 rounded-lg text-2xl shadow-lg focus:shadow-inner focus:border-zinc-300  focus:bg-zinc-200"/>
                   
                </form>
                
               </div>
            </div>
        </div>
    </div>
)
}