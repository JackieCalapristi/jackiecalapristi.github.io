import React from "react"
// Icons
import { faGithub, faLinkedinIn, faMediumM, faSoundcloud } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Styles
import { ContactWrapper, IconsWrapper } from "./Contact.styles"

const Contact = () => (
  <ContactWrapper>
    <h4><a href="#" id="contact" >Get in Touch</a></h4>
    <IconsWrapper>
      <a target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jackie.lc11@gmail.com&body=Hey Jackie, let's get coffee!"><FontAwesomeIcon icon={faEnvelope} /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jacquelinecalapristi/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/JackieCalapristi/"><FontAwesomeIcon icon={faGithub} /></a>  
      <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@jackie.lc11"><FontAwesomeIcon icon={faMediumM} /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/jackiecalapristi"><FontAwesomeIcon icon={faSoundcloud} /></a>
    </IconsWrapper>
  </ContactWrapper>
)

export default Contact