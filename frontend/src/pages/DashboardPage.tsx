import { Link } from "react-router";
const DashboardPage = () => {
  return (
    <div>
      <div className="bg-red-300 w-full h-full absolute place-items-center grid">
        <div className="bg-yellow-300 w-[60vw] h-3/4 p-4 grid">
          <div className="bg-green-500">
            <div>Name here</div>
            <div>Plan</div>
          </div>
          <div className="bg-blue-400">
            <div>Workout type</div>
          </div>
          <div className="bg-red-500">
            <button className="rounded-lg border-l-black" onClick={() => {}}>
              <Link to="/Calendar">Calendar</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
