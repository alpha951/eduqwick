import CampaignIcon from "@mui/icons-material/Campaign";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Announce.css";

const Announce = () => {
  return (
    <Container className='container-announce'>
      <Row className='justify-content-md-center'>
        <Col xs={0}>
          <CampaignIcon className='alert-icon' />
        </Col>
        {/* These below cols data should be load dynamically from backend/json file */}
        <Col>JEE Answer key 2023 released</Col>
        <Col>DU to release new course list</Col>
        <Col>LPU application form live</Col>
        <Col>Parul to conduct convocation</Col>
      </Row>
    </Container>
  );
};

export default Announce;
