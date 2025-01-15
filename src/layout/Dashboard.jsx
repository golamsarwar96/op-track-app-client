import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  return (
    <div>
      <Helmet>
        <title>OpTrack | Dashboard</title>
      </Helmet>
      <h1 className="text-4xl">Dashboard</h1>
    </div>
  );
};

export default Dashboard;
