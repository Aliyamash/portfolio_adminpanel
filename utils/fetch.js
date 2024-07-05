import { cookies } from "next/headers";
import axios from "axios";

const postFetch = async (url, body) => {
  const res = await fetch(`https://back.pishro.art${url}`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  if (res.ok) {
    return await res.json();
  }
};

const postFetchUser = async (url, body) => {
  try {
    const token = cookies().get("token");
    // const res = await fetch(`https://back.pishro.art${url}`, {
    //     cache: 'no-store',
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'multipart/form-data',
    //         'Accept': 'application/json',
    //         'Authorization': `Bearer ${token.value}`
    //     },
    //     body: JSON.stringify(body)
    // });
    // console.log(body);
    // return await res.json();

    const response = await axios
      .post(`https://back.pishro.art${url}`, body, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token.value}`,
        },
      })
      .then((res) => {
        console.log(res, "res");
      })
      .catch((err) => {
        console.log(err, "err");
        console.log(err.response.data, "err.data.errors");
      });
  } catch (error) {
    console.log(error);
  }
};

const getFetch = async (url) => {
  const token = cookies().get("token");
  const res = await fetch(`https://back.pishro.art${url}`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token.value}`,
    },
  });

  if (res.ok) {
    const data = await res.json();
    return data;
  } else {
    throw new Error(`مشکل در دریافت اطلاعات ${res.status}`);
  }
};

export { postFetch, getFetch, postFetchUser };
