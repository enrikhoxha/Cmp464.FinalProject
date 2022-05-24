import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import Progressbar from '../Components/Progressbar'
import { Link } from "react-router-dom";
import heroSmallBg from '../Assets/images/project-bg.jpg'

export default function Projects() {
    return (
        <>
      <section className='component-bg' style={{backgroundImage: `url(${heroSmallBg})`}} >

                <Container>
                    <Row className='pt-2 justify-content-center'>
                        <Col md={12}>
                            <div>
                                <h1 className='text-center about-heading text-white '>My Projects</h1>
                                <p className='py-3 text-center text-white' style={{fontSize:'30px'}}>Here is The List of Projects That I did in my professional working experience</p>
                            </div>
                        </Col>
                        <Col md={3} className='banner-text-area m-1'>
                            <div data-aos="zoom-in">
                                <h2 className=' text-danger '>Wordle Game Clone</h2>
                                <p>What is it?</p>
                                <p className=''>This project is a simple website to save your favourite links. It is developed with React framework. The goal of the project is to give you the opportunity to save your favourite links in a table. You can add a link, put a name to it and also delete links you no longer wants. The components of the project are LinkContainer.js, Form.js and Table.js.</p>
                                <span className=''>
                                   <Link to="/wordle"> <Button type='button' className='btn btn-danger  mt-3 px-4 py-2 borderRadius'>Check it!</Button></Link>
                                </span>
                            </div>
                        </Col>
                        <Col md={3} className='banner-text-area m-1'>
                            <div data-aos="zoom-in">
                                <h2 className=' text-danger '>Personal Link Saver</h2>
                                <p>What is it?</p>
                                <p className=''>This project is a simple website to save your favourite links. It is developed with React framework. The goal of the project is to give you the opportunity to save your favourite links in a table. You can add a link, put a name to it and also delete links you no longer wants. The components of the project are LinkContainer.js, Form.js and Table.js .</p>
                                <span className=''>
                                    <a target="_blank" href="https://github.com/enrikhoxha/favlinks.hw"><Button type='button' className='btn btn-danger  mt-3 px-4 py-2 borderRadius'>Check it!</Button></a>
                                </span>
                            </div>
                        </Col>
                        <Col md={3} className='banner-text-area m-1'>
                            <div data-aos="zoom-in">
                                <h2 className=' text-danger '>MineSweeper Clone</h2>
                                <p>What is it?</p>
                                <p className=''>This project is a clone of the famous MineSweeper game written in JAVA. The goal of the game is to sweep all mines from a mine field. If the player clicks on the cell which contains a mine, the mine detonates, and the game is over. The project is composed of two classes that contain respectively the logic of the app and the interface to play it.</p>
                                <span className=''>
                                   <a target="_blank" href="https://github.com/enrikhoxha/MineSweeperClone"> <Button type='button' className='btn btn-danger  mt-3 px-4 py-2 borderRadius'>Check it!</Button></a>
                                </span>
                            </div>
                        </Col>
                       
                    </Row>
                </Container>

            </section>
        </>
    )
}
