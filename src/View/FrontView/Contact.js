import React from 'react'
import { Button, Col, Container, Input, Label, Row } from 'reactstrap'
import Progressbar from '../Components/Progressbar'
import { Link } from "react-router-dom";
import heroSmallBg from '../Assets/images/contact-bg.jpg'

export default function Contact() {
    return (
        <>
      <section className='component-bg' style={{backgroundImage: `url(${heroSmallBg})`}} >

                <Container className=' mt-5'>
                 
                    <Row className='pt-2 justify-content-center'>
                        <Col md={8}>
                           <div className='card'>
                           <div>
                                <h1 className='text-center about-heading text-danger card-title'>Contact Me</h1>
                                <p className='text-center py-3'>Do you have any Query? Wanna get quot? Send me Message with your email by filling the form below</p>
                            </div>
                               <div className='card-body'>
                                   <form method='POST'>
                                       <Row>
                                          <Col md={6} className="form-group">
                                              <Label for="name">
                                                  Your Name
                                              </Label>
                                              <Input type='text' id='name' placeholder='Your Name' name='name'/>
                                          </Col>
                                          <Col md={6} className="form-group">
                                              <Label for="email">
                                                  Your Email
                                              </Label>
                                              <Input type='email' id='email' placeholder='enrikhoxha@example.com' name='name'/>
                                          </Col>
                                          <Col md={12} className="form-group">
                                              <Label for="message">
                                                  Your Message
                                              </Label>
                                              <textarea placeholder='Your Message' className='form-control' rows={5} id="message" name='message'>

                                              </textarea>
                                          </Col>
                                          <Col md={12}>
                                          <span className=''>
                                    <Button type='button' className='btn btn-danger  mt-3 px-4 py-2 borderRadius'>Send Message</Button>
                                </span>
                                          </Col>
                                       </Row>
                                   </form>
                               </div>
                           </div>
                        </Col>
                       
                    </Row>
                </Container>

            </section>
        </>
    )
}
