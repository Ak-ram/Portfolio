import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const blogContext = createContext();

export function DevBlogsContextProvider({ children }) {
  const [devBlogs, setDevBlogs] = useState([]);

  useEffect(() => {
    axios.get(`https://dev.to/api/articles?username=ak_ram`).then((res) => {
      const myBlogs = res.data;
      setDevBlogs(myBlogs);
    });
  }, []);
  return (
    <blogContext.Provider
      value={{
        devBlogs,
      }}
    >
      {children}
    </blogContext.Provider>
  );
}

export function useDevBlogs() {
  const context = useContext(blogContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
