import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import HomeOne from "../pages/HomeOne";
import HomeTwo from "../pages/HomeTwo";
import HomeThree from "../pages/HomeThree";
import HomeFour from "../pages/HomeFour";
import About from "../pages/About";
import Service from "../pages/Service";
import ServiceDetails from "../pages/ServiceDetails";

import TeamDetails from "../pages/TeamDetails";
import TeamMember from "../pages/TeamMember";
import Project from "../pages/Project";
import ProjectDetails from "../pages/ProjectDetails";
import Faq from "../pages/Faq";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import BlogStandarad from "../pages/BlogStandarad";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomeOne />,
      },
      {
        path: "/homeTwo",
        element: <HomeTwo />,
      },
      {
        path: "/homeThree",
        element: <HomeThree />,
      },
      {
        path: "/HomeFour",
        element: <HomeFour />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Service",
        element: <Service />,
      },
      {
        path: "/service-details",
        element: <ServiceDetails />,
      },
      {
        path: "/Team",
        element: <TeamMember />,
      },
      {
        path: "/team-details",
        element: <TeamDetails />,
      },
      {
        path: "/Project",
        element: <Project />,
      },
      {
        path: "/project-details",
        element: <ProjectDetails />,
      },
      {
        path: "/Faq",
        element: <Faq />,
      },
      {
        path: "/BlogStandard",
        element: <BlogStandarad />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
