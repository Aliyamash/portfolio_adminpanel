"use client"

import SubmitButton from "@/components/form/SubmitButton";
import JoditEditor from 'jodit-react';
import { useFormState } from 'react-dom'
import { useEffect, useRef, useState } from "react";
import { createUser } from "@/actions/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function CreateUserPage () {
    const [state , formAction] = useFormState(createUser , {});
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [files , setFiles] = useState()
    const [previews , setPreviews] = useState()
  const router = useRouter()
   
useEffect(() => {
    toast(state?.message , {type : `${state?.status}` })
    if(state?.status === 'success'){
        router.push("/users")
    }
},[state])

useEffect(() => {
    if (!files) return;
    let tmp = [];
    for (let i = 0; i < files.length; i++) {
      tmp.push(URL.createObjectURL(files[i]));
    }
    const objectUrls = tmp;
    setPreviews(objectUrls);

    console.log(files);
    
  }, [files]);
    

return(
    <div className="w-4/5 relative">
         <div className="mx-12 mt-12 text-xl ">
            <div className="">
                <div className="mb-5 flex justify-between">
                    <p className="text-5xl ml-5 font-bold">Create Colleague</p>
                    
                </div>
                <hr />
                
                 <form action={formAction} className="px-36">
                    
                    <div className="flex justify-between gap-20 py-8">
                    {/* upload image */}
                    <div className="w-40">
                            <p className="text-xl pb-4 font-black">Profile picture:</p>
                        <div className=" rounded-full h-36 w-36 mx-auto" >
                         {previews &&
                            previews.map((pic) => {
                            return <img  width={25} height={25} className="w-full h-full rounded-full object-cover" src={pic} alt="img" id="profile-pic" /> 
                         })}
                        </div>
                    <div className="text-lg text-center  mt-5 bg-blue-500 p-1 rounded-full shadow-lg hove:text-cyan-500 pointer">
                        <label className="text-white text-xs" htmlFor="input-file" alt="hi">Upload Image</label>
                        <input onChange={(e) => {
                            if(e.target.files){
                                setFiles(e.target.files)    
                            }
                        }} 
                        className="hidden" type="file" id="input-file" name="profile"  accept="image/png, image/jpeg , image/jpg "/>
                    </div>
                    </div>
                      <div className="w-1/5">
                         {/* Name */}
                       <div className="w-full my-5">
                            <p className="text-lg  mb-2">Name</p>
                            <input className="border outline-none w-full border-2 text-xl rounded-lg px-4 py-2" type="text"  name="name" />
                        </div>
                        {/* family */}
                        <div className="w-full my-5">
                            <p className="text-lg  mb-2">last name</p>
                            <input className="border outline-none w-full border-2 text-xl rounded-lg px-4 py-2  " type="text"  name="family" />
                        </div>
                      </div>
                    {/* bio */}
                    <div className="w-1/3">
                        <p className="text-lg mb-2">Biography</p>
                        <textarea className="border outline-none w-full border-2 text-xl rounded-lg px-4 py-2" rows={7} type="text" id="name" name="bio" />
                    </div>
                    </div>

                    <hr className="border-black" />
                        {/* cv section */}
                    <div className="pt-6 flex justify-between gap-8">
                        <div>
                            <h1 className='text-2xl mb-5 font-bold'>Your CV :</h1>
                            <p className='text-xl my-4'>Please enter the resume of the desired person👉</p>
                            <p className='text-xs text-gray-400 my-2'>The stronger your resume, the easier it will be to get hired</p>
                        </div>

                        <JoditEditor
                        rows={9}
                        ref={editor}
                        value={content}
                        onChange={newContent => setContent(newContent)}
                            />
                            <input type="text" className="hidden" name="cv" value={content} />
                    </div>
                    <SubmitButton title="Create New Colleague" style=" border px-5 py-3 rounded-2xl bg-green-800 hover:bg-green-900 focus:bg-white focus:text-black text-white text-lg "/>
                 </form>
            </div>
        </div>
       </div>
)
}