"use server";

import { getFetch, postFetch } from "@/utils/fetch";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

async function login(state, formData) {
  const name = formData.get("name");
  const password = formData.get("password");
  if (name === "" || password === "") {
    return {
      status: "error",
      message: "Email and password are required",
    };
  }

  const data = await postFetch("/login", { name, password });
  if (data.status === "success") {
    cookies().set({
      name: "token",
      value: data.data,
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    return {
      status: data.status,
      message: "You are logged in",
    };
  } else {
    return {
      status: data.status,
      message: data.message,
    };
  }
}

async function me (){
const token = cookies().get('token');
if(!token){
  return {
  error: "Not Authorized"
  }
}

const data = await getFetch('/profile')
if(data.status === 'success'){
  return{
    user : data.data
  }
}else{
  return{
    error : "user Forbidden"
  }
}
}

async function createUser(state, formData){
  const name = formData.get("name")
  const family = formData.get("family")
  const bio = formData.get("bio")
  const cv = formData.get("cv")
  const profile = formData.get("profile")

if(name === ''){
  return {
    status: "error",
    message: 'The name field is mandatory'
  }
}
if(family === ''){
  return {
    status: "error",
    message: 'The family field is mandatory'
  }
}
if(bio === ''){
  return {
    status: "error",
    message: 'The Biography field is mandatory'
  }
}


const data = await postFetch("/admin/team/store", { name, family , bio , cv , profile });
revalidatePath('/users');
 
}
export { login , me ,createUser};
