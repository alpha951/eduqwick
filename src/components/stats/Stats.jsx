import { useState, useEffect } from "react";
import CountUp from "react-countup";
import "./Stats.css";

const Stats = () => {
  const [statsData, setStatsData] = useState([
    { label: "Applications Registered", start: 0, end: 10000 },
    { label: "Admissions Completed", start: 0, end: 1000 },
    { label: "Students Counselled", start: 0, end: 100000 },
    // Add more stats as needed
  ]);

  useEffect(() => {
    // Simulate fetching data from a backend or API
    // In a real scenario, replace this with your data fetching logic
    // For simplicity, we're using setTimeout to simulate data loading
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatsData((prevData) =>
        prevData.map((stat) => ({
          ...stat,
          start: 0, // Start from 1000 less for animation effect
        }))
      );
    };

    fetchData();
  }, []);

  return (
    <div className='container-stats'>
      {statsData.map((stat, index) => (
        <div key={index} className='stat-item'>
          <div className='stat-label'>{stat.label}</div>
          <div className='stat-count'>
            <CountUp
              start={stat.start}
              end={stat.end}
              duration={5}
              separator=','
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
