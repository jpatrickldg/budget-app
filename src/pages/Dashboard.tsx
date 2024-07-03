import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";

// loader
export const dashboardLoader = () => {
  const userName = fetchData("userName");
  return { userName };
};

interface DashboardLoaderData {
  userName: string;
}

const Dashboard = () => {
  const { userName } = useLoaderData() as DashboardLoaderData;
  return (
    <div>
      <h1>DASHBOARD</h1>
      <h2>{userName}</h2>
    </div>
  );
};
export default Dashboard;
