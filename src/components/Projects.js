import { Col, Container, Row, Tab, TabContainer } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import { ProjectCard } from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

    const projects1 = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
          },
    ]
    const projects2 = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
          },
    ]
    const projects3 = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
          },
    ]
    return (
        <section className="project" id="projects">
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Projects</h2>
                    <p>Here you'll find a collection of my work spanning various domains</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">School Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Open Source Contributions</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Industry Projects</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                            <div className="justify-content-center">
                              <Row className="justify-content-center">
                            {
                              projects1.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                              </Row>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <div className="justify-content-center">
                              <Row className="justify-content-center">
                            {
                              projects2.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                              </Row>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <div className="justify-content-center">
                              <Row className="justify-content-center">
                            {
                              projects3.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                              </Row>
                            </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
          <img className="background-image-right" src={colorSharp2}></img>
        </section>
      )
}