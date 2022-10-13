import { useContext } from "react";
import { useGitHubRepos } from "./GitHubAPIContext";

export function useReactGitHubRepos(gitHubRepos) {
  const reactRepos = gitHubRepos?.filter((repo) =>
    repo.topics.includes("react") ? repo : ""
  );

  return reactRepos;
}
