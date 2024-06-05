import { Col, Container, Row } from "react-bootstrap"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer =() => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center justify-content-end">
                <Col sm={6} className="text-center text-sm-end">
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/xiaorong-liang-65048724b/" target="_blank" rel="noopener noreferrer">
                    <img src={navIcon1} alt="LinkedIn" />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100084675248757" target="_blank" rel="noopener noreferrer">
                    <img src={navIcon2} alt="Facebook" />
                  </a>
                  <a href="https://www.instagram.com/bathroomkinggg/" target="_blank" rel="noopener noreferrer">
                    <img src={navIcon3} alt="Instagram" />
                  </a>
                 </div>
                 <p>CopyRight 2024. All Right Reserved</p>
                </Col>
                </Row>
            </Container>
        </footer>
    )
}