import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import about from '../Assets/images/about.jpeg'
import heroSmallBg from '../Assets/images/about-bg.jpg'
export default function About() {
  return (
    <>
      <section className='component-bg' style={{backgroundImage: `url(${heroSmallBg})`,height:'auto'}} >
        <Container>
          <Row >
            <Col md={12} className='mt-5'>
              <div>
                <h1 className='text-center about-heading text-white '>About Me</h1>
              </div>
            </Col>
            </Row>
            <Row className="mt-3 align-items-center banner-text-area">
            <Col md={5}>
              <div className='mt-3'>
                <img src={about} alt='' className='borderRadius' width="100%" />
              </div>
            </Col>
            <Col md={7} className=" ">
              <div className='mt-3'>
                <h1 className='text-center'>IT Technician and Developer</h1>
              </div>
            
              <div>
                <p className='text-justify'>
                Hello mates! I am Enrik, a passionate IT Technician and Developer that is going to rock your computer systems and programs! Intuitive, smart and very funny, I am here to gain your computers' heart.
                </p>
                <p className='text-justify'>
                I have been working from a year now in one of the worldwide leader companies in business management consultancy. They find me a focused, hard-working, punctual and reliable person, and they have trusted me the maintenance of the IT sector. With the experience gained there, I have the confidence of running my own start-up in IT field.
                </p>
                <p className='text-justify'>
                During my work experience, I have dealt with EOL laptop replacement, hardware examinations, device configuring, setup of docker stations and servers, encryption and decryption of devices, and monitoring of security issues. I have also obtained a number of certificated related to the field, including Microsoft Technology Associate, CCA-V, CompTIA Network+, MCSE, CompTIA Security+, and CISSP. I have experience not only in hardware solutions, but also in customer support.
                </p><p className='text-justify'>
                My second specialization--for which I am very passionate about--is web development. I am a Computer Science undergraduate that has worked on several personal and team projects in web development and app creation.
With excellent communication skills, I am ready to gain your hearts too! Contact me if you need a person that gets the job done in the best way possible!
                </p>
              </div>
            </Col>
          </Row>
          {/* Skills */}
          
          <Row>
          </Row>
        </Container>
      </section>
    </>
  )
}
