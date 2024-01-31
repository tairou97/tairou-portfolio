import PageNotFound from "../pages/PageNotFound";
import Contact from "../pages/Contact";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Home from "../pages/Home";

const routes = [
  { path: "/", element: <Home />, Id: 1 },
  { path: "/about", element: <About />, Id: 2 },
  { path: "/skills", element: <Projects />, Id: 3 },
  { path: "/projects", element: <Skills />, Id: 4 },
  { path: "/contact", element: <Contact />, Id: 5 },
  { path: "*", element: <PageNotFound />, Id: 6 },
];

export default routes;
