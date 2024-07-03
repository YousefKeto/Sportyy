import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Programs.css';

const Programs = () => {
  return (
    <Container fluid className="programs">
      <div className="hero-section">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <h1 className="hero-title">Discover Our Programs</h1>
              <p className="hero-subtitle">Achieve your fitness goals with our diverse range of programs</p>
              <Link to="/" className="btn custom-button btn-lg">Join Us Today</Link>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="my-5">
        <Row className="text-center">           
          <Col>
            <h2 className="section-title">Our Programs</h2>
            <p className="section-subtitle">Explore our diverse range of programs designed to help you achieve your fitness goals.</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {programDetails.map((program, index) => (
            <Col xs={12} md={6} lg={4} className="mb-4" key={index}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{program.title}</Card.Title>
                  <Card.Text>{program.description}</Card.Text>
                  <Button className="custom-button">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="cta-section text-center py-5">
        <h2 className="cta-title">Ready to Get Started?</h2>
        <p className="cta-subtitle">Sign up now and start your fitness journey with us!</p>
        <Button size="lg" className="custom-button">Sign Up Now</Button>
      </div>
      <footer className="footer" id="footer">
        <Container fluid>
          <Row className="text-center mb-4">
            <Col lg={4} className="footer-item">
              <h3>Our Location</h3>
              <p>XYZ Lotus, Aswan</p>
            </Col>
            <Col lg={4} className="footer-item">
              <h3>Opening Hours</h3>
              <p>Monday to Sunday 8:00 AM - 10:00 PM</p>
            </Col>
            <Col lg={4} className="footer-item">
              <h3>Contact Us</h3>
              <p>+201149159336</p>
              <p>Ketolol1123@gmail.com</p>
              <div className="social-links">
                <a href="https://www.facebook.com/yusef.keto.5/"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="https://www.youtube.com/@KetoCoder"><i className="fab fa-youtube"></i></a>
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col className="text-center">
              <div className="copyright">
                <p>&copy; 2024 - Designed by Yusef Keto</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </Container>
  );
}

const programDetails = [
  {
    title: 'Program 1',
    description: 'This program focuses on improving cardiovascular health and endurance.'
  },
  {
    title: 'Program 2',
    description: 'Strengthen your muscles and bones with this intensive strength training program.'
  },
  {
    title: 'Program 3',
    description: 'Enhance your flexibility and balance with our yoga and pilates program.'
  }
];

export default Programs;
