import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import ProgressbarComponent from '../Components/Progressbar'
import { Link } from "react-router-dom";
import { ProgressBar } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <section className='homebackimg'>
        <Container>
          <Row className='banner-text-row'>
            <Col md={7} className='banner-text-area'>
              <div data-aos="zoom-in">
                <h2 className=' text-danger '>IT Technician and Developer!</h2>
                <h1>Hey, I am <span className='display-4 text-bolder text-danger'>Enrik Hoxha</span></h1>
                <p>IT Technician from New York.</p>
                <p className=''>I provide services to support, fix, and maintain the hardware and software of personal and organizations’ computer systems, as well as web and app development in several programming languages and frameworks.</p>
                <span className=''>
                  <Link to="/about">
                    <Button type='button' className='btn btn-danger  mt-3 px-4 py-2 borderRadius'>About Me</Button></Link>
                </span>
              </div>
            </Col>
          </Row>
        </Container>

      </section>


      <Container>
        <Row>
          <Col md={12}>
            <div className='pt-5'>
              <h1 className='text-center about-heading text-danger'>Skills</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6} >
            <h4>Equipment repairs</h4>
            <ProgressBar variant="danger" label={90} animated now={90} />
          </Col>
          <Col md={6} >
            <h4>Device configuration</h4>
            <ProgressBar variant="danger" label={80} animated now={80} />

          </Col>
        </Row>
        <Row>
          <Col md={6} >
            <h4>Computer diagnostics</h4>
            <ProgressBar variant="danger" label={75} animated now={75} />

          </Col>
          <Col md={6} >
            <h4>Privacy and security</h4>
            <ProgressBar variant="danger" label={90} animated now={90} />

          </Col>
        </Row>
        <Row>
          <Col md={6} >
            <h4>Problem-solving</h4>
            <ProgressBar variant="danger" label={70} animated now={70} />

          </Col>
          <Col md={6} >
            <h4>EOL laptop replacement</h4>
            <ProgressBar variant="danger" label={60} animated now={60} />

          </Col>
        </Row>
        <Row>
          <Col md={6} >
            <h4>Encrypting/Decrypting of devices</h4>
            <ProgressBar variant="danger" label={56} animated now={56} />

          </Col>
          <Col md={6} >
            <h4>Microsoft Office Package</h4>
            <ProgressBar variant="danger" label={90} animated now={90} />

          </Col>
        </Row>
        <Row>
          <Col md={6} >
            <h4>ConnectWise</h4>
            <ProgressBar variant="danger" label={70} animated now={70} />

          </Col>
          <Col md={6} >
            <h4>ServiceNow</h4>
            <ProgressBar variant="danger" label={80} animated now={80} />

          </Col>

        </Row>
        <Row>
          
        <Col md={6} >
            <h4>Installations and troubleshooting</h4>
            <ProgressBar variant="danger" label={80} animated now={80} />

          </Col>
          <Col md={6} >
            <h4>Hardware/software maintenance</h4>
            <ProgressBar variant="danger" label={75} animated now={75} />

          </Col>
          
        </Row>
        <Row>
          <Col md={6} >
            <h4>Java</h4>
            <ProgressBar variant="danger" label={70} animated now={70} />

          </Col>
          <Col md={6} >
            <h4>Python</h4>
            <ProgressBar variant="danger" label={60} animated now={60} />

          </Col>
        </Row>
        <Row>
          <Col md={6} >
            <h4>C/ C++/ C#</h4>
            <ProgressBar variant="danger" label={56} animated now={56} />

          </Col>
          <Col md={6} >
            <h4>Html/CSS/JavaScript</h4>
            <ProgressBar variant="danger" label={90} animated now={90} />

          </Col>
        </Row>
        <Row>
          <Col md={6} >
            <h4>MySQL</h4>
            <ProgressBar variant="danger" label={70} animated now={70} />

          </Col>
          <Col md={6} >
            <h4>MongoDB</h4>
            <ProgressBar variant="danger" label={80} animated now={80} />

          </Col>
          <Col md={6} >
            <h4>React</h4>
            <ProgressBar variant="danger" label={80} animated now={80} />

          </Col>

          <Col md={6} >
            <h4>NodeJs</h4>
            <ProgressBar variant="danger" label={80} animated now={80} />

          </Col>
          <Col md={6} >
            <h4>Django</h4>
            <ProgressBar variant="danger" label={80} animated now={80} />

          </Col>
        </Row>
      </Container>
    </>
  )
}
