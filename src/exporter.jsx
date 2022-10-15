// components
export { default as Article } from "./components/article/article";
export { default as Breadcrumb } from "./components/breadcrumb/breadcrumb";
export { default as Filters } from "./components/filters/filters";
export { default as Loader } from "./components/loader/loader";
export { default as NavBar } from "./components/navBar/navBar";
export { default as ProjectCard } from "./components/projectCard/projectCard";
export { default as ProjectsSlider } from "./components/projectsSlider/projectsSlider";
export { default as ProjectsStatsBox } from "./components/projectsStatsBox/projectsStatsBox";
export { default as SearchBox } from "./components/searchBox/searchBox";
export { default as TechnologyBox } from "./components/technologyBox/technologyBox";
export { default as WelcomeScreen } from "./components/welcomeScreen/welcomeScreen";

// contexts
export { useGitHubRepos } from "./contexts/GitHubAPIContext";
export { useDevBlogs } from "./contexts/DEVAPIContext";
export {
  useReactGitHubRepos,
  useJSGitHubRepos,
  useVSCodeExtensionGitHubRepos,
} from "./contexts/sub_GitHubAPIContext";
// pages

// icons

export { FaRegComment } from "react-icons/fa";
export { AiOutlineLike, AiOutlineSend } from "react-icons/ai";
export { MdOutlineUpdate } from "react-icons/md";
export { IoIosArrowBack } from "react-icons/io";
export { ImHome } from "react-icons/im";
export { GoLinkExternal } from "react-icons/go";
export { FiSearch } from "react-icons/fi";
export { TbMailbox } from "react-icons/tb";

export { FaReact, FaSass, FaHtml5 } from "react-icons/fa";
export {
  SiJavascript,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiPostman,
  SiAntdesign,
  SiGithub,
  SiMaterialui,
  SiFirebase,
  SiGit,
  SiWebstorm,
  SiVisualstudio,
  SiLinkedin,
  SiDevdotto,
  SiReact,
} from "react-icons/si";

export { HiOutlineLocationMarker } from "react-icons/hi";
export { MdHorizontalRule, MdDoneAll } from "react-icons/md";
export { BsArrowRightShort } from "react-icons/bs";
