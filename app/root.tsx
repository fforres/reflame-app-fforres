import { NavBar } from "./components/navBar/index.js";
import { styled } from "./theme/index.js";
import { App } from "./pages/app.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Button2 = styled("button", {
  color: "blue",
});

export const Root = () => {
  return (
    <main>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};
