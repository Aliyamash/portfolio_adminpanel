import Link from "next/link";

export default function CreateUserPage () {
return(
    <div className="w-4/5">
         <div className="mx-12 mt-16 text-xl ">
            <div className="">
                <div className="mb-5 flex justify-between">
                    <p className="text-5xl ml-5">Create User</p>
                    
                </div>
                <hr />
                <div className="flex">
                    <div>
                        <p>name</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>Picture</p>
                        <input type="file" id="img" name="img" accept="image/*"/>
                    </div>
                </div>
            </div>
        </div>
       </div>
)
}