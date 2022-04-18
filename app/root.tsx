import { Skeleton } from "./components/skeleton/index.js";
import { Talks } from "./pages/talks.js";
import { Projects } from "./pages/projects.js";
import { Home } from "./pages/home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Skeleton />}>
          <Route index element={<Home />} />
          <Route path="talks" element={<Talks />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
