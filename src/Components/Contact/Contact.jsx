import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faPhone} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin,faGithub,faInstagram} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router";
import Separation from "../Separation";
import emailjs from '@emailjs/browser';


function Contact() {

  const[Name,setName] = useState("")
  const[email,setEmail] = useState("")
  const[message,setMessage] = useState("")
  const[showMsg,setShowMsg] = useState(false)
  const[isError,setIsError] = useState(false)

  const handleSubmission = async(e) =>{
    e.preventDefault()

    var params = {
        from_name:Name,
        email_id:email,
        message:message
    }
    try {
        const res = await emailjs.send("service_gid9vv8", "template_1kktiwm", params,"E8pHUk_7ggh8qOQgT");
        console.log("Email sent Successfully:",res)
        setShowMsg(true)
        setTimeout(()=>{
          setShowMsg(false)
          // Clear the form
          setName("")
          setEmail("")
          setMessage("")
        },3000)
    } catch (error) {
        setIsError(true)
    }

  }

  return (
    <>
    <section className="contact-me center-vertically">
      <h1>Contact Me</h1>
      <div className="contact-sec">
        <div className="left-contact">
          <div className="phone">
              <FontAwesomeIcon icon={faPhone} className="phone-icon"/> <span>(+91) 9699678946</span>
          </div>
          <div className="email">
              <FontAwesomeIcon icon={faEnvelope} className="email-icon"/>
              <span>rushilandge12@gmail.com</span>
          </div>
          <div className="social">
            <Link
              to="https://www.linkedin.com/in/rushikeshlandge"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link to="https://github.com/LandgeRushikesh" target="_blank">
              <FontAwesomeIcon icon={faGithub}/>
            </Link>
            <Link
              className="leetcode"
              to="https://leetcode.com/u/rushilandge12/"
              target="_blank"
            >
              <img src="/LeetCode_Logo.png" />
            </Link>
            <Link to="https://www.instagram.com/_rushilandge/" target="_blank">
              <FontAwesomeIcon icon={faInstagram}/>
            </Link>
          </div>
        </div>
        <div className="right-contact">
          <h3>Message Me....</h3>
          <form className="form" onSubmit={handleSubmission}>
            <input
              type="text"
              name="Name"
              id="name"
              placeholder="Your Name"
              value={Name || ""}
              onChange={(e)=>setName(e.target.value)}
              required
            />
            <input
              type="email"
              name="Email"
              id="email"
              placeholder="Your Email"
              value={email || ""}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
            <textarea
              name="Message"
              id="message"
              placeholder="Your Message"
              cols="15"
              value={message || ""}
              onChange={(e)=>setMessage(e.target.value)}
              required
            ></textarea>
            {showMsg && <p className="confirmation-msg">message sent successfully!!!</p>}
            {isError && <p className="confirmation-msg">Failed to send message!!!</p>}
            <button className="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
    <Separation />
    </>
  );
}

export default Contact;
