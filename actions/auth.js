"use server";

import { getFetch, postFetch, postFetchUser } from "@/utils/fetch";
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

async function me() {
  const token = cookies().get("token");
  if (!token) {
    return {
      error: "Not Authorized",
    };
  }

  const data = await getFetch("/profile");
  if (data.status === "success") {
    return {
      user: data.data,
    };
  } else {
    return {
      error: "user Forbidden",
    };
  }
}

async function createUser(state, formData) {
try {
  const name = formData.get("name");
  const family = formData.get("family");
  const bio = formData.get("bio");
  const cv = formData.get("cv");
  const profile = formData.get("profile");

  
  let newFormData = new FormData;
  newFormData.append("name", name);
  newFormData.append("family", family);
  newFormData.append("bio", bio);
  newFormData.append("cv", cv);
  newFormData.append("profile", profile);
console.log(newFormData);
  if (name === "") {
    return {
      status: "error",
      message: "The name field is mandatory",
    };
  }
  if (family === "") {
    return {
      status: "error",
      message: "The family field is mandatory",
    };
  }
  if (bio === "") {
    return {
      status: "error",
      message: "The Biography field is mandatory",
    };
  }
 
  const token = cookies().get("token");
  if (!token) {
    return {
      status: "error",
      message: "your token is not valid. Try again",
    };
  }

  const data = await postFetchUser("/admin/team/store",  formData);
  console.log(data);
} catch (error) {
  console.log(error);
}
 


}
export { login, me, createUser };
