// React Repos
export function useReactGitHubRepos(gitHubRepos) {
  const reactRepos = gitHubRepos?.filter((repo) =>
    repo.topics.includes("react") ? repo : ""
  );
  return reactRepos;
}

// Javascript Repos
export function useJSGitHubRepos(gitHubRepos) {
  const JSRepos = gitHubRepos?.filter((repo) =>
    repo.topics.includes("vanilla-js") ? repo : ""
  );

  return JSRepos;
}

// VS code extensions

export function useVSCodeExtensionGitHubRepos(gitHubRepos) {
  const VScodeExtensionsRepos = gitHubRepos?.filter((repo) =>
    repo.topics.includes("vscode-extension") ? repo : ""
  );

  return VScodeExtensionsRepos;
}
