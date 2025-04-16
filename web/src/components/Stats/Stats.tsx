import { useEffect, useState } from "react";
import { getStats } from "../../services/ApiService";
import { useFetch } from "../../utils/hooks/useFetch";
import { StatsDetails } from "../../models/StatsModel";
import { Loader } from "../Loader/Loader";
import "./Stats.css";

const Stats = () => {
  const [stats, setStats] = useState<StatsDetails>();
  const { loading, handleFetch } = useFetch(getStats, setStats);

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="stats-container">
      <div className="stats-header">
        <h2>Query Stats</h2>
        <p></p>
      </div>

      {loading && <Loader />}

      {!loading && !!stats?.message ?
        <div className="no-stats">
          <p className="-bold">
            {stats.message}
          </p>
        </div>
        :
        <div>
          <h3 className="-bold">Most searched terms</h3>
          {stats?.topQueries.map((q) => (
            <div className="query-details" key={q._id}>
              <div className="term">
                <h4 className="-bold">{q.query}</h4>
                <p className="-bold">{q.percentage}%</p>
              </div>
              <div>
                <span>Times searched: </span>
                <span>{q.count}</span>
              </div>
            </div>
          ))}

          <br />
          
          <h3 className="-bold">Average request time: <span>{stats?.avgRequestTime} ms</span></h3>

          <h3 className="-bold">Most popular hour: <span>{stats?.mostPopularHour}h</span></h3>
        </div>
      }
    </div>
  )
}

export { Stats };