import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CollegeStudent from "../../assets/college-student.svg";
import GroupStudy from "../../assets/group-study.svg";
import "./Body.css";

function BodyComponent() {
  return (
    <Container fluid className='container'>
      <Row className='justify-content-md-center'>
        <Col>
          <img src={CollegeStudent} className='college-student' />
        </Col>
        <Col className='mid-col'>
          <h1>From College Admissions to 1st Job Placement...</h1>
          <h3>We are with you..!!</h3>
          <p className='action'>Secure Your Growth</p>
          <button className='btn btn-danger cta'>Get Enrolled Now</button>
        </Col>
        <Col>
          <img src={GroupStudy} className='group-study' />
        </Col>
      </Row>
    </Container>
  );
}

export default BodyComponent;
