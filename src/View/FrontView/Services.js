import React, { useState ,useEffect} from 'react'
import { Col, Container, Row } from 'reactstrap'
import about from '../Assets/images/about.jpeg'
import heroSmallBg from '../Assets/images/service-bg.jpg'

export default function Services() {

    const [showSoftware, setShowsoft] = React.useState()
    const [showHardware, setShowHard] = React.useState()
    const [showNetwork, setShowNet] = React.useState()
    const [showClient, setShowClient] = React.useState()
    const [showSD, setShowSD] = React.useState()

    const onClickSD = () => {
        setShowsoft()
        setShowSD(1)
        setShowHard()
        setShowNet()
        setShowClient()
    }
    const onClickSoft = () => {
        setShowsoft(1)
        setShowHard()
        setShowNet()
        setShowClient()
        setShowSD()

    }
    const onClickNet = () => {
        setShowsoft()
        setShowHard()
        setShowNet(1)
        setShowClient()
        setShowSD()

    }
    const onClickHard = () =>{
        setShowHard(1)
        setShowsoft()
        setShowNet()
        setShowClient()
        setShowSD()

    } 
    const onClickClient = () =>{
        setShowClient(1)
        setShowHard()
        setShowsoft()
        setShowNet()
        setShowSD()

    } 
    return (
        <>
                 <section className='component-bg' style={{backgroundImage: `url(${heroSmallBg})`, backgroundSize:'contain',height:'100vh'}} >

                <Container>
                    <Row className='justify-content-center'>
                        <Col md={12}>
                            <div>

                                <h1 className='text-center about-heading text-white '>My Services</h1>
                            </div>
                        </Col>
                        <Col md={8} className="mt-3 banner-text-area">

                            <ul className='serviceList'>
                                <li>
                                    <div className='mt-3'>
                                        <h3 onClick={onClickSoft}>SOFTWARE</h3>
                                    </div>
                                </li>
                                {showSoftware &&
                                <div>
                                    <p className='text-left'>
                                    Software Installation. Active Directory. Virus Prevention. System Installations and Configurations. Software Configuration. Windows 95/98/2000/2003/NT4/XP/Vista/7/Server 2003/2008 Installation/Upgradation/Management. Software Diagnostics. Statistical Reporting. Systems security and auditing. System Upgrades. FTP/HTTP. Back-up and Restoration of Data. Internet Explorer 5/6/7/8. Netscape Navigator. Outlook 98/2000/XP. Mozilla, Thunderbird, Opera, Chrome. Photoshop and Illustrator. MS Office Suite.
                                    </p>
                                    
                                </div>}
                                <li>
                                    <div className='mt-3'>
                                        <h3 onClick={onClickHard}>HARDWARE</h3>
                                    </div>
                                </li>
                                {showHardware &&
                                <div>
                                    <p className='text-left'>
                                    Experience with repairs, services, and restored parts, boards, and equipment (South Plantation High School), as well as arranged workstations and hubs. Computer Configuration, Assembly. PC hardware Designs and Arrangement. Desktop Maintenance & Repair. Hardware Installation & Configuration. Scanners, Printers, Webcams, Optical tools and Modems (DSL & Dial-up) configuration. DVD/CD/RW Memory Chips, SCSI/IDE/EIDE Hard Drives, SCSI Manager Cards, Tape Backups Drives software-hardware configuration. PDA, Bluetooth, Touchpad, Infrared configuration. Wi-Fi, Wireless Routers, and Access-point setup, configuration & authentication.
                                    </p>
                                    
                                </div>}
                                <li>
                                    <div className='mt-3'>
                                        <h3 onClick={onClickNet}>NETWORKING & CISCO</h3>
                                    </div>
                                </li>
                                {showNetwork &&
                                <div>
                                    <p className='text-left'>
                                    Communications Security. OSPF. PPP. EIGRP/ IGRP. Cisco Firewalls (PIX). CHAP. Multi-level Security Sys. PAP. IPSEC. RIP. CSU/DSU. ISO/OSI Levels. Precautionary Maintenance. Cisco 2600, 3000, Routers. System upgrading. Cisco 2900, 3500, 5000 Switches. LAN. Wireless. Networking Technologies. Network Security. WAN & VPN. TCP/IP. VLANs. Ethernet. Peer to Peer Networks. Router Configuration. ADS/ISDN. Client-Server Technology.
                                    </p>
                                    
                                </div>}

                                <li>
                                    <div className='mt-3'>
                                        <h3 onClick={onClickClient}>CLIENT SERVICE</h3>
                                    </div>
                                </li>
                                {showClient &&
                                <div>
                                    <p className='text-left'>
                                    Consultative Relationships. Customer Care. Customer Technical Support & Training. Troubleshooting. Desktop & User Support. Able to transmit technical info to users of all abilities. Self-provoked to preserve understanding of existing technology. Done full practical and over the telephone troubleshooting on several different systems, platforms, and hardware configurations. High direction towards customer service. Able to manage aid desk requests under pressure. Skilled in help-desk processes like problem rise procedures, problem resolution script and severity stages. Very tolerant and patient. Clear and easy explanations. Able to perform closely with people to build solutions to computer difficulties. Able to use logic and research to recognize strengths and limitations of different technical methods.
                                    </p>
                                    
                                </div>}

                                <li>
                                    <div className='mt-3'>
                                        <h3 onClick={onClickSD}>SOFTWARE DEVELOPMENT</h3>
                                    </div>
                                </li>
                                {showSD &&
                                <div>
                                    <p className='text-left'>
                                    Software development. Mobile app creation. Front-end/back-end web. Database/server management. Graphic design. Video game development.
                                    </p>
                                    
                                </div>}
                            </ul>
                            


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
