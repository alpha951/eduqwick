import { useState, useEffect } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonIcon from "@mui/icons-material/Person";
import "./Navbar.css";

function NavbarComponent() {
  const [collegesData, setCollegesData] = useState([]);
  const [coursesData, setCoursesData] = useState([]);
  const [examsData, setExamsData] = useState([]);

  useEffect(() => {
    // Simulate fetching data from a JSON file
    // Replace this with your actual data fetching logic when your backend is ready
    fetch("../../../data/colleges.json")
      .then((response) => response.json())
      .then((data) => setCollegesData(data))
      .catch((error) => console.error("Error fetching colleges data:", error));

    fetch("../../../data/courses.json")
      .then((response) => response.json())
      .then((data) => setCoursesData(data))
      .catch((error) => console.error("Error fetching colleges data:", error));

    fetch("../../../data/exams.json")
      .then((response) => response.json())
      .then((data) => setExamsData(data))
      .catch((error) => console.error("Error fetching colleges data:", error));
  }, []);

  const [showCollegesDropdown, setShowCollegesDropdown] = useState(false);
  const [showCoursesDropdown, setShowCoursesDropdown] = useState(false);
  const [showExamsDropdown, setShowExamsDropdown] = useState(false);

  const handleCollegesMouseEnter = () => {
    setShowCollegesDropdown(true);
  };

  const handleCollegesMouseLeave = () => {
    setShowCollegesDropdown(false);
  };

  const handleCoursesMouseEnter = () => {
    setShowCoursesDropdown(true);
  };

  const handleCoursesMouseLeave = () => {
    setShowCoursesDropdown(false);
  };

  const handleExamsMouseEnter = () => {
    setShowExamsDropdown(true);
  };

  const handleExamsMouseLeave = () => {
    setShowExamsDropdown(false);
  };

  return (
    <div className='navbar'>
      {/* ... (brand logo and other tabs) ... */}
      <img
        src='../../ui-idea/brand-logo.png'
        className='brand-logo'
        alt='Brand Logo'
      />
      <ul className='nav-list'>
        {/* Dropdown items  */}
        <li
          className='nav-item'
          onMouseEnter={handleCollegesMouseEnter}
          onMouseLeave={handleCollegesMouseLeave}>
          <a href='#' className='nav-item'>
            Colleges <ArrowDropDownIcon />
          </a>
          {showCollegesDropdown && (
            <ul
              className='dropdown'
              onMouseEnter={handleCollegesMouseEnter}
              onMouseLeave={handleCollegesMouseLeave}>
              {collegesData.map((college, index) => (
                <li key={index}>
                  <a href={college.url} className='dropdown-item'>
                    {college.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
        {/* ... (similar setup for Courses and Exams) ... */}
        {/* For Courses */}
        <li
          className='nav-item'
          onMouseEnter={handleCoursesMouseEnter}
          onMouseLeave={handleCoursesMouseLeave}>
          <a href='#' className='nav-item'>
            Courses <ArrowDropDownIcon />
          </a>
          {showCoursesDropdown && (
            <ul
              className='dropdown'
              onMouseEnter={handleCoursesMouseEnter}
              onMouseLeave={handleCoursesMouseLeave}>
              {coursesData.map((course, index) => (
                <li key={index}>
                  <a href={course.url} className='dropdown-item'>
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
        {/* For Exams */}
        <li
          className='nav-item'
          onMouseEnter={handleExamsMouseEnter}
          onMouseLeave={handleExamsMouseLeave}>
          <a href='#' className='nav-item'>
            Exams <ArrowDropDownIcon />
          </a>
          {showExamsDropdown && (
            <ul
              className='dropdown'
              onMouseEnter={handleExamsMouseEnter}
              onMouseLeave={handleExamsMouseLeave}>
              {examsData.map((exam, index) => (
                <li key={index}>
                  <a href={exam.url} className='dropdown-item'>
                    {exam.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
        {/* Static links */}
        <li className='nav-item'>
          <a href='#' className='nav-item'>
            Study Abroad
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' className='nav-item'>
            Get Counselling
          </a>
        </li>
        <li className='nav-item'>
          <a href='#' className='nav-item'>
            Latest News
          </a>
        </li>
      </ul>
      {/* ... (search form) ... */}{" "}
      <form className='search-form'>
        <input type='search' placeholder='Search' className='search-input' />{" "}
        <button type='button' className='search-btn'>
          Search{" "}
        </button>{" "}
      </form>
      <PersonIcon className='person-icon' fontSize='large' />
    </div>
  );
}

export default NavbarComponent;
