"use server";

import { postFetch } from "@/utils/fetch";
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
  } else if (data.status === "error") {
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

const data = await postFetch('')
if(data.status === 'success'){
  
}
}
export { login , me };
