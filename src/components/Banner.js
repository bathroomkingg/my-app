import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
  } from "react-router-dom";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Software Engineer", "Data Analyst"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300-Math.random()*100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() =>{
            tick();
        },delta)

        return () => {clearInterval(ticker)};
    },[text])

    const tick = () => {
        let i = loopNum%toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText ===''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return (
        <Router>
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) => 
                            <div className={isVisible ? "animated__animate animate__fadeIn" : ""}>
                            <span className="tagline">
                                Welcome to my Portfolio
                            </span>
                            <h1>
                                {"Hi I'm Michael Liang: "}<span className="wrap">{text}</span>
                            </h1>
                            <p>Hi there! My name is Michael Liang. I completed my Master of Software Engineering at the University of California, Irvine. I received my bachelor's in Mathematical Computing from the University of Massachusetts, Amherst.</p>
                             <HashLink to='#connect'>
                                <button className="vvd">Let’s Connect <ArrowRightCircle size={25}></ArrowRightCircle></button>
                             </HashLink>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>
        </section>
        </Router>  
    )
}