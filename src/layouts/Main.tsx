import { Outlet, useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";
import Nav from "../components/Nav";

// loader
export const mainLoader = () => {
  const userName = fetchData("userName");
  return { userName };
};

interface MainLoaderData {
  userName: string;
}

const Main = () => {
  const { userName } = useLoaderData() as MainLoaderData;
  return (
    <div className="flex flex-col h-screen">
      <Nav userName={userName} />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="justify-end text-center">
        All Rights Reserved 2024
      </footer>
    </div>
  );
};
export default Main;
