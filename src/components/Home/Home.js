import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from '../../images/pngegg (3).png';
import cardimg1 from '../../images/anastase-maragos-9dzWZQWZMdE-unsplash.jpg';
import cardimg2 from '../../images/anastase-maragos-7kEpUPB8vNk-unsplash.jpg';
import cardimg3 from '../../images/hayley-kim-studios-eot-ka5dM7Q-unsplash.jpg';
import './Home.css';

const Home = () => {
  return (
    <Container fluid className='home'>
      <Row className='align-items-center mb-5'>
        <Col sm={6} className='d-flex justify-content-center'>
          <div className='content-container text-center'>
            <h1>Welcome to Sporty</h1>
            <p className='par'>Discover the best in our programs. At Sporty, we are dedicated to providing you with the highest quality experience.</p>
            <Button as={Link} to="/programs" className='home-btn' variant="outline-light">Our Programs</Button>
          </div>
        </Col>
        <Col sm={6} className='d-flex align-items-end'>
          <Image src={img1} rounded className='home-image' />
        </Col>
      </Row>

      <Row className='featured-programs justify-content-center'>
        {[cardimg1, cardimg2, cardimg3].map((img, index) => (
          <Col key={index} xs={12} md={6} lg={4} className='mb-4'>
            <Card className='h-100'>
              <Card.Img variant="top" src={img} />
              <Card.Body className='d-flex flex-column'>
                <Card.Title>Program {index + 1}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button as={Link} to="/programs" variant="outline-light" className='mt-auto learnbtn'>Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className='text-center mt-4'>
        <Button as={Link} to="/programs" variant="outline-light">View All Programs</Button>
      </div>

      <h2 className="text-center my-4 text-white">Benefits of Sports</h2>

      <Row className="benefits-section my-4 justify-content-center">
        {[
          { title: 'Physical Benefits', items: ['Improved Cardiovascular Health: Strengthens the heart, reduces blood pressure, and manages weight.', 'Enhanced Muscle and Bone Strength: Improves muscle tone and bone density.', 'Better Coordination and Balance: Enhances body coordination and balance.'] },
          { title: 'Mental Benefits', items: ['Stress Relief: Releases endorphins that reduce stress and improve mood.', 'Improved Cognitive Function: Leads to better memory, quicker learning, and increased concentration.', 'Enhanced Self-Esteem: Achieving goals boosts confidence and self-worth.'] },
          { title: 'Social Benefits', items: ['Teamwork and Cooperation: Teaches how to work together and communicate effectively.', 'Building Friendships: Leads to lifelong friendships and a sense of belonging.', 'Learning Discipline and Leadership: Teaches discipline and leadership skills.'] }
        ].map((benefit, index) => (
          <Col key={index} lg={4} className="benefit">
            <Card className='h-100'>
              <Card.Body>
                <Card.Title>{benefit.title}</Card.Title>
                <Card.Text>
                  <ul>
                    {benefit.items.map((item, idx) => <li key={idx}>{item}</li>)}
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
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
}

export default Home;