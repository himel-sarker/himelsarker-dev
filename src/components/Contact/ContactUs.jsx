import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import {
  FaHome,
  FaInfo,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "./firebase"; // Import Firebase configuration
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; // Import Firestore functions

const ContactUs = () => {
  const [showContent, setShowContent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const glassAnimation = useSpring({
    opacity: showContent ? 1 : 0,
    transform: showContent ? "translateY(0)" : "translateY(100px)",
  });

  useEffect(() => {
    const delay = setTimeout(() => {
      animateContent();
    }, 100);
    return () => clearTimeout(delay);
  }, []);

  const animateContent = () => {
    setShowContent(!showContent);
  };

  const handleLinkClick = (event) => {
    event.preventDefault();
    animateContent();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        // ==========================================
        // STEP 1: Save to Firebase Console (Existing Code)
        // ==========================================
        const docRef = await addDoc(collection(db, "contacts"), {
          ...formData,
          timestamp: serverTimestamp()
        });
        
        console.log("✅ Document written with ID: ", docRef.id);

        // ==========================================
        // STEP 2: Send to Backend for Gmail (NEW CODE)
        // ==========================================
        
        const backendUrl = '/.netlify/functions/contact';

        
        try {
            const response = await fetch(backendUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          });
          
          if (response.ok) {
            console.log("✅ Email notification sent to Gmail!");
          } else {
            console.warn("⚠️ Backend responded with an error.");
          }
        } catch (emailError) {
          // We DON'T throw an error here. We just log it.
          // Why? Because the message is already safe in Firebase. 
          // We don't want to show the user an error if only the Gmail part failed.
          console.error("⚠️ Saved to Firebase, but Gmail notification failed:", emailError);
        }

        // ==========================================
        // STEP 3: Success UI
        // ==========================================
        toast.success("Message sent successfully!", { position: "top-center" });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        
      } catch (error) {
        // This catch block ONLY triggers if Firebase completely fails
        console.error("❌ Error adding document to Firebase: ", error);
        toast.error("Failed to send message. Please try again.", {
          position: "top-center",
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="contact-container">
      <Breadcrumbs className="contactBred" aria-label="breadcrumb">
        <Link underline="hover" sx={{ display: "flex", alignItems: "center", color: "green", fontWeight: "bold" }} href="/home">
          <FaHome className="mr-0.5" /> HOME
        </Link>
        <Link underline="hover" sx={{ display: "flex", alignItems: "center", color: "green", fontWeight: "bold" }} href="/about">
          <FaInfo className="mr-0.5" /> About
        </Link>
        <Link underline="hover" sx={{ display: "flex", alignItems: "center", color: "green", fontWeight: "bold" }} href="/skills">
          <FaTools className="mr-0.5" /> Skills
        </Link>
        <Link underline="hover" sx={{ display: "flex", alignItems: "center", color: "green", fontWeight: "bold" }} href="/projects">
          <FaProjectDiagram className="mr-0.5" /> Projects
        </Link>
        <Link underline="hover" sx={{ display: "flex", alignItems: "center", color: showContent ? "lightgreen" : "green", fontWeight: "bold" }} href="/contact">
          <FaEnvelope className="mr-0.5" /> Contact Us
        </Link>
      </Breadcrumbs>
      
      <div className="Contact-content">
        <div className="Contact-name">
          <h1 className="Contact-text">
            My&nbsp;<strong style={{ color: "green" }}> Contact</strong>
          </h1>
        </div>
        <animated.div style={glassAnimation} className="glass-container">
          <Form className="glass-effect" onSubmit={handleSubmit}>
            <FormGroup className="glass-effect-input">
              <h2 className="GetinTouch">Get in Touch</h2>
              
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
              {formErrors.name && <div className="error-message">{formErrors.name}</div>}
              
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
              {formErrors.email && <div className="error-message">{formErrors.email}</div>}
              
              <Label for="subject">Subject</Label>
              <Input type="text" name="subject" id="subject" placeholder="Enter the subject" value={formData.subject} onChange={handleChange} />
              {formErrors.subject && <div className="error-message">{formErrors.subject}</div>}
              
              <Label for="message">Message</Label>
              <Input type="textarea" name="message" id="message" placeholder="Enter your message" value={formData.message} onChange={handleChange} style={{ minHeight: '120px' }} />
              {formErrors.message && <div className="error-message">{formErrors.message}</div>}
            </FormGroup>
            
            <div className="sendButton">
              <Button color="success" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit"}
              </Button>
            </div>
          </Form>
        </animated.div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;