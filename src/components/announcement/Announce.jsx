import { useState, useEffect } from "react";
import CampaignIcon from "@mui/icons-material/Campaign";
import "./Announce.css";

const Announce = () => {
  const [announcements, setAnnouncements] = useState([]);

  // Simulate fetching data from a JSON file
  useEffect(() => {
    // Assuming announcements.json has an array of announcement objects
    fetch("./data/announcements.json")
      .then((response) => response.json())
      .then((data) => setAnnouncements(data))
      .catch((error) => console.error("Error fetching announcements:", error));
  }, []);

  return (
    <div className='container-announce'>
      <div className='row-announce'>
        {announcements.map((announcement, index) => (
          <div key={index} className='announcement-col'>
            <CampaignIcon className='alert-icon' />
            {announcement.event}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announce;
