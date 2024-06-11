import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/cropped_image.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";



export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={10} sm={3}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a><br /><br />
            </div>

              
            <h6>
                Mail :   
                 <a href="mailto:giorgikakhetelidze73@gmail.com">giorgikakhetelidze73@gmail.com</a>
            </h6>

          </Col>
        </Row>
      </Container>
    </footer>
  )
}