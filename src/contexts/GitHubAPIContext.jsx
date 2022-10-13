import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

export const ReposContext = createContext();

export function GitHubReposContextProvider({ children }) {
  const [gitHubRepos, setgitHubRepos] = useState([]);
  let baseUrl = "https://api.github.com/users/Ak-ram/repos";
  useEffect(() => {
    axios.get(baseUrl).then((res) => {
      const myRepos = res.data;
      const filteredRepos = myRepos?.filter((repo) => {
        // if (!repo.private) return;
        if (!repo.topics.length) return;
        return repo;
      });
      setgitHubRepos(filteredRepos);
    });
  }, []);
  return (
    <ReposContext.Provider value={{ gitHubRepos }}>
      {children}
    </ReposContext.Provider>
  );
}

export function useGitHubRepos() {
  const context = useContext(ReposContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
