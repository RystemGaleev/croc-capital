import { About } from "../pages/About";
import { Cooperation } from "../pages/Cooperation";
import { Error } from "../pages/Error";
import { Home } from "../pages/Home";
import { Labs } from "../pages/Labs";

export const privateRoutes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/cooperation", element: <Cooperation /> },
  { path: "/labs", element: <Labs /> },
  { path: "*", element: <Error /> },
];
