import CollegeStudent from "../../assets/college-student.svg";
import GroupStudy from "../../assets/group-study.svg";
import "./Body.css";

function BodyComponent() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <img
            src={CollegeStudent}
            className='college-student'
            alt='College Student'
          />
        </div>
        <div className='col mid-col'>
          <h1>From College Admissions to 1st Job Placement...</h1>
          <h3>We are with you..!!</h3>
          <p className='action'>Secure Your Growth</p>
          <button className='btn cta'>Get Enrolled Now</button>
        </div>
        <div className='col'>
          <img src={GroupStudy} className='group-study' alt='Group Study' />
        </div>
      </div>
    </div>
  );
}

export default BodyComponent;
