import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/cropped_image.png";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  // you can add roles and skills here
  const toRotate = ["Web Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    } else {
    }
  };

  const handleClick2 = () => {
    window.location.href = 'mailto:giorgikakhetelidze73@gmail.com';
  };


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={12}>
            <span className="tagline">Welcome to my Portfolio</span>

            <div className="middle-section">
              <div>
                <h1>
                  {`Hi I'm Giorgi, `} <br />
                  <span className="wrap">web developer</span>
                </h1>
              </div>

              <img src={headerImg} alt="Header Img" className="header-img" />
            </div>

            <p >
              I am a third-year Information Technologies student at the Business
              and Technology University (BTU), specializing in web development.
              Proficient in HTML, CSS, and JavaScript,Python(basics). I have
              also developed a strong command of React over the past six months,
              mastering its component-based architecture.Skilled in creating
              efficient, modular, and scalable web applications.I am eager to
              bring my skills and enthusiasm to innovative some more web development
              projects.
            </p>
            <button onClick={handleClick2}>
              Let's connect <ArrowRightCircle size={25} />{" "}
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
