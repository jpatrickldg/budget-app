import { json, useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";
import Hero from "../components/Hero";
import { toast } from "react-toastify";

// loader
export const dashboardLoader = () => {
  const userName = fetchData("userName");
  return { userName };
};

// action
export const dashboardAction = async ({ request }: { request: Request }) => {
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  try {
    // throw new Error("Ya done!");
    localStorage.setItem("userName", JSON.stringify(formData.userName));
    return toast.success(`Welcome, ${formData.userName}!`);
  } catch (error) {
    throw json({
      message: "There was a problem creating your account",
      status: 400,
    });
  }
};

interface DashboardLoaderData {
  userName: string;
}

const Dashboard = () => {
  const { userName } = useLoaderData() as DashboardLoaderData;
  return <>{userName ? <p>{userName}</p> : <Hero />}</>;
};
export default Dashboard;
