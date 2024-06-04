const postFetch = async (url , body) => {
    const res = await fetch(`https://back.pishro.art${url}`, {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
      },
      body: JSON.stringify(body)
    });
  console.log(body);
    if (res.ok) {
     return await res.json();
    }
  };
  
  export { postFetch }