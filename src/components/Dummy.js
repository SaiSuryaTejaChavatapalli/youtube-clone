import React, { useEffect, useState } from "react";
import axios from "axios";
const Dummy = () => {
  const [json, setJson] = useState([]);
  const update = {
    title: "A blog post by Kingsley",
    body: "Brilliant post on fetch API",
    userId: 1,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(update),
  };
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    /* 
    GET USING AXIOS
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
    */
    /*  GET USING FETCH
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await data.json();
    setJson(json); */
    /* 
    POST USING FETCH
        const data = fetch("https://jsonplaceholder.typicode.com/posts", options);
        data
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          }); */
    // POST USING AXIOS
    // const b = axios.post("https://jsonplaceholder.typicode.com/posts", update);
    // b.then((res) => {
    //   console.log(res);
    // }).catch((err) => {
    //   console.log(err);
    // });
    /* 
    **PUT USING fetch
    const c = fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(update),
    });
    c.then((res) => {
      console.log(res);
      return res.json();
    }).then((data) => {
      console.log(data);
    });
    */
    /* PUT USING AXIOS
    const d = axios.put("https://jsonplaceholder.typicode.com/posts/1", update);
    d.then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
     */
    /* 
    DELETE USING FETCH
    const e = fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(update),
    });
    e.then((res) => {
      console.log(res);
      return res.json();
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
     */
    /* 
      DELETE USING AXIOS
       axios
      .delete("https://jsonplaceholder.typicode.com/posts/1", update)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      */
  };
  return (
    <div>
      {json.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default Dummy;
