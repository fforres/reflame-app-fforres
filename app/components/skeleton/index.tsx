import { Outlet } from "react-router-dom";
import { NavBar } from "../navBar/index.js";

type Props = {};

export const Skeleton = (props: Props) => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
