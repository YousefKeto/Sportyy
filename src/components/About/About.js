import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './About.css';
import johnDoeImage from '../../images/team1.jpg';
import janeSmithImage from '../../images/team2.jpg';
import mikeJohnsonImage from '../../images/team3.jpg';

const AboutUs = () => {
  return (
    <Container fluid className='about-us'>
      <Row className='text-center section about-hero'>
        <Col className='about-hero-content'>
          <h1 className='text-center section-title'>About Us</h1>
          <p>Welcome to Sporty! We are dedicated to helping you achieve your fitness goals through our diverse range of programs and expert guidance.</p>
        </Col>
      </Row>

      <Row className='section'>
        <Col>
          <h2 className='section-title text-center'>Our Trainers</h2>
          <Row className='justify-content-center'>
            <Col xs={12} sm={6} md={4} lg={3} className='team-member'>
              <Image src={johnDoeImage} alt='John Doe' roundedCircle />
              <h3>John Doe</h3>
              <p>Founder & CEO</p>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className='team-member'>
              <Image src={janeSmithImage} alt='Jane Smith' roundedCircle />
              <h3>Jane Smith</h3>
              <p>Head Trainer</p>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className='team-member'>
              <Image src={mikeJohnsonImage} alt='Mike Johnson' roundedCircle />
              <h3>Mike Johnson</h3>
              <p>Nutrition Specialist</p>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className='section our-story'>
        <Col className='our-story-content'>
        <h1 className='text-center section-title'> Our Story</h1>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical <hr/> Latin literature from 45 BC, making it over 2000 years old.<br/> Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur</p>
        </Col>
      </Row>
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
};

export default AboutUs;
